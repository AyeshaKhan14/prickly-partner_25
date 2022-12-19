// ***** this is for the groceries card component
import { position } from '@chakra-ui/react';
import React from 'react'
import { Link } from 'react-router-dom';
import "../Styles/Groceries.css"

const MobileCard = ({ item ,productData }) => {

  return (
    <div className='single-product' style={{paddingBottom:"100px"}}>
      <Link to={`/mobileProducts/${productData.id}`}>
      <div className='img-box'>
        <div> 
          <img style={{height:"37px", 
           width:"37px", 
           display:"flex",
           marginLeft:"-30px", 
           marginTop:"5px", 
           position:"absolute" 
        }} src={item.discountimgLink} alt="img" />

       <p style={{height:"35px", 
       width:"35px", 
       position:"absolute",
       fontSize:"11px",
       color:"white",
       marginLeft:"-30px",
       marginTop:"7px",
       fontWeight:"600" 
  
  }}>{item.discount}% OFF</p> </div>
  
      <div> 
         <img className='product-img' style={{height:"120px", width:"120px" }} src={item.image1} alt="img" />
      </div>
       
      </div>
    
      <div className='title-box' style={{marginTop:"10px" }} >
        <h3 className='product-title'>{item.name}</h3>
      </div>
      <div className='mrp-box' style={{display:"flex", justifyContent:"center", marginTop:"20px" }}>
       
        
         
        <div> <span className='price'>₹ {item.price} </span> </div>
        <div><strike className="price">₹ {item.mrp} </strike></div> 
      </div>
      </Link> 
    </div>
  )
}

export default MobileCard;