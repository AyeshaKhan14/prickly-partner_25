import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWomenData } from "../Redux/WomenReducer/action";
import { Pagination } from "./Pagination";
import Style from "./Women.module.css";
import { WomenProductCardPage } from "./WomenProductCardPage";
import { useLocation, useSearchParams } from "react-router-dom";

export const WomenProductPage = () => {
  const womenData = useSelector((state) => state.WomenReducer.women);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [searchParams] = useSearchParams();
  const location = useLocation();

  const handlePageChange = (change) => {
    setPage((prev) => prev + change);
  };

  useEffect(() => {
    if (location || womenData.length === 0) {
      let payload = {
        params: {
          category: searchParams.getAll("category"),
          brand: searchParams.getAll("brand"),
        },
      };
      dispatch(fetchWomenData({ page }, payload));
    }
  }, [page, location.search]);

  const handleSortBy = (sort, order) => {
    dispatch(fetchWomenData({ sort, order }));
  };

  return (
    <div className={Style.product}>
      <div>
        <img
          src="https://www.jiomart.com/images/category/493/women-20200831.jpg"
          alt="women-icons"
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
          {womenData.length > 0 &&
            womenData.map((item) => (
              <WomenProductCardPage key={`${item.id} `} {...item} />
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
