import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MobileCard from "../Components/MobileCard";
import { Pagination } from "../Components/Pagination";
import { Button } from '@chakra-ui/react'
import {Loading} from "../Components/Loading"
import { getMobilesProducts } from "../Redux/Mobile/action";
import "../Styles/Groceries.css";
import MobileFilter from "../Components/MobileFilter";
import { useLocation, useSearchParams } from "react-router-dom";

const MobileProducts = () => {
  const mobiletablets = useSelector((state) => state.MobileReducer.mobiletablets);
  const loading = useSelector((state) => state.MobileReducer.isLoading);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [searchParams] = useSearchParams();
  const  location = useLocation();
  
  const handlePageChange = (change) => {
    setPage((prev) => prev + change);
  };

  useEffect(() => {
    if(location || mobiletablets.length === 0){
      let getGroceriesParams = {
          params: {
              category: searchParams.getAll("category"),
              brand: searchParams.getAll("brand"),
          }
      }
      dispatch(getMobilesProducts({page}, getGroceriesParams));
  }
  }, [page, location.search]);

  const handleSortBy = (sort, order) => {
    dispatch(getMobilesProducts({ sort, order }));
  };

  if(loading)
{
  return <Loading/>
}


  return (
    <div className="groceries-container">
      <div className="top-Section" style={{marginTop:"110px"}}>
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
               <MobileFilter />
            </div>
          </div>
        </div>
  {/* right section Start */}
        <div className="right">
          <div className="top-section-imgcontainer">
            <img
              className="title-img"
              style={{width:"auto",position:"relative"}}
              src="https://www.jiomart.com/assets/global/verticals/fashion_default_banner.svg"
              alt="TitleImage"
            />
            <div style={{position:"absolute", marginTop:"-150px", fontSize:"40px" }}><h1>Mobiles & Tablets</h1></div>
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
              {mobiletablets.length > 0 &&
                mobiletablets.map((d) => {
                  return <MobileCard key={d.id} item={d} productData={d} />;
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

export default MobileProducts;
