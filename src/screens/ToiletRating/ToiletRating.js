import React, { useEffect, useState } from 'react'
import TitleDiv from '../../components/TitleDiv'
import Ratings from './components/Ratings'
import { useApp } from '../../ContextAPI/AppContext'
import { useLocation, useNavigate } from 'react-router-dom'
import { getPreviousRating, saveNewRating } from '../../firebase/controllers/ratings'
import { useAuth } from '../../ContextAPI/AuthContext'
import { getLocation } from '../../firebase/controllers/locations'
import Facts from './Facts'
import { AnimatePresence } from 'framer-motion'
import Comments from './Comments'


const styles = {
  commentBtn :{display:"flex", width:"100px", height:"50px", backgroundColor:"#D9D9D9",borderRadius:"20px", justifyContent:"center", alignItems:"center", marginRight:"20px"},
  twitterBtn: {display:"flex", width:"200px", height:"50px", backgroundColor:"#172844",color:"#fff",borderRadius:"20px", justifyContent:"center", alignItems:"center"}
}


const ToiletRating = () => {
  const {mode} = useApp()
  const location = useLocation()
  const state = location.state
  const navigate = useNavigate()
  const [ratings, setRatings] = useState({exellent:0,good:0,ok:0,bad:0,terrible:0})
  const [previousRating, setPreviousRating] = useState(null)
  const [showRatings, setShowRatings] = useState(false)
  const [locationId, setLocationsId] = useState(localStorage.getItem("locationId"))
  const [totalRating, setTotalRating] = useState(0)
  const [showFact, setShowFact] = useState(false)
  const [showComments, setShowComments] = useState(false)
  const [timer, setTimer] = useState(null)
 
  const {user} = useAuth()

  useEffect(()=>{

    if(!state){
      navigate("/")
      return
    }

    console.log(state)
    if(!locationId){
      setShowRatings(true)
      return
    }

   try {
   
     getLocation(locationId,(err,data)=>{
      if(!err && data){
       
        const {good = 0, excellent = 0, ok = 0, bad = 0, terrible = 0, totalRating = 0} = data
         
        setRatings({good, excellent,ok, bad, terrible})
        setTotalRating(totalRating)
      }else if(!err){
        setTotalRating(0)
      }else{
        throw err
      }
     })
    
  
    

     getPreviousRating(locationId,user.id,(err,data)=>{
      if(!err && data){
        
        setPreviousRating(data.rating)
        
      }else if(!err){
        setPreviousRating(null)
      }
      else{
        throw err
      }
       
     })

     
     setShowRatings(true)
     
   } catch (error) {
     console.log(error)
   }


  },[])


  const saveRating = (newRating) => {
    if (timer) {
      clearTimeout(timer);
    }
     console.log(ratings)
     saveNewRating(locationId,previousRating,newRating,user.id,state?.newToilet,state?.type,state?.isNew,user.role,(err,data)=>{
      if(!err && data){
         
        if(!previousRating){
          setTotalRating(prev=>++prev)
        }
        setLocationsId(data)
        
        
        const newRatings = ratings
        newRatings[newRating] +=1
    
        setRatings(newRatings)

        newRatings[previousRating] = --newRatings[previousRating]

        setPreviousRating(newRating)
        localStorage.setItem("locationId",data)

       

        // Set a new timer
        const newTimer = setTimeout(() => {
          setShowFact(true);
        }, 1500);
        setTimer(newTimer);

      }else{
        console.log(err)
      }
     })
  }

 

  if(showFact){
    return(
      <AnimatePresence>
      <Facts setShowFact={setShowFact} state={state}/>
      </AnimatePresence>
    )
  }

  if(showComments){
    return(
      <AnimatePresence>
        <Comments setShowComments={setShowComments} locationId={state.id} state={state}/>
      </AnimatePresence>
    )
  }

  return (
    <div className='container' style={(mode === "light" &&{backgroundColor:"#fff"})||{paddingTop:"0"}}>
      <TitleDiv title="Rate this toilet" subtitle={`#${state?.newToilet || state?.toiletName}`}/>
      <Ratings saveRating={saveRating} progress={ratings} totalRating={totalRating}/>
      <div style={{position:"fixed", bottom:" 20px", width:"100%", marginTop:"20px", padding:"0 10px", display:"flex", justifyContent:"center"}}>
        <div style={ styles.commentBtn} onClick={()=>setShowComments(true)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.59182 15.3042C2.34395 9.78675 6.40306 3.75 12.3609 3.75H12.6823C17.138 3.75 20.75 7.36201 20.75 11.8176C20.75 16.7785 16.7284 20.8 11.7676 20.8H3.9473C3.62905 20.8 3.34544 20.5991 3.23982 20.2989C3.13419 19.9987 3.22954 19.6645 3.47768 19.4652L5.44917 17.8819C5.53538 17.8127 5.56587 17.6951 5.52415 17.5927L4.59182 15.3042ZM12.3609 5.25C7.46834 5.25 4.13502 10.2074 5.98096 14.7383L6.91329 17.0268C7.20529 17.7435 6.99184 18.5669 6.38842 19.0515L6.07897 19.3H11.7676C15.9 19.3 19.25 15.95 19.25 11.8176C19.25 8.19044 16.3096 5.25 12.6823 5.25H12.3609Z" fill="#172844"/>
          </svg>
          <p className='poppins-10px-300'>Comments</p>
        </div>
        <div style={mode === "light" && {...styles.twitterBtn, backgroundColor:"#172844"} || styles.twitterBtn} onClick={()=>setShowFact(true)}>
          <p className='poppins-15px-500'>Share on twitter</p>
        </div>
      </div>
    </div>
  )
}

export default ToiletRating
