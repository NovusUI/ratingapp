import React, { useState } from 'react'
import { useApp } from '../../ContextAPI/AppContext'
import CancelBtn from '../../components/CancelBtn'
import BottomDiv from './components/BottomDiv'
import ShareOnTwitter from './ShareOnTwitter'
import {motion} from 'framer-motion'

const styles = {

  p: {width: "80%", marginTop: "30px",color: "#ffffff"}



}
const Facts = ({state, setShowFact}) => {
  const {mode} = useApp()
 

  const shareOnTwitter = () => {
    const message = encodeURIComponent('YourMessageHere');
    const hashtags = encodeURIComponent('YourHashtag1,YourHashtag2');
    const url = `https://twitter.com/intent/tweet?text=${message}&hashtags=${hashtags}`;
    window.open(url, '_blank');
  };

  return (
   
    <motion.div 
    className='island' style={(mode === "light" &&{backgroundColor:"#fff", position:"relative"})||{position:"relative"}}
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    transition={{duration:0.4}}
    onClick={()=>{setShowFact(false)}}
    >
      
      <h1 style={(mode==="light" && {color:"#444444"}) || {color:"#ffffff"} } className='poppins-24px-500'>Toilet facts 🌚</h1>
      <p style={(mode==="light" && {...styles.p,color:"#444444"}) || styles.p} className='inter-15px-300'>Over 40,000 of our neighbours in the US 
manage to hurt themselves in the bathroom
every year. Who knew the toilet was so
treacherous?! King George II even died falling
off one in 1760!!!  😶‍🌫️</p>

    
    <BottomDiv setShowOtherRating={shareOnTwitter}/>
    </motion.div>
 
  )
}

export default Facts
