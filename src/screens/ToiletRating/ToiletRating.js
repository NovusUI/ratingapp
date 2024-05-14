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
  const [timer, setTimer] = useState(null)
 
  const {user} = useAuth()

  useEffect(()=>{

    if(!state){
      navigate("/")
      return
    }

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




  return (
    <div className='container' style={(mode === "light" &&{backgroundColor:"#d0dbff"})||{paddingTop:"0"}}>
      <TitleDiv title="Rate this toilet" subtitle={`#${state?.newToilet || state?.toiletName}`}/>
      <Ratings saveRating={saveRating} progress={ratings} totalRating={totalRating}/>
      
    </div>
  )
}

export default ToiletRating
