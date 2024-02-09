import React from 'react'
import { useApp } from '../ContextAPI/AppContext'

const styles = {
    title: { height:"25%", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"flex-start",color: "#ffffff"}
}
const TitleDiv = ({title, subtitle}) => {
  const {mode} = useApp()

  
  return (
    <div style={styles.title}>
      <h1 className='poppins-24px-500' style={(mode==="light" && {color: "#444444"})||{}}>{title}</h1>
      {subtitle && <p className='inter-12px-300'  style={(mode==="light" && {color: "#444444"})||{}}>{subtitle}</p>}
    </div>
  )
}

export default TitleDiv
