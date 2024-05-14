import React from 'react'
import ProgressItem from './ProgressItem'

const ratings = [{text:"AWESOME",emoji:"😊",type:"excellent"}, {text:"OK",emoji:"🙂",type:"good"}, {text:"HMMM", emoji:"😑", type:"ok"}, {text:"NO", emoji:"🤢", type:"bad"}, {text:"EWWW", emoji:"🤮", type:"terrible"}]


const Ratings = ({saveRating, progress, totalRating}) => {

  

  return (
    <div style={{flex:"1"}}>
      {ratings.map(rating=><ProgressItem rating={rating} saveRating={saveRating} progress={progress[rating.type]} totalRating={totalRating} />)}   
    </div>
  )
}

export default Ratings
