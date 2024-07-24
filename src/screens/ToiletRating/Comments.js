import React, { useEffect, useState } from 'react'
import NewToiletInput from '../ToiletList/components/NewToiletInput'
import {motion} from"framer-motion"
import { useApp } from '../../ContextAPI/AppContext'
import { getComments, updateComment } from '../../firebase/controllers/comments'
import { useAuth } from '../../ContextAPI/AuthContext'
import ShareOnTwitter from './ShareOnTwitter'

const Comments = ({setShowComments,locationId,state}) => {

  const [comment, setComment] = useState("")
  const {mode} = useApp()
  const {user} = useAuth()
  const [comments,setComments] = useState([])
  const [isDisabled,setIsDisabled] = useState(false)
  const [showOtherRating, setShowOtherRating] = useState(false)
  const [timer,setTimer]= useState(null)


   useEffect(()=>{
    (async () => {
      try {
        const fetchedComments = await getComments(locationId);
        console.log(fetchedComments);
        setComments(fetchedComments);

      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    })();
   },[])

   



   if(showOtherRating){
     return(
       <ShareOnTwitter toiletName={state?.newToilet || state?.toiletName} setShowOtherRating={setShowOtherRating}/>
     )
  }

  const onNext = async()=>{
    clearTimeout(timer)
    if(isDisabled){
      return
    }
    setIsDisabled(true)
    try {
      
      const commentId = await updateComment(locationId,comment,user.id,user.displayName)
      
      setComments((prev)=>[...prev,{id:commentId,authorId:user.id,text:comment,authorsName:user.displayName}])
      setComment("")
      
      
      const newTimer = setTimeout(() => {
        setShowOtherRating(true)
      }, 1500);
      
      setTimer(newTimer);

    } catch (error) {
      console.log(error)
    }finally{
      setIsDisabled(false)
    }
     
  }
  return (
    <motion.div 
    style={mode==="light" && {display:"flex", flexDirection:"column", padding:"20px 40px", height:"100%",backgroundColor:"#fff", overflow:"hidden"} ||{display:"flex", flexDirection:"column", padding:"20px 40px", height:"100%",overflow:"hidden"}}
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    transition={{duration:0.4}}
    >
      <div style={{padding:"10px 0"}}>
      <div style={{backgroundColor:"#D9D9D9", width:"30px", height:"30px", borderRadius:"10px", display:"flex", alignItems:"center", justifyContent:"center"}} onClick={()=>setShowComments(false)}>
          x
      </div>
      </div>
      
      <div style={mode === "light" && {maxHeight:"80%", padding:"20px", overflow:"scroll", color:"#000"} ||{maxHeight:"80%", padding:"0px 20px", margin:"20px 0", overflow:"scroll", color:"#FFF"}}>
        {
          comments.length > 0 && comments.map(comment=><div style={{padding:"10px 0"}}>
            <p>{comment.authorsName}</p>
            <p>{comment.text}</p>
          </div>)
        }
        {
          comments.length == 0 && <p>No comments</p>
        }
      </div>
      <div style={{padding:"10px 0"}}> 
      <NewToiletInput onChange={(e)=>setComment(e.target.value)} newToilet={comment} onNext={onNext} />
      </div>
    </motion.div>
  )
}

export default Comments
