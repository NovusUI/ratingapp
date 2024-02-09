import React from 'react'
import { useApp } from '../ContextAPI/AppContext'

const styles = {

  p: {width: "80%", marginTop: "30px",color: "#ffffff"}
}
const Facts = () => {
  const {mode} = useApp()
  return (
    <div className='island' style={(mode === "light" &&{backgroundColor:"#d0dbff"})||{}}>
      <h1 style={(mode==="light" && {color:"#444444"}) || {color:"#ffffff"} } className='poppins-24px-500'>Toilet facts 🌚</h1>
      <p style={(mode==="light" && {...styles.p,color:"#444444"}) || styles.p} className='inter-15px-300'>Over 40,000 of our neighbours in the US 
manage to hurt themselves in the bathroom
every year. Who knew the toilet was so
treacherous?! King George II even died falling
off one in 1760!!!  😶‍🌫️</p>
    </div>
  )
}

export default Facts
