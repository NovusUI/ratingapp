import React from 'react'
import { useApp } from '../../../ContextAPI/AppContext'


const styles = {
    div:{width:"100%",display:"flex", justifyContent:"center",padding: "20px", alignItems: "center", },
    btn:{
        height: "50px",
        backgroundColor: "#38393E",
        borderRadius: "15px",
        display:"flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#ffffff",
    }
}
const BottomDiv = ({setShowOtherRating}) => {
  const {mode} = useApp()
  
  return (
    <div style={styles.div}>
      <div style={(mode === "light" && {...styles.btn, width:"55%",backgroundColor:"#b9c3e3",color: "#444444"} )||{...styles.btn, width:"55%"}} className='poppins-15px-500' onClick={setShowOtherRating}> 
        <p style={{marginRight:"5px"}}>Share on</p>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0.210057H7.09819L13.6592 9.3771L21.8261 0L23.7666 0.0350095L14.6267 10.6958L24 23.7899H16.9046L10.712 15.2473L3.14694 24H1.2374L9.77267 13.9985L0 0.210057ZM6.42888 1.56382H2.6801L17.678 22.4012H21.3593L6.42888 1.56382Z" fill="white"/>
        </svg>
      </div>
    </div>
  )
}

export default BottomDiv
