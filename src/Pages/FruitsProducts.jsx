import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FruitsCard from "../Components/FruitsCard";
import { Pagination } from "../Components/Pagination";
import { Button } from '@chakra-ui/react'

import { getFruitsProducts } from "../Redux/Fruits/action";
import "../Styles/Groceries.css";
import GroceriesFilter from "../Components/GroceriesFilter";
import { useLocation, useSearchParams } from "react-router-dom";

const FruitsProducts = () => {
  const fruits = useSelector((state) => state.FruitsReducer.fruits);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [searchParams] = useSearchParams();
  const  location = useLocation();
  
  const handlePageChange = (change) => {
    setPage((prev) => prev + change);
  };

  useEffect(() => {
    if(location || fruits.length === 0){
      let getFruitsParams = {
          params: {
              category: searchParams.getAll("category"),
              brand: searchParams.getAll("brand"),
          }
      }
      dispatch(getFruitsProducts({page}, getFruitsParams));
  }
  }, [page, location.search]);

  const handleSortBy = (sort, order) => {
    dispatch(getFruitsProducts({ sort, order }));
  };


  return (
    <div className="groceries-container">
      <div className="top-Section">
        <p> Home </p>
        <p> All Categories </p>
        <p> Fruits </p>
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
              src="https://www.jiomart.com/images/category/7483/cherries-berries-exotic-fruits-20220802.jpeg"
              alt="TitleImage"
            />
          </div>
    {/* Sorting section Start */}
          <div className="right-sorting-container">
            <p> Showing <b>10</b> of <b>20</b> items </p>
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
              {fruits.length > 0 &&
                fruits.map((d) => {
                  return <FruitsCard key={d.id} item={d} productData={d} />;
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

export default FruitsProducts;
