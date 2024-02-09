import React from 'react'
import ModeSwitch from './ModeSwitch.js/ModeSwitch'
import { useApp } from '../ContextAPI/AppContext'


const styles = {
    nav: {
        backgroundColor: "#1D1E21",
        height:"75px",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "#ffffff",
        borderBottom:"0.5px #ffffff solid",
        padding: "0 30px"
    }
}
const NavBar = () => {
  const {mode} = useApp()
  return (
    <nav style={(mode === "light" && {...styles.nav,backgroundColor: "#e0e6fa",color: "#444444"})||{...styles.nav}}>
      <h1 style={{}}>LOGO</h1>
      <ModeSwitch/>
    </nav>
  )
}

export default NavBar
