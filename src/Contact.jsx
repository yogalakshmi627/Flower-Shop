import React, { useState } from 'react'
import './contact.css'
export default function Contact() {

  const[formData,setFormData]=useState({
    name:"",
    email:"",
    phone:"",
    description:"",
  });

  const handlechange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  const handlesubmit=(e)=>{
    e.preventDefault();
    alert("form Submitted Successfully!")

  }
  return (
    <>
    <div className='contact-container'>
      <div className='contact-detail'  onSubmit={handlesubmit}>
    <form>   
<label>Name</label>
<input type='text' name='name' value={formData.name} onChange={handlechange} required/>
<label>Email</label>
<input type='email'  name='email' value={formData.email} onChange={handlechange} required/>
<label>Phone</label>
<input type='number'  name='phone' value={formData.phone} onChange={handlechange} required/>
<label>Description</label>
<input type='text' className='textarea' name='description' value={formData.description} onChange={handlechange} required/>
<button className='contact-button' type='submit'>Submit</button>
</form>
      </div>
     <div className='contact-image'>
<img src='/contact-Photoroom.png' alt='contact'/>
     </div>
    </div>
    </>
  )
}
