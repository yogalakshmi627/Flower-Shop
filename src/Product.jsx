import React from "react";

export default function Product({product,card,setCard}) {

    const addcard=()=>{
        setCard([...card,product])
      };
      const removecard=()=>{
        setCard(card.filter((c)=>c.id!==product.id))
      };
  return (
    <div className='product-cards' >
         <img src={product.image} alt='flower' className='card-image'/>
          <h4>{product.name}</h4>
          <h5>Rs {product.price}</h5>
          <p>{product.desription}</p>
          {card.includes(product)?
          (<button className='btnremove' onClick={removecard}>Remove from Card</button>):
          (<button className='btn1' onClick={addcard}>Add To Card</button>)
          }
          </div>
  )
}
/*{card.includes(product)?
    (<button className='btnremove' onClick={removecard} >Remove from Card</button>):
    (<button className='btn1' onClick={addcard}>Add To Card</button>)}*/