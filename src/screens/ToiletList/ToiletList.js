import React, { useEffect, useState } from 'react'
import TitleDiv from '../../components/TitleDiv'
import MiddleDiv from './components/MiddleDiv'
import BottomDiv from './components/BottomDiv'
import { useApp } from '../../ContextAPI/AppContext'
import NewToilet from '../NewToilet/NewToilet'
import { getLocations } from '../../firebase/controllers/locations'
import { getLocationUtil } from '../../utils'
import {motion, AnimatePresence} from "framer-motion"


const ToiletList = () => {
  const {mode} = useApp()
  const [isOpen, setIsOpen] = useState(false)
  const [coords, setCoords] = useState(null)
  const [locationsData, setLocationsData] = useState(null)

  useEffect(()=>{
    
    getCoordinates()
  },[])

  useEffect(()=>{
    const getLocs =  async()=>{
      try {
       const locations =  await getLocations(coords)
       console.log(locations)
       setLocationsData(locations)
      } catch (error) {
        console.log(error)
      }
    }
    if(coords){
      getLocs()
    }

   

  },[coords])

  const getCoordinates = () => {
console.log("get it");
    getLocationUtil((err,data)=>{
      if(!err && data){
        setCoords(data)
      }else{
        console.log(err)
      }
    })
   
  };

  return (
    <motion.div 
    className={'container'}  
    style={(mode==="light" && {color: "#444444",backgroundColor: "#d0dbff"}) || {}}
    >
      <TitleDiv title="Select a toilet to rate"/>
      <MiddleDiv list={locationsData}/>
     {locationsData && <BottomDiv setIsOpen={setIsOpen}/>}
     <AnimatePresence>
      {isOpen && <NewToilet locationsData={locationsData} isOpen={isOpen} setIsOpen={setIsOpen}/>}
      </AnimatePresence>
    </motion.div>
  )
}

export default ToiletList
