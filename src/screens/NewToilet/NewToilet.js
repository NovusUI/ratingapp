import React, { useEffect, useState } from 'react'
import NewToiletInput from '../ToiletList/components/NewToiletInput'
import EstablishmentTypeList from '../ToiletList/components/EstablishmentTypeList'
import { useNavigate } from 'react-router-dom'
import "./styles.css"
import MiddleDiv from '../ToiletList/components/MiddleDiv'
import { useApp } from '../../ContextAPI/AppContext'
import { motion, } from "framer-motion";
import CancelBtn from '../../components/CancelBtn'

const NewToilet = ({isOpen,locationsData,setIsOpen}) => {

    const [newToilet,setNewToilet] = useState("")
    const [searchList,setSearchList] = useState([])
    const [showTypes, setShowTypes] = useState(false)
    const {mode} = useApp()
    const navigate = useNavigate()

    useEffect(()=>{
        console.log(locationsData)

        setSearchList(locationsData)
    },[locationsData])


const onNext = (type,isNew) =>{
    console.log(type, isNew)
  if(newToilet.length > 5){
    navigate("/rate-toilet",{state:{newToilet,type,isNew}})
    localStorage.clear()
  }
}



const onChange = (e)=>{
    
    setNewToilet(e.target.value)
    console.log(searchList)
    if(locationsData.length === 0){
        return
    }

    if(e.target.value.length ===0){
        setSearchList(locationsData)
        setShowTypes(false)
    }else{
        const searchResult = locationsData.filter(data=> data.name.toLowerCase().includes(e.target.value.trim().toLowerCase()))
        setSearchList(searchResult)
    }   
}
  return (
    <motion.div 
    className={`overlay`}  
    style={(mode==="light" && {color: "#444444",backgroundColor: "#ffffff"}) || {}}
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    transition={{duration:0.4}}
    > 
     <CancelBtn onClick={()=>setIsOpen(false)}/>
      <NewToiletInput onChange={onChange} newToilet={newToilet} onNext={()=>setShowTypes(true)}/>
      {((searchList?.length == 0 || showTypes )&& newToilet.length > 0)  &&<EstablishmentTypeList onClick={onNext}/>}
      <div style={{width:"100%", marginTop:"60px", height:"60%", overflow:"scroll"}}>
      {searchList?.length > 0  && !showTypes && <MiddleDiv list={searchList}/>}
      </div>
    </motion.div>
  )
}

export default NewToilet
