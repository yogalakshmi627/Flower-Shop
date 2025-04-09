import React from 'react'
import './homepage.css'
import { Link } from 'react-router-dom'
export default function Homepage() {
  return (
    <>
    <div className='home-container'>
    <div className='home-image'>
      <img src='/girl-Photoroom.png'/>
    </div>
      <div className='home-content'>
      <h1>fresh flowers</h1>
      <h3>natural and beautiful flowers</h3>
      <p>They are responsible for bringing happiness in our lives and making our surrounding environment a prettier place to live in. Thus, we must all plant flowers at homes and in our neighbourhood to beautify the place and bring happiness and joy for everyone passing by.</p>
      <Link to={"/DisplayCards"} className='home-button'><i class="fa fa-heart" aria-hidden="true"> Shop now</i></Link>
    </div>
    </div>
    </>
  )
}
