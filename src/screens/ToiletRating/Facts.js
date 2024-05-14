import React, { useState } from 'react'
import { useApp } from '../../ContextAPI/AppContext'
import CancelBtn from '../../components/CancelBtn'
import BottomDiv from './components/BottomDiv'
import ShareOnTwitter from './ShareOnTwitter'
import {motion} from 'framer-motion'

const styles = {

  p: {width: "80%", marginTop: "30px",color: "#ffffff"}



}
const Facts = ({state}) => {
  const {mode} = useApp()
  const [showOtherRating, setShowOtherRating] = useState(false)

  if(showOtherRating){
    return(
      <ShareOnTwitter toiletName={state?.newToilet || state?.toiletName} setShowOtherRating={setShowOtherRating}/>
    )
    }
  return (
   
    <motion.div 
    className='island' style={(mode === "light" &&{backgroundColor:"#d0dbff", position:"relative"})||{position:"relative"}}
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    transition={{duration:0.4}}
    >
      
      <h1 style={(mode==="light" && {color:"#444444"}) || {color:"#ffffff"} } className='poppins-24px-500'>Toilet facts 🌚</h1>
      <p style={(mode==="light" && {...styles.p,color:"#444444"}) || styles.p} className='inter-15px-300'>Over 40,000 of our neighbours in the US 
manage to hurt themselves in the bathroom
every year. Who knew the toilet was so
treacherous?! King George II even died falling
off one in 1760!!!  😶‍🌫️</p>

    
    <BottomDiv setShowOtherRating={setShowOtherRating}/>
    </motion.div>
 
  )
}

export default Facts
