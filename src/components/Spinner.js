import React from 'react'
import  {ClipLoader} from "react-spinners"

const Spinner = ({msg}) => {

  
  return (
    <div className='island'>
       <ClipLoader size={150} color={'#ffffff'}/>

    </div>
  )
}

export default Spinner
