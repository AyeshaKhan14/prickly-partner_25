import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import "../Styles/Filters.css";

// abhi isko side me rakhte ha


const MobileFilter = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const initialCategoryFilter = searchParams.getAll("category");
    const [category, setCategory] = useState( initialCategoryFilter || []);
    const initialBrandFilter = searchParams.getAll("brand");
    const [brand, setBrand] = useState( initialBrandFilter || []);

    const handleFilterCheckbox = (e) => {
        const newCategory = [...category]
  
        if(newCategory.includes(e.target.value)){
            newCategory.splice(newCategory.indexOf(e.target.value), 1)
            setCategory(newCategory)
      
        }
        else{
            newCategory.push(e.target.value)
            setCategory(newCategory)
            console.log("else working")
        }
    }

    const handleBrandFilter = (e) => {
        const newCategory = [...brand]
        if(newCategory.includes(e.target.value)){
            newCategory.splice(newCategory.indexOf(e.target.value), 1)
            setBrand(newCategory)
        }
        else{
            newCategory.push(e.target.value)
            setBrand(newCategory)
        }
    }

       useEffect(()=> {
        if(category || brand){
            let params = {};
            category && (params.category = category);
            brand && (params.brand = brand);
            setSearchParams(params)
        }
       }, [category,brand, setSearchParams])

  return (
    <div className='filter-parent'>
        <div className='categories-parent'>
            <div className='filter-option'>
                <input className='checkbox' checked={category.includes('watch')} value="watch" type="checkbox" onChange={handleFilterCheckbox}/>
                <label> Watch </label>
            </div>
            <div className='filter-option'>
                <input checked={category.includes('mobile')} value="mobile" type="checkbox" onChange={handleFilterCheckbox}/>
                <label> Mobile  </label>
            </div>
            <div className='filter-option'>
                <input checked={category.includes('powerbank')} value="powerbank" type="checkbox" onChange={handleFilterCheckbox}/>
                <label> Power Bank </label>
            </div>
            <div className='filter-option'>
                <input checked={category.includes('Smartwatch')} value="Smartwatch" type="checkbox" onChange={handleFilterCheckbox}/>
                <label> Smart Watch </label>
            </div>
            <div className='filter-option'>
                <input checked={category.includes('mobile')} value="mobile" type="checkbox" onChange={handleFilterCheckbox}/>
                <label> Smart Phone </label>
            </div>
            <div className='filter-option'>
                <input checked={category.includes('watch')} value="watch" type="checkbox" onChange={handleFilterCheckbox}/>
                <label> smart Watches </label>
            </div>
            <div className='filter-option'>
                <input checked={category.includes('mobile')} value="mobile" type="checkbox" onChange={handleFilterCheckbox}/>
                <label> Smart Gadgets </label>
            </div>
            <div className='filter-option'>
                <input checked={category.includes('mobile')} value="mobile" type="checkbox" onChange={handleFilterCheckbox}/>
                <label> New Mobile </label>
            </div>
           
        </div>
        <div className='filter-Brand'>
            <p>Brand</p>
            <div className='brand-box'>
                <div className='filter-option'>
                    <input className='checkbox' checked={brand.includes('Xiaomi')} value="Xiaomi" type="checkbox" onChange={handleBrandFilter}/>
                    <label> Xiaomi </label>
                </div>
                <div className='filter-option'>
                    <input className='checkbox' checked={brand.includes('STORM')} value="STORM" type="checkbox" onChange={handleBrandFilter}/>
                    <label> STORM </label>
                </div>
                <div className='filter-option'>
                    <input className='checkbox' checked={brand.includes('TXOR')} value="TXOR" type="checkbox" onChange={handleBrandFilter}/>
                    <label> TXOR </label>
                </div>
                <div className='filter-option'>
                    <input className='checkbox' checked={brand.includes('apple')} value="apple" type="checkbox" onChange={handleBrandFilter}/>
                    <label> apple </label>
                </div>
                <div className='filter-option'>
                    <input className='checkbox' checked={brand.includes('Wingfi')} value="Wingfi" type="checkbox" onChange={handleBrandFilter}/>
                    <label> Wingfi </label>
                </div>
                <div className='filter-option'>
                    <input className='checkbox' checked={brand.includes('oneplus')} value="oneplus" type="checkbox" onChange={handleBrandFilter}/>
                    <label> oneplus </label>
                </div>
                <div className='filter-option'>
                    <input className='checkbox' checked={brand.includes('vivo')} value="vivo" type="checkbox" onChange={handleBrandFilter}/>
                    <label> vivo </label>
                </div>
                <div className='filter-option'>
                    <input className='checkbox' checked={brand.includes('Motorola')} value="Motorola" type="checkbox" onChange={handleBrandFilter}/>
                    <label> Motorola </label>
                </div>
                <div className='filter-option'>
                    <input className='checkbox' checked={brand.includes('tecno')} value="tecno" type="checkbox" onChange={handleBrandFilter}/>
                    <label> tecno </label>
                </div>
                <div className='filter-option'>
                    <input className='checkbox' checked={brand.includes('samsung')} value="samsung" type="checkbox" onChange={handleBrandFilter}/>
                    <label> samsung </label>
                </div>
                <div className='filter-option'>
                    <input className='checkbox' checked={brand.includes('redmi')} value="redmi" type="checkbox" onChange={handleBrandFilter}/>
                    <label> redmi </label>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default MobileFilter;