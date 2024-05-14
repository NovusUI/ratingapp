import React from 'react'
import { useApp } from '../../../ContextAPI/AppContext'
import { useNavigate } from 'react-router-dom'

const styles = {
    title: {width:"100%",display:"flex", flexDirection:"column", alignItems:"center", overflow:"scroll", flex:1},
    listItem:{marginBottom:"40px",color: "#ffffff"}
}

const MiddleDiv = ({list}) => {
  const {mode} = useApp()
  const navigate = useNavigate()

  const onNext = (toiletName,id) =>{
    
      navigate("/rate-toilet",{state:{toiletName}})
      localStorage.setItem("locationId",id)
  }
  return (
    <div style={styles.title}>
      {list?.map(l=><div key={l.id} style={(mode==="light" && {...styles.listItem, color:"#444444"}) ||styles.listItem } onClick={()=>onNext(l.name, l.id)}>{l.name}</div>)}
    </div>
    
  )
}

export default MiddleDiv
