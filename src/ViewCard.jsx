import React, {useState,useEffect } from 'react'
import './Viewcard.css'
export default function ViewCard({card,setCard}) {
  const[total,setTotal]=useState(0);
  useEffect(()=>{
    setTotal(card.reduce((acc,curr)=>acc+parseInt(curr.price),0))
  },[card])

  const deletecard=(id)=>{
    const updatecard=card.filter(product=>product.id!==id);
    setCard(updatecard);
  };
  
  return (
    <>
    
    <div className='viewcard-container'>
    <h1 className='cardheading'>Card Products</h1>
         {
          card.map((product)=>(
            <div className='viewcard-product' key={product.id}>
            <div className='imagetag'>
              <img src={product.image} alt='image'/>
            </div>
            <div className='viewcard-product-detail'>
              <h3>Flower: {product.name}</h3>
              <p>Rs. {product.price}</p>
              <button className='btn2' onClick={()=>deletecard(product.id)}>Remove From Card</button>
            </div>
                  </div>
          ))
         }
         <h1 className='cardamt'>total amount rs:{total}</h1>
    </div>
    
    </>
  )
}
