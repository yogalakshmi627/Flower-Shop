import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar({card}) {
  return (
   
<div className='container'> 
  <div className='cover'>
<ul className='nav'>
<li ><Link to={"/Homepage"} ><i class="fa fa-home" aria-hidden="true"></i> Home</Link></li>
<li ><Link to={"/Aboutus"} ><i class="fa fa-address-book" aria-hidden="true"></i> Aboutus</Link></li>
<li ><Link to={"/DisplayCards"} ><i class="fa fa-id-card" aria-hidden="true"></i> DisplayCards</Link></li>
<li ><Link to={"/Contact"} ><i class="fa fa-phone" aria-hidden="true"></i> Contact</Link></li>
<li ><Link to={"/ViewCard"} ><i class="fa fa-rss" aria-hidden="true"></i> <span className='cardcount'>{card.length}</span> ViewCard</Link></li>
</ul>
</div>

</div> 
  )
}
