import React from 'react'

const types = ["restaurant", "office space", "filling station", "mall","others"]

const styles = {
    button:{
       marginLeft:"5px",
       backgroundColor: "#172844",
       color: "#ffffff",
       border: "none",
       borderRadius: "20px",
       minWidth: '50px'

    }
}

const EstablishmentTypeList = ({onClick}) => {
  return (
    <div style={{padding:"10px 0"}}>
      {types.map(t=> <button style={styles.button} className='inter-7px-300' onClick={onClick}>{t}</button>)}
    </div>
  )
}

export default EstablishmentTypeList
