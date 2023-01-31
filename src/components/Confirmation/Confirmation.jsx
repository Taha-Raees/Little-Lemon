import React from 'react'
import "./Confirmation.scss"
import { Link } from "react-router-dom";

const Confirmation = () => {
  return (
    <div className="Confirmation">
      <h2>Thank You for choosing Little Lemon. Your table has been booked. For any changes please contact Restaurant. Confirmation email has been sent to your email address. </h2>
      <div className="item">
            <Link className ="link" to="/"><span>Back To Home</span></Link>
          </div>
    </div>
  )
}

export default Confirmation