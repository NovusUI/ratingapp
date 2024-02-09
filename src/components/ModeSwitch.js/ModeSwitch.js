import React from 'react'
import { useApp } from '../../ContextAPI/AppContext'
import DarkMode from './DarkMode'
import LightMode from './LightMode'

const ModeSwitch = () => {

    const {mode, setMode} = useApp()

    const switchMode = ()=>{
        if(mode === "light"){
            setMode("dark")
        }else{
            setMode("light")
        }
    }
  return (
    <div onClick={switchMode}>
        {mode === "dark" && <DarkMode/>}
        {mode === "light" && <LightMode/>}
      
    </div>
  )
}

export default ModeSwitch
