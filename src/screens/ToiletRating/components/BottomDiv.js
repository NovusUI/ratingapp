import React from 'react'
import { useApp } from '../../../ContextAPI/AppContext'
import { useNavigate } from 'react-router-dom'

const styles = {
    div:{width:"100%",display:"flex", justifyContent:"space-between",padding: "20px", alignItems: "center", },
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
const BottomDiv = () => {
  const {mode} = useApp()
  const navigate = useNavigate()
  return (
    <div style={styles.div}>
      <div style={(mode === "light" && {...styles.btn, width:"55%",backgroundColor:"#b9c3e3",color: "#444444"} )||{...styles.btn, width:"55%"}} className='poppins-15px-500'> 
        <p>View other ratings</p>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2803 9.21967C16.5732 9.51256 16.5732 9.98744 16.2803 10.2803L12.2803 14.2803C11.9874 14.5732 11.5126 14.5732 11.2197 14.2803L7.21967 10.2803C6.92678 9.98744 6.92678 9.51256 7.21967 9.21967C7.51256 8.92678 7.98744 8.92678 8.28033 9.21967L11.75 12.6893L15.2197 9.21967C15.5126 8.92678 15.9874 8.92678 16.2803 9.21967Z" fill="white"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2803 13.2197C16.5732 13.5126 16.5732 13.9874 16.2803 14.2803L12.2803 18.2803C11.9874 18.5732 11.5126 18.5732 11.2197 18.2803L7.21967 14.2803C6.92678 13.9874 6.92678 13.5126 7.21967 13.2197C7.51256 12.9268 7.98744 12.9268 8.28033 13.2197L11.75 16.6893L15.2197 13.2197C15.5126 12.9268 15.9874 12.9268 16.2803 13.2197Z" fill="white"/>
        </svg>
      </div>
      <div style={(mode === "light" && {...styles.btn, width:"40%",backgroundColor:"#b9c3e3",color: "#444444"} )||{...styles.btn, width:"40%"}} className='poppins-15px-500' onClick={()=>navigate("/toilet-fact")}>
        <p>Todays fact</p>
     </div>
    </div>
  )
}

export default BottomDiv
