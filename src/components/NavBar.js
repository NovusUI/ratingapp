import React, { useEffect, useState } from 'react'
import ModeSwitch from './ModeSwitch.js/ModeSwitch'
import { useApp } from '../ContextAPI/AppContext'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../ContextAPI/AuthContext'
import TypingEffect from './TypingEffect'


const styles = {
    nav: {
        backgroundColor: "#1D1E21",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "#ffffff",
    
        padding: "30px"
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
    <nav style={(mode === "light" && {...styles.nav,backgroundColor: "#FFFFFF",color: "#444444"})||{...styles.nav}}>

       {displayName &&<TypingEffect text={`Hii, ${displayName}`} speed={100} onClick={()=>navigate("/")}/>}
      <ModeSwitch/>
    </nav>
  )
}

export default NavBar
