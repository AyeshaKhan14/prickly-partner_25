import { Link, useNavigate } from "react-router-dom";
import Style from "./Women.module.css";


export const KitchenwareProductCartPage = ({
  name,
  price,
  image1,
  detail,
  discount,
  id,
  item
}) => {
  const navigate = useNavigate();
 const handleNavigate = () => {
    navigate(`/kitchenwaresproducts/${id}`);
  };



  return (
    <div >
      <div >
        <div 
        className={Style.Cart_div} onClick={handleNavigate}
          style={{
            backgroundColor: "red",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            display: "flex",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "12px",
            fontWeight: "bold",
            color: "white",
          }}
        >
          {discount} % OFF
        </div>
      <Link to={`/kitchenwaresproducts/${id}`}>
      <img src={image1} alt="icon" width="200px" height="300px" /></Link>
      <h5>
        {name} {detail}
      </h5>
      <h4>₹ {price}</h4>
   </div>
    
    </div>
    
  );
};
