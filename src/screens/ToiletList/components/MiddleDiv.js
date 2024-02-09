import React from 'react'
import { useApp } from '../../../ContextAPI/AppContext'
import { useNavigate } from 'react-router-dom'

const styles = {
    title: {width:"100%",height:"",display:"flex", flexDirection:"column", justifyContent:"space-beteen", alignItems:"center",flex:"1"},
    listItem:{marginBottom:"40px",color: "#ffffff"}
}

const MiddleDiv = ({list}) => {
  const {mode} = useApp()
  const navigate = useNavigate()

  const onNext = (toiletName) =>{
    
      navigate("/rate-toilet",{state:{toiletName}})
    
  }
  return (
    <div style={styles.title}>
      {list.map(l=><div key={l.id} style={(mode==="light" && {...styles.listItem, color:"#444444"}) ||styles.listItem } onClick={()=>onNext(l.name)}>{l.name}</div>)}
    </div>
    
  )
}

export default MiddleDiv
