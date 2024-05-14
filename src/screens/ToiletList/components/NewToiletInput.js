import React from 'react'
import { useApp } from '../../../ContextAPI/AppContext'


const styles = {
    input: {width:"100%",height:"30px", backgroundColor:"#202124",border:"none", outline:"none",paddingLeft:"10px",color:"#828282", fontSize:"30px"}
}


const NewToiletInput = ({setNewToilet, newToilet, onNext,onChange}) => {
  const {mode} = useApp()
 
  return (
    <div>
        <div style={{display:"flex"}}>
        <input  value={newToilet} onChange={(e)=>onChange(e)} style={ (mode === "light" && {...styles.input, backgroundColor:"#d0dbff"})||styles.input}/>
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={onNext}>
            <path d="M13.4697 8.53033C13.1768 8.23744 13.1768 7.76256 13.4697 7.46967C13.7626 7.17678 14.2374 7.17678 14.5303 7.46967L18.5303 11.4697C18.8232 11.7626 18.8232 12.2374 18.5303 12.5303L14.5303 16.5303C14.2374 16.8232 13.7626 16.8232 13.4697 16.5303C13.1768 16.2374 13.1768 15.7626 13.4697 15.4697L16.1893 12.75H6.5C6.08579 12.75 5.75 12.4142 5.75 12C5.75 11.5858 6.08579 11.25 6.5 11.25H16.1893L13.4697 8.53033Z" fill="#828282"/>
        </svg>
        </div>
        <hr style={{height:"0.02px",color:"#828282"}}/>
    </div>
  )
}

export default NewToiletInput
