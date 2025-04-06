import React from 'react'
import './homepage.css'
import { Link } from 'react-router-dom'
export default function Homepage() {
  return (
    <>
    <div className='home-container'>
    <div className='home-image'>
      <img src='../src/girl-Photoroom.png'/>
    </div>
      <div className='home-content'>
      <h1>fresh flowers</h1>
      <h3>natural and beautiful flowers</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptatum a deleniti adipisci sequi dolores doloremque iusto neque labore excepturi cumque fugiat, ipsa voluptas voluptatem sed aliquid molestiae quisquam molestias!</p>
      <Link to={"/DisplayCards"} className='home-button'><i class="fa fa-heart" aria-hidden="true"> Shop now</i></Link>
    </div>
    </div>
    </>
  )
}
