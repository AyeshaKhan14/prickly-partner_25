import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import GroceriesCard from "../Components/GroceriesCard";
import { Pagination } from "../Components/Pagination";
import { Button } from '@chakra-ui/react'
import { getGroceriesProducts } from "../Redux/Groceries/action";
import "../Styles/Groceries.css";
import GroceriesFilter from "../Components/GroceriesFilter";
import { useLocation, useSearchParams } from "react-router-dom";
import { Loading } from "../Components/Loading";


const GroceriesProducts = () => {
  const groceries = useSelector((state) => state.GroceriesReducer.groceries);

  const loading=useSelector((state)=>state.GroceriesReducer.isLoading)

  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [searchParams] = useSearchParams();
  const  location = useLocation();
  
  const handlePageChange = (change) => {
    setPage((prev) => prev + change);
  };

  useEffect(() => {
    if(location || groceries.length === 0){
      let getGroceriesParams = {
          params: {
              category: searchParams.getAll("category"),
              brand: searchParams.getAll("brand"),
          }
      }
      dispatch(getGroceriesProducts({page}, getGroceriesParams));
  }
  }, [page, location.search]);

  const handleSortBy = (sort, order) => {
    dispatch(getGroceriesProducts({ sort, order }));
  };
   
  if(loading)
  {
    return <Loading/>
  }

  return (
    <div className="groceries-container">
      <div className="top-Section">
        <p> Home </p>
        <p> All Categories </p>
        <p> Groceries </p>
      </div>
      <div className="groceries-body">
        <div className="left">{/* here write code for filtering */}
          <div className='filters-container'>
            <div className='filters-heading'>
               <p>Filters</p>
            </div>
            <div className="categories-cntr">
               <p>Categories</p>
               <GroceriesFilter />
            </div>
          </div>
        </div>
  {/* right section Start */}
        <div className="right">
          <div className="top-section-imgcontainer">
            <img
              className="title-img"
              src="https://www.jiomart.com/images/category/2/groceries-20210201.jpeg"
              alt="TitleImage"
            />
          </div>
    {/* Sorting section Start */}
          <div className="right-sorting-container">
            <p> Showing <b>20</b> of <b>64</b> items </p>
            <div className="sort-box">
                <p>Sort by:</p>
                <Button colorScheme='teal' variant='outline' onClick={() => handleSortBy("title", "asc")} > Popularity </Button>
                <Button colorScheme='teal' variant='outline' onClick={() => handleSortBy("price", "desc")} > High to Low </Button>
                <Button colorScheme='teal' variant='outline' onClick={() => handleSortBy("price", "asc")} >  Low to High </Button>
                <Button colorScheme='teal' variant='outline' onClick={() => handleSortBy("discount", "desc")} >  Discount </Button>
                <Button colorScheme='teal' variant='outline'  onClick={() => handleSortBy("none", "none")} >  All Products </Button>
            </div>
          </div>
    {/* Sorting section End */}

    {/* middle section Start */}
          <div className="middle-section-parent">
            <div className="middle-section-heading">
              <h3 className="heading">ALL PRODUCTS</h3>
            </div>
            <div className="middle-section">
              {groceries.length > 0 &&
                groceries.map((d) => {
                  return <GroceriesCard key={d.id} item={d} productData={d} />;
                })}
            </div>
          {/* ******* pagination start ************ */}
            <div className="pagination-container"> 
              <Pagination 
              totalPages={2}
              handlePageChange={handlePageChange}
              currentPage={page}
              />
            </div>
          {/* ******* pagination End ************ */}
          </div>
    {/* middle section End */}
        </div>
  {/* Right section End */}
      </div>
    </div>
  );
};

export default GroceriesProducts;
