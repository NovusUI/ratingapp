import React, { useEffect } from 'react'
import { useApp } from '../../../ContextAPI/AppContext'

const styles = {
    rating: {
        width:"230px",
        height: "70px",
        marginBottom: "10px",
        display: "flex",
        alignItems: "center",
        
        backgroundColor:"#38393e",
        borderRadius: "15px",
        position:"relative",
        color: "#ffffff",
        border: "1px solid #AEB5C9",
    },

   progressBar: {
    height: "68px",
    borderRadius: "15px",
    backgroundColor:"#172844",
    transition: 'width 1s ease',
    width:"0%",
   }
}

const ProgressItem = ({saveRating, rating, progress,totalRating}) => {
    const {mode} = useApp()
    useEffect(()=>{
        console.log(progress)
    },[progress])
    
  return (
    <div style={( mode ==="light"&& {...styles.rating,backgroundColor:"#b9c3e3",color: "#444444"})||styles.rating} onClick={()=>saveRating(rating.type)}> 
        <div style={mode==="light" ? {...styles.progressBar,width:`${(((progress)/totalRating)*100)}% `, backgroundColor:"#4185f4" }: {...styles.progressBar,width:`${(((progress)/totalRating)*100)}% ` }}></div>
        <p style={{position:"absolute", left:"20px"}}>{rating.emoji} {rating.text}</p>
      </div>
  )
}

export default ProgressItem
