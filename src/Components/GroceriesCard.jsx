// ***** this is for the groceries card component
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { addCartData, deleteCartData, updateCartData } from '../Redux/CartReducer/action';
import "../Styles/Groceries.css"

const GroceriesCard = ({item}) => {

  const dispatch = useDispatch();
  //const [count, setCount] = useState(item.count);
  const location = useLocation();
  const navigate=useNavigate();



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

// const handleDecrease = (groceries) => {
//   console.log("count:", count, typeof count, groceries);
//   if (count !== 1) {
//     setCount(() => count - 1);
//     console.log("groceries", groceries);
//     const payload = { count: groceries.count - 1 };
//     dispatch(updateCartData(groceries.id, payload));
//   }
//   dispatch(deleteCartData(groceries));
// };

// const handleIncrease = (groceries) => {
//   setCount(() => count + 1);
//   console.log("groceries", groceries);
//   const payload = {
//     count: groceries.count + 1,
//   };
//   dispatch(updateCartData(groceries.id, payload));
// };

  return (
    <div className='single-product'>
      
        <div className='img-box'>
        <Link to={`/groceriesproducts/${item.id}`}>
          <img className='product-img' src={item.image1} alt="img" /></Link>
        </div>
        
        <div className='title-box'>
          <h3 className='product-title'>{item.name}</h3>
        </div>
        <div className='mrp-box'>
          M.R.P:<strike className="price">
          ₹ {item.mrp} </strike> <span className='price'> ₹ {item.price} </span> 
        </div>
    
      <div className='btn-box'>
     
        <button className='btn-cart' onClick={()=>handleAddCartData(item)}> Add to Cart </button>
        {/* <button onClick={()=>handleIncrease(item)}>+</button>
        <button onClick={()=>handleDecrease(item)}>-</button> */}
       
      </div>
      
    </div>
   
  
  );
}

export default GroceriesCard;