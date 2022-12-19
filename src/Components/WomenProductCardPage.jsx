import { useNavigate } from "react-router-dom";
import Style from "./Women.module.css";

export const WomenProductCardPage = ({
  name,
  price,
  image1,
  detail,
  discount,
  id,
}) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/womensproducts/${id}`);
  };

  return (
    <div className={Style.Cart_div} onClick={handleNavigate}>
      <div>
        <div
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
      </div>
      <img src={image1} alt="icon" width="200px" height="300px" />
      <h5>
        {name} {detail}
      </h5>
      <h4>₹ {price}</h4>
    </div>
  );
};
