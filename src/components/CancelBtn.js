import React from 'react'
import { useApp } from '../ContextAPI/AppContext'


const styles = {
    generalStyle:{width:"30px", height:"30px", borderRadius:"100%", position:"absolute", display:"flex", justifyContent:"center", alignItems:"center", top:"20px"},
    light:{color:"#000000", backgroundColor:"#B9C3E3"},
    dark:{color:"#ffffff", backgroundColor:"#393a3f"},
}

const CancelBtn = ({onClick}) => {

    const {mode} = useApp()
  return (
    <div style={mode==="light" && {...styles.generalStyle,...styles.light }|| {...styles.generalStyle, ...styles.dark}} onClick={onClick}> 
      x
    </div>
  )
}

export default CancelBtn
