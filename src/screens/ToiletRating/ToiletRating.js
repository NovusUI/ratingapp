import React from 'react'
import TitleDiv from '../../components/TitleDiv'
import Ratings from './components/Ratings'
import BottomDiv from './components/BottomDiv'
import { useApp } from '../../ContextAPI/AppContext'
import { useLocation } from 'react-router-dom'

const ToiletRating = () => {
  const {mode} = useApp()
  const location = useLocation()
  const state = location.state
  return (
    <div className='container' style={(mode === "light" &&{backgroundColor:"#d0dbff"})||{}}>
      <TitleDiv title="Rate this toilet" subtitle={`#${state.newToilet || state.toiletName}`}/>
      <Ratings/>
      <BottomDiv/>
    </div>
  )
}

export default ToiletRating
