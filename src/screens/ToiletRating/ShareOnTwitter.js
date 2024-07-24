import React from 'react'
import TitleDiv from '../../components/TitleDiv'
import { useApp } from '../../ContextAPI/AppContext'
import CancelBtn from '../../components/CancelBtn'

const styles = {
  btn:  {backgroundColor:"#393A40", border:"none", width: "200px", height:"50px", borderRadius: "15px", color:"#ffffff", marginTop:"20px",display:"flex", justifyContent:"center",alignItems:"center"}
}

const ShareOnTwitter = ({toiletName,setShowOtherRating}) => {
  const {mode} = useApp()

  const shareOnTwitter = () => {
    const message = encodeURIComponent('YourMessageHere');
    const hashtags = encodeURIComponent('YourHashtag1,YourHashtag2');
    const url = `https://twitter.com/intent/tweet?text=${message}&hashtags=${hashtags}`;
    window.open(url, '_blank');
  };

  return (
    <div className='island' style={(mode === "light" &&{backgroundColor:"#ffff", position:"relative"})||{position:"relative"}} onClick={()=>setShowOtherRating(false)}>
  
      <TitleDiv title="Share your view" subtitle={"#" + toiletName}/>
        
      <div style={( mode ==="light"&& {...styles.btn ,backgroundColor:"#d1d4da",color: "#444444", display:"flex", justifyContent:"center",alignItems:"center"})|| styles.btn} className='inter-15px-300' onClick={(e)=>{e.stopPropagation(); shareOnTwitter()}}>
        <p>Share on </p>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0.210057H7.09819L13.6592 9.3771L21.8261 0L23.7666 0.0350095L14.6267 10.6958L24 23.7899H16.9046L10.712 15.2473L3.14694 24H1.2374L9.77267 13.9985L0 0.210057ZM6.42888 1.56382H2.6801L17.678 22.4012H21.3593L6.42888 1.56382Z" fill="white"/>
        </svg>
      </div>
    </div>
  )
}

export default ShareOnTwitter
