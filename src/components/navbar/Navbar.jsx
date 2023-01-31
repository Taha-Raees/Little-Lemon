import React from 'react'
import "./Navbar.scss"
import { Link } from "react-router-dom";
import PhoneIcon from "@mui/icons-material/Phone";


const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
        <Link className ="link" to="/"><img src="/images/c2.png" alt='' /></Link>
        </div>
        <div className="right">
        <div className="item">
            <Link className ="link" to="/menu">Menu</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/">Drinks</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/reservation">Reservation</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/reservation">Contact</Link>
          </div>
          <div className="item"><PhoneIcon/> <Link className ="link" to="/reservation"> Call</Link>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar