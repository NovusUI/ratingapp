import React, { useState } from 'react'



const styles = {
    div:{width:"70%",height:"10%", minHeight:"80px",display:"flex", flexDirection:"column", justifyContent:"flex-start", alignItems:"flex-start"},
    p:{
        color:"#828282",
    },
    add:{
        color:"#3C24D1"
    },

}


const BottomDiv = ({setIsOpen}) => {



  return (
    <div style={styles.div}>
      <div onClick={()=>setIsOpen(true)}>
      <p style={styles.p} className='inter-12px-300'>Your toilet is not on the list?</p>
      <span style={styles.add} className='inter-12px-300'>Add</span>
      </div>
    
    </div>
  )
}

export default BottomDiv
