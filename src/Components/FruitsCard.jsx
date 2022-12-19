// ***** this is for the fruits card component
import React from 'react'
import { Link } from 'react-router-dom';
import "../Styles/Groceries.css"
import { useDispatch } from 'react-redux';
import { addCartData} from '../Redux/CartReducer/action';

const FruitsCard = ({ item, productData }) => {
  const dispatch = useDispatch();
  
 const handleAddCartData = (newData) => {
    dispatch(addCartData({ ...newData, count: 1 })).then((res)=>{
      if(res.payload){
        alert("Product added to cart");
      }
      else{
        alert("Item Already exsit")
      }
    })
   
};




  return (
    <div className='single-product'>
      <Link to={`/fruitsproducts/${productData.id}`}>
        <div className='img-box'>
          <img className='product-img' src={item.image1} alt="img" />
        </div>
        <div className='title-box'>
          <h3 className='product-title'>{item.name}</h3>
        </div>
        <div className='mrp-box'>
          M.R.P:<strike className="price">₹ {item.mrp} </strike> <span className='price'>₹ {item.price} </span> 
        </div>
      </Link>
      <div className='btn-box'>
        <button className='btn-cart' onClick={()=>handleAddCartData(item)} > Add to Cart </button>
      </div>
    </div>
  )
}

export default FruitsCard;