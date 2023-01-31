import React from 'react'
import "./TableBooking.scss"

const TableBooking = ({formData,setFormData}) => {
  return (
    <div className="TableBooking">
      <div className="Numberofpeople">
          <h2>Number of People</h2>
          <div className="inputItem">
            <input
              type="radio"
              id="1"
              value="2"
              name="people" 
              
            />
            <label htmlFor="1">2</label>
          </div>
          <div className="inputItem">
            <input
              type="radio"
              id="2"
              value="4"
              name="people"
              
            />
            <label htmlFor="2">4</label>
          </div>
          <div className="inputItem">
            <input
              type="radio"
              id="3"
              value="6+"
              name="people"
              
            />
            <label htmlFor="3">6+</label>
          </div>
      </div>
      <div className="location">
        <h2>Location</h2>
        <div className="inputItem">
        <select value={formData.location} onChange={(e)=> setFormData({...formData, location: e.target.value})}>
            <option value="Select Location" disabled>Select Location</option>
            <option value="1533">1533</option>
            <option value="153dsd">153dsd</option>
            <option value="15233">15233</option>
          </select>
        </div>
      </div>
      <div className="Time">
        <h2>Date</h2>
        <div className="inputItem" >
          <input type="date" value={formData.date} onChange={(e)=> setFormData({...formData, date: e.target.value})}/>
        </div>
      </div>
      <div className="Time">
        <h2>Time</h2>
        <div className="inputItem">
          <input type="time" value={formData.time} onChange={(e)=> setFormData({...formData, time: e.target.value})} />
        </div>
      </div>
    </div>
  )
}

export default TableBooking