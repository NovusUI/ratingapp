import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import React, { useEffect } from 'react'
import { useAuth } from '../ContextAPI/AuthContext'
import Login from '../screens/Login';
import NavBar from './NavBar';
import ToiletList from '../screens/ToiletList/ToiletList';
import ToiletRating from '../screens/ToiletRating/ToiletRating';
import ShareOnTwitter from '../screens/ToiletRating/ShareOnTwitter';
import Facts from '../screens/ToiletRating/Facts';
import { auth, db } from '../firebase/config';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import Spinner from './Spinner';
import NewToilet from '../screens/NewToilet/NewToilet';

const Nav = () => {
  
    const {isLoggedIn,setUser, setIsLoggedIn, signIn, setToken, setLoading, loading} = useAuth()


    useEffect(() => {
      
    
        // Initial token refresh
        
  
         const unsubscribe =  onAuthStateChanged(auth, user => {
            if (user) {
          
              const userRef = doc(db, "users", user.uid);
              user.getIdToken(true).then((token)=>{
                console.log(token)
                setToken(token)
              })
     
              getDoc(userRef)
              .then((docSnapshot) => {
                if (docSnapshot.exists()) {
                  // Document data is available in docSnapshot.data()
                  const userData = docSnapshot.data();
                 
                  setUser(userData)
                  setIsLoggedIn(true)
                  setLoading(false)
                  
                } 
              })
              .catch((error) => {
                console.error("Error getting document:", error);
              });
              
              
      
            } else {
              setLoading(false)
            }
          },(error)=>{
           console.log(error)
          });
  
          return () =>  unsubscribe(); // Unsubscribe from the onAuthStateChanged listener
          
         }, [signIn]);

         if (loading) {	
            return (	
             <Spinner/>
            )	
          }
  
  return (
    <Router>
        <NavBar/>
   
        {
            !isLoggedIn && (
                <Routes>
                    <Route exact path='/'  element={<Login/>}>

                    </Route>
                </Routes>
            )
        }
        {
            isLoggedIn && (
                <Routes>
                <Route exact path='/' element={<ToiletList/>}>
                
                </Route>
                <Route path='/rate-toilet' element={<ToiletRating/>}></Route>
                <Route path='/share-on-twitter' element={<ShareOnTwitter/>}></Route>
                <Route path='/toilet-fact' element={<Facts/>}></Route>
                <Route path='/addnew' element={<NewToilet/>}></Route>
            </Routes>
            )
        }
    </Router>
  )
}

export default Nav
