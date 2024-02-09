import React from 'react'
import { useApp } from '../../../ContextAPI/AppContext'

const ratings = [{text:"AWESOME",emoji:"😊"}, {text:"OK",emoji:"🙂"}, {text:"HMMM", emoji:"😑"}, {text:"NO", emoji:"🤢"}, {text:"EWWW", emoji:"🤮"}]

const styles = {
    rating: {
        width:"230px",
        height: "70px",
        marginBottom: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor:"#38393e",
        borderRadius: "15px",
        position:"relative",
        color: "#ffffff",
        border: "1px solid #AEB5C9",
    },

    emoji:{
        position:"absolute",
        left: "40px"
    }
   
}
const Ratings = () => {
  const {mode} = useApp()
  return (
    <div style={{flex:"1"}}>
      {ratings.map(rating=><div style={( mode ==="light"&& {...styles.rating,backgroundColor:"#b9c3e3",color: "#444444"})||styles.rating}> <span style={styles.emoji}>{rating.emoji}</span> {rating.text}</div>)}
    </div>
  )
}

export default Ratings
