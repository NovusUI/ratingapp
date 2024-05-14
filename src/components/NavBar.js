import React, { useEffect, useState } from 'react'
import ModeSwitch from './ModeSwitch.js/ModeSwitch'
import { useApp } from '../ContextAPI/AppContext'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../ContextAPI/AuthContext'
import TypingEffect from './TypingEffect'


const styles = {
    nav: {
        backgroundColor: "#1D1E21",
        height:"75px",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "#ffffff",
        borderBottom:"0.5px #ffffff solid",
        padding: "0 30px"
    }
}
const NavBar = () => {
  const {mode} = useApp()
  const navigate = useNavigate()
  const {user} = useAuth()
  const [displayName, setDisplayName] = useState("")

  useEffect(()=>{
     
    if(user){
      let displayName = user?.displayName || user?.fullName
  
  displayName = displayName.split(" ")
  
  setDisplayName(displayName[0])
    }
  

  },[user])

  
  return (
    <nav style={(mode === "light" && {...styles.nav,backgroundColor: "#e0e6fa",color: "#444444"})||{...styles.nav}}>

       {displayName &&<TypingEffect text={`Hii, ${displayName}`} speed={100} onClick={()=>navigate("/")}/>}
      <ModeSwitch/>
    </nav>
  )
}

export default NavBar
