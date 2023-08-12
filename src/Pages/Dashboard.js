import React from 'react'
import { PiPencilSimpleBold } from "react-icons/pi";

function Dashboard() {
  return (
    <>
      <div className="section_title">
        <div className="text_area">
        <h1>Welcome back, Daniel</h1>
        <p>Track, manage and forecast your customers and orders.</p>
        </div>
        <div className="btn_area">
        <button className='btn_b'><PiPencilSimpleBold className="icons"/>Edit Widgets</button>
        </div>
      </div>
    </>
  )
}

export default Dashboard
