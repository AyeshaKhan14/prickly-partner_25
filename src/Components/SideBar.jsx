import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import "../Styles/SideBar.css";

export const SideBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategoryFilter = searchParams.getAll("category");
  const [category, setCategory] = useState(initialCategoryFilter || []);
  const initialBrandFilter = searchParams.getAll("brand");
  const [brand, setBrand] = useState(initialBrandFilter || []);

  const handleFilterCheckbox = (e) => {
    const newCategory = [...category];
    if (newCategory.includes(e.target.value)) {
      newCategory.splice(newCategory.indexOf(e.target.value), 1);
      setCategory(newCategory);
    } else {
      newCategory.push(e.target.value);
      setCategory(newCategory);
    }
  };

  const handleBrandFilter = (e) => {
    const newCategory = [...brand];
    if (newCategory.includes(e.target.value)) {
      newCategory.splice(newCategory.indexOf(e.target.value), 1);
      setBrand(newCategory);
    } else {
      newCategory.push(e.target.value);
      setBrand(newCategory);
    }
  };

  console.log("category", category, "brand", brand);

  useEffect(() => {
    if (category || brand) {
      let params = {};
      category && (params.category = category);
      brand && (params.brand = brand);
      setSearchParams(params);
    }
  }, [category, brand, setSearchParams]);

  return (
    <div className="main-div">
      <h1 className="filter-heading">Filter</h1>
      <hr style={{ margin: "1rem 0rem" }} />
      <p style={{ marginBottom: "0.5rem" }}>Category</p>
      <div className="categories-parent">
        <div className="filter-option">
          <input
            className="checkbox"
            checked={category.includes("Kurtas")}
            value="Kurtas"
            type="checkbox"
            onChange={handleFilterCheckbox}
          />
          <label> Kurtas </label>
        </div>
        <div className="filter-option">
          <input
            checked={category.includes("Kurtis_and_Tunics")}
            value="Kurtis_and_Tunics"
            type="checkbox"
            onChange={handleFilterCheckbox}
          />
          <label> Kurtis & Tunics </label>
        </div>
        <div className="filter-option">
          <input
            checked={category.includes("Kurta_Suit_Sets")}
            value="Kurta_Suit_Sets"
            type="checkbox"
            onChange={handleFilterCheckbox}
          />
          <label> Kurta Suit Sets </label>
        </div>
        <div className="filter-option">
          <input
            checked={category.includes("Tops")}
            value="Tops"
            type="checkbox"
            onChange={handleFilterCheckbox}
          />
          <label> Tops </label>
        </div>
        <div className="filter-option">
          <input
            checked={category.includes("Jeans & Jeggins")}
            value="Jeans_and_Jeggins"
            type="checkbox"
            onChange={handleFilterCheckbox}
          />
          <label> Jeans & Jeggins </label>
        </div>
        <div className="filter-option">
          <input
            checked={category.includes("Bellies")}
            value="Bellies"
            type="checkbox"
            onChange={handleFilterCheckbox}
          />
          <label> Bellies </label>
        </div>
        <div className="filter-option">
          <input
            checked={category.includes("Flat_Sandals")}
            value="Flat_Sandals"
            type="checkbox"
            onChange={handleFilterCheckbox}
          />
          <label> Flat Sandals </label>
        </div>
        <div className="filter-option">
          <input
            checked={category.includes("Thermal_wear")}
            value="Thermal_wear"
            type="checkbox"
            onChange={handleFilterCheckbox}
          />
          <label> Thermal Wear </label>
        </div>
        <div className="filter-option">
          <input
            checked={category.includes("Dresses")}
            value="Dresses"
            type="checkbox"
            onChange={handleFilterCheckbox}
          />
          <label> Dresses </label>
        </div>
        <div className="filter-option">
          <input
            checked={category.includes("Casual_Dresses")}
            value="Casual_Dresses"
            type="checkbox"
            onChange={handleFilterCheckbox}
          />
          <label> Casual Dresses </label>
        </div>
      </div>
      <div className="filter-Brand">
        <p>Brand</p>
        <div className="brand-box">
          <div className="filter-option">
            <input
              className="checkbox"
              checked={brand.includes("EthanicBasket")}
              value="EthanicBasket"
              type="checkbox"
              onChange={handleBrandFilter}
            />
            <label> EthanicBasket </label>
          </div>
          <div className="filter-option">
            <input
              className="checkbox"
              checked={brand.includes("Mayra")}
              value="Mayra"
              type="checkbox"
              onChange={handleBrandFilter}
            />
            <label> Mayra </label>
          </div>
          <div className="filter-option">
            <input
              className="checkbox"
              checked={brand.includes("Textile_Feb")}
              value="Textile_Feb"
              type="checkbox"
              onChange={handleBrandFilter}
            />
            <label> Textile Feb </label>
          </div>
          <div className="filter-option">
            <input
              className="checkbox"
              checked={brand.includes("Timyka")}
              value="Timyka"
              type="checkbox"
              onChange={handleBrandFilter}
            />
            <label> Timyka </label>
          </div>
          <div className="filter-option">
            <input
              className="checkbox"
              checked={brand.includes("Younky")}
              value="Younky"
              type="checkbox"
              onChange={handleBrandFilter}
            />
            <label> Younky </label>
          </div>
          <div className="filter-option">
            <input
              className="checkbox"
              checked={brand.includes("athizya")}
              value="athizya"
              type="checkbox"
              onChange={handleBrandFilter}
            />
            <label> athizya </label>
          </div>
          <div className="filter-option">
            <input
              className="checkbox"
              checked={brand.includes("Reifica")}
              value="Reifica"
              type="checkbox"
              onChange={handleBrandFilter}
            />
            <label> Reifica </label>
          </div>
          <div className="filter-option">
            <input
              className="checkbox"
              checked={brand.includes("Anand")}
              value="Anand"
              type="checkbox"
              onChange={handleBrandFilter}
            />
            <label> Anand </label>
          </div>
          <div className="filter-option">
            <input
              className="checkbox"
              checked={brand.includes("Cadila")}
              value="Cadila"
              type="checkbox"
              onChange={handleBrandFilter}
            />
            <label> Cadila </label>
          </div>
          <div className="filter-option">
            <input
              className="checkbox"
              checked={brand.includes("Fabbmate")}
              value="Fabbmate"
              type="checkbox"
              onChange={handleBrandFilter}
            />
            <label> Fabbmate </label>
          </div>
        </div>
      </div>
    </div>
  );
};
