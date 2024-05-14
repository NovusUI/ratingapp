import React from 'react'
import { useApp } from '../ContextAPI/AppContext'
import {motion} from "framer-motion"

const styles = {
    title: { height:"20%", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"flex-start",color: "#ffffff"}
}
const TitleDiv = ({title, subtitle}) => {
  const {mode} = useApp()

  
  return (
    <div style={styles.title}>
      <motion.h1  className='poppins-24px-500' initial={{ fontSize: "10px" }} animate={{ fontSize: "24px" }} style={(mode==="light" && {color: "#444444"})||{}}>{title}</motion.h1>
      {subtitle && <p className='inter-12px-300'  style={(mode==="light" && {color: "#444444"})||{}}>{subtitle}</p>}
    </div>
  )
}

export default TitleDiv
