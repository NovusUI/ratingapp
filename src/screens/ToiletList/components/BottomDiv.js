import React, { useState } from 'react'
import NewToiletInput from './NewToiletInput'
import EstablishmentTypeList from './EstablishmentTypeList'
import { useNavigate } from 'react-router-dom'

const styles = {
    div:{width:"70%",minHeight:"10%",display:"flex", flexDirection:"column", justifyContent:"flex-start", alignItems:"flex-start"},
    p:{
        color:"#828282",
    },
    add:{
        color:"#3C24D1"
    },

}


const BottomDiv = () => {
  const  [isVisible, setIsVisible] = useState(false)
  const [newToilet,setNewToilet] = useState("")

  const navigate = useNavigate()
const onNext = () =>{
  if(newToilet.length > 5){
    navigate("/rate-toilet",{state:{newToilet}})
  }
}

  return (
    <div style={styles.div}>
      <div onClick={()=>setIsVisible(prev=>!prev)}>
      <p style={styles.p} className='inter-12px-300'>Your toilet is not on the list?</p>
      <span style={styles.add} className='inter-12px-300'>Add</span>
      </div>
      {isVisible && <div style={{width:"100%",height: "150px",paddingTop: "10px"}}>
        <NewToiletInput setNewToilet={setNewToilet} newToilet={newToilet} onNext={onNext}/>
        <EstablishmentTypeList onClick={onNext}/>
      </div>}
    </div>
  )
}

export default BottomDiv
