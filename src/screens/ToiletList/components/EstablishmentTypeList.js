import React from 'react'
import { useApp } from '../../../ContextAPI/AppContext'

const types = ["restaurant", "office space", "filling station", "mall","others"]

const styles = {
    button:{
       marginLeft:"5px",
       backgroundColor: "#172844",
       color: "#ffffff",
       border: "none",
       borderRadius: "20px",
       minWidth:"100px",
       height:"25px",
       fontSize:"15px",
       margin:"10px",
       padding:"0 10px"
    },
    lightMode:{
      backgroundColor:"#3C24D1",
      color:"#ffffff"
    }
}

const EstablishmentTypeList = ({onClick}) => {

  const {mode} = useApp()
  return (
    <div style={{padding:"10px 0", display:"flex",flexWrap:"wrap",}}>
      {types.map(t=> <button style={mode =="light"? {...styles.button, ...styles.lightMode}: {...styles.button}} className='inter-7px-300' onClick={()=>onClick(t,true)}>{t}</button>)}
    </div>
  )
}

export default EstablishmentTypeList
