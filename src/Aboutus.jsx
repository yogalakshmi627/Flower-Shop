import React from 'react'
import './aboutus.css'
export default function Aboutus() {
  
  return (
    <>
    <div className='bgabout'>
    <h1 className='head'>About <span className='spam'>Us</span></h1>
<div className='about-container'>
  <div className='about-content'>
  <h2>Why Choose Us?</h2>
  <p>A florist shop is a retail establishment that sells cut flowers<br/>
     and ornamental plants. The floral trade involves activities <br/>
     such as flower care, flower arranging, floral design,<br/>
      merchandising, and often flower delivery. Florist <br/>
      shops are an ever popular industry and one of <br/>
      the most searched guides on our website.</p>
                          
</div>

<div className='about-cards'>
  <div className='card-item'>
  <h3><i class="fa fa-shopping-cart" aria-hidden="true"></i> Free Shipping</h3>
<h4>On All Order Over Rs.49</h4>
</div>

<div className='card-item'>
<h3><i class="fa fa-money" aria-hidden="true"></i> 15 Days Return</h3>
<h4>MoneyBack Guareantee</h4>
</div>
<div className='card-item'>
<h3><i class="fa fa-credit-card" aria-hidden="true"></i> Secure Checkout</h3>
<h4>Protected By Paypal</h4>
</div>
<div className='card-item'>
<h3><i class="fa fa-gift" aria-hidden="true"></i> Offer & GiftHere</h3>
<h4>On All Orders Over</h4>
</div>
</div>
</div>
</div>
    </>
  )
}
