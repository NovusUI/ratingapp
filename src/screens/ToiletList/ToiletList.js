import React from 'react'
import TitleDiv from '../../components/TitleDiv'
import MiddleDiv from './components/MiddleDiv'
import BottomDiv from './components/BottomDiv'
import { useApp } from '../../ContextAPI/AppContext'


const list = [{name:"Ikeja city mall",id:"12345"},{name:"KFC magodo",id:"23456"}]
const ToiletList = () => {
  const {mode} = useApp()
  return (
    <div className={'container'}  style={(mode==="light" && {color: "#444444",backgroundColor: "#d0dbff"}) || {}}>
      <TitleDiv title="Select a toilet to rate"/>
      <MiddleDiv list={list}/>
      <BottomDiv/>
    </div>
  )
}

export default ToiletList
