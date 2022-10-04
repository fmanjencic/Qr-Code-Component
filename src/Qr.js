import React from 'react'
import './Qr.css';
import Qrimg from './image-qr-code.png'

function Qr() {
  return (
    <div className='container'>
        <img src={Qrimg} title="Qr Code" alt="QR Code"/>
        <h1>Test</h1>
        <p>Improve your front-end skills by building project</p>
        <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
    </div>
  )
}

export default Qr