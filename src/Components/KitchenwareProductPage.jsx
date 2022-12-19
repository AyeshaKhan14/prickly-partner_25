import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Pagination } from "./Pagination";
import Style from "./Women.module.css";
import { useLocation, useSearchParams } from "react-router-dom";
import { fetchKitchenData } from "../Redux/KitchenwareReducer/action";
import { KitchenwareProductCartPage } from "./KitchenwareProductCartPage";
import {Loading} from "../Components/Loading"

export const KitchenwareProductPage = () => {
  const KitchenwareData = useSelector(
    (state) => state.KitchenwareReducer.kitchenware
  );
  const loading = useSelector((state) => state.KitchenwareReducer.isLoading);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [searchParams] = useSearchParams();
  const location = useLocation();

  const handlePageChange = (change) => {
    setPage((prev) => prev + change);
  };

  useEffect(() => {
    if (location || KitchenwareData.length === 0) {
      let payload = {
        params: {
          category: searchParams.getAll("category"),
          brand: searchParams.getAll("brand"),
        },
      };
      console.log("payload in product page", payload);
      dispatch(fetchKitchenData({ page }, payload));
    }
  }, [page, location.search]);

  const handleSortBy = (sort, order) => {
    dispatch(fetchKitchenData({ sort, order }));
  };

  if(loading)
{
  return <Loading/>
}
  return (
    <div className={Style.product}>
      <div>
        <img
          src="https://www.jiomart.com/images/category/1710/kitchenware-20220519.jpeg"
          alt="kitchenware-icons"
          width={"100%"}
        />
      </div>
      <div className={Style.sortBy_main_div}>
        <p>
          Showing <b>20</b> of <b>34053</b> items
        </p>
        <div className={Style.sortBy}>
          <p>Sort by:</p>
          <button
            className={Style.sortBy_button}
            onClick={() => handleSortBy("title", "asc")}
          >
            Popularity
          </button>
          <button
            className={Style.sortBy_button}
            onClick={() => handleSortBy("price", "desc")}
          >
            High to Low
          </button>
          <button
            className={Style.sortBy_button}
            onClick={() => handleSortBy("price", "asc")}
          >
            Low to High
          </button>
          <button
            className={Style.sortBy_button}
            onClick={() => handleSortBy("discount", "desc")}
          >
            Discount
          </button>
          <button
            className={Style.sortBy_button}
            onClick={() => handleSortBy("none", "none")}
          >
            All Products
          </button>
        </div>
      </div>
      <div>
        <p
          style={{
            textAlign: "left",
            marginLeft: "2rem",
            color: "#151B3999",
            fontWeight: "bold",
            lineGap: "1px",
          }}
        >
          ALL PRODUCTS
        </p>
        <div className={Style.product_grid}>
          {KitchenwareData.length > 0 &&
            KitchenwareData.map((item) => (
              <KitchenwareProductCartPage key={`${item.id} `} {...item} />
            ))}
        </div>
        <div>
          <Pagination
            totalPages={4}
            handlePageChange={handlePageChange}
            currentPage={page}
          />
        </div>
      </div>
    </div>
  );
};
