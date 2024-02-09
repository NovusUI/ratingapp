import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import React from 'react'
import { useAuth } from '../ContextAPI/AuthContext'
import Login from '../screens/Login';
import NavBar from './NavBar';
import ToiletList from '../screens/ToiletList/ToiletList';
import ToiletRating from '../screens/ToiletRating/ToiletRating';
import ShareOnTwitter from '../screens/ShareOnTwitter';
import Facts from '../screens/Facts';

const Nav = () => {
  
    const {isLoggedIn} = useAuth()
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
            </Routes>
            )
        }
    </Router>
  )
}

export default Nav
