import React, { useState } from 'react'

import {data} from './flowers.js'
import './cards.css'
import Product from './Product.jsx';
export default function Cards({card,setCard}) {

  const[products]=useState(data);

 
  return (
    <>
    
    <div className='container-card'>
      <h1 className='topic'>Available Flowers</h1>
    <div className='cardsflower'>
      {products.map((product)=>{
        return <Product key={product.id} product={product} card={card} setCard={setCard}/>
      })}
    </div>
    </div>
    </>
  )
}


