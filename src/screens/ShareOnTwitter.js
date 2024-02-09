import React from 'react'
import TitleDiv from '../components/TitleDiv'
import { useApp } from '../ContextAPI/AppContext'

const styles = {
  btn:  {backgroundColor:"#393A40", border:"none", width: "200px", height:"50px", borderRadius: "15px", color:"#ffffff", marginTop:"20px"}
}

const ShareOnTwitter = () => {
  const {mode} = useApp()
  return (
    <div className='island' style={(mode === "light" &&{backgroundColor:"#d0dbff"})||{}}>
        
      <TitleDiv title="Share your view" subtitle="# Name of toilet"/>
        
      <button style={( mode ==="light"&& {...styles.btn ,backgroundColor:"#b9c3e3",color: "#444444"})|| styles.btn} className='inter-15px-300'>Share on Twitter</button>
    </div>
  )
}

export default ShareOnTwitter
