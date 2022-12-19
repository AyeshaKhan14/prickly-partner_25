import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import "../Styles/Filters.css";

const GroceriesFilter = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const initialCategoryFilter = searchParams.getAll("category");
    const [category, setCategory] = useState( initialCategoryFilter || []);
    const initialBrandFilter = searchParams.getAll("brand");
    const [brand, setBrand] = useState( initialBrandFilter || []);

    const handleFilterCheckbox = (e) => {
        const newCategory = [...category]
        console.log(newCategory)
        if(newCategory.includes(e.target.value)){
            newCategory.splice(newCategory.indexOf(e.target.value), 1)
            setCategory(newCategory)
            console.log("working if ")
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
                <input className='checkbox' checked={category.includes('Fruits')} value="Fruits" type="checkbox" onChange={handleFilterCheckbox}/>
                <label> Fruits </label>
            </div>
            <div className='filter-option'>
                <input className='checkbox' checked={category.includes('Dry-Fruits')} value="Dry-Fruits" type="checkbox" onChange={handleFilterCheckbox}/>
                <label> Dry Fruits </label>
            </div>
            <div className='filter-option'>
                <input className='checkbox' checked={category.includes('Sweets')} value="Sweets" type="checkbox" onChange={handleFilterCheckbox}/>
                <label> Sweets </label>
            </div>
            <div className='filter-option'>
                <input checked={category.includes('Perfume')} value="Perfume" type="checkbox" onChange={handleFilterCheckbox}/>
                <label> Perfume  </label>
            </div>
            <div className='filter-option'>
                <input checked={category.includes('Soap')} value="Soap" type="checkbox" onChange={handleFilterCheckbox}/>
                <label> Soap </label>
            </div>
            <div className='filter-option'>
                <input checked={category.includes('Shampoo')} value="Shampoo" type="checkbox" onChange={handleFilterCheckbox}/>
                <label> Shampoo </label>
            </div>
            <div className='filter-option'>
                <input checked={category.includes('Soft-Drink')} value="Soft-Drink" type="checkbox" onChange={handleFilterCheckbox}/>
                <label> Soft-Drink </label>
            </div>
            <div className='filter-option'>
                <input checked={category.includes('Ghee')} value="Ghee" type="checkbox" onChange={handleFilterCheckbox}/>
                <label> Ghee </label>
            </div>
            <div className='filter-option'>
                <input checked={category.includes('Cookies')} value="Cookies" type="checkbox" onChange={handleFilterCheckbox}/>
                <label> Cookies </label>
            </div>
            <div className='filter-option'>
                <input checked={category.includes('Chocolate')} value="Chocolate" type="checkbox" onChange={handleFilterCheckbox}/>
                <label> Chocolate </label>
            </div>
            <div className='filter-option'>
                <input checked={category.includes('Dry-Fruits')} value="Dry-Fruits" type="checkbox" onChange={handleFilterCheckbox}/>
                <label> Dry-Fruits </label>
            </div>
            <div className='filter-option'>
                <input checked={category.includes('Detergant')} value="Detergant" type="checkbox" onChange={handleFilterCheckbox}/>
                <label> Detergant </label>
            </div>
            <div className='filter-option'>
                <input checked={category.includes('Oil')} value="Oil" type="checkbox" onChange={handleFilterCheckbox}/>
                <label> Oil </label>
            </div>
            <div className='filter-option'>
                <input checked={category.includes('Snack')} value="Snack" type="checkbox" onChange={handleFilterCheckbox}/>
                <label> Snack </label>
            </div>
        </div>
        <div className='filter-Brand'>
            <p>Brand</p>
               <div className='brand-box'>
                <div className='filter-option'>
                    <input className='checkbox' checked={brand.includes('ROYAL DELIGHT')} value="ROYAL DELIGHT" type="checkbox" onChange={handleBrandFilter}/>
                    <label> Royal Delight </label>
                </div>
               <div className='filter-option'>
                    <input className='checkbox' checked={brand.includes('KING SOLOMOM')} value="KING SOLOMOM" type="checkbox" onChange={handleBrandFilter}/>
                    <label> King Solomon </label>
                </div>
                <div className='filter-option'>
                    <input className='checkbox' checked={brand.includes('Tata')} value="Tata" type="checkbox" onChange={handleBrandFilter}/>
                    <label> Tata </label>
                </div>
                <div className='filter-option'>
                    <input className='checkbox' checked={brand.includes('Curate')} value="Curate" type="checkbox" onChange={handleBrandFilter}/>
                    <label> Curate </label>
                </div>
                <div className='filter-option'>
                    <input className='checkbox' checked={brand.includes('Kamasutra')} value="Kamasutra" type="checkbox" onChange={handleBrandFilter}/>
                    <label> Kamasutra </label>
                </div>
                <div className='filter-option'>
                    <input className='checkbox' checked={brand.includes('Park-Avenue')} value="Park-Avenue" type="checkbox" onChange={handleBrandFilter}/>
                    <label> Park Avenue </label>
                </div>
                <div className='filter-option'>
                    <input className='checkbox' checked={brand.includes('Nivea')} value="Nivea" type="checkbox" onChange={handleBrandFilter}/>
                    <label> Nivea </label>
                </div>
                <div className='filter-option'>
                    <input className='checkbox' checked={brand.includes('Coca-Cola')} value="Coca-Cola" type="checkbox" onChange={handleBrandFilter}/>
                    <label> Coca Cola </label>
                </div>
                <div className='filter-option'>
                    <input className='checkbox' checked={brand.includes('Gowardhen')} value="Gowardhen" type="checkbox" onChange={handleBrandFilter}/>
                    <label> Gowardhen </label>
                </div>
                <div className='filter-option'>
                    <input className='checkbox' checked={brand.includes('Godrej')} value="Godrej" type="checkbox" onChange={handleBrandFilter}/>
                    <label> Godrej </label>
                </div>
                <div className='filter-option'>
                    <input className='checkbox' checked={brand.includes('Lux')} value="Lux" type="checkbox" onChange={handleBrandFilter}/>
                    <label> Lux </label>
                </div>
                <div className='filter-option'>
                    <input className='checkbox' checked={brand.includes('Tresemme')} value="Tresemme" type="checkbox" onChange={handleBrandFilter}/>
                    <label> Tresemme </label>
                </div>
                <div className='filter-option'>
                    <input className='checkbox' checked={brand.includes('Head-Shoulders')} value="Head-Shoulders" type="checkbox" onChange={handleBrandFilter}/>
                    <label> Head Shoulders </label>
                </div>
                <div className='filter-option'>
                    <input className='checkbox' checked={brand.includes('Dove')} value="Dove" type="checkbox" onChange={handleBrandFilter}/>
                    <label> Dove </label>
                </div>
                <div className='filter-option'>
                    <input className='checkbox' checked={brand.includes('Cadbury')} value="Cadbury" type="checkbox" onChange={handleBrandFilter}/>
                    <label> Cadbury </label>
                </div>
                <div className='filter-option'>
                    <input className='checkbox' checked={brand.includes('Sunfeast')} value="Sunfeast" type="checkbox" onChange={handleBrandFilter}/>
                    <label> Sunfeast </label>
                </div>
                <div className='filter-option'>
                    <input className='checkbox' checked={brand.includes('Britannia')} value="Britannia" type="checkbox" onChange={handleBrandFilter}/>
                    <label> Britannia </label>
                </div>
                <div className='filter-option'>
                    <input className='checkbox' checked={brand.includes('Celebration')} value="Celebration" type="checkbox" onChange={handleBrandFilter}/>
                    <label> Celebration </label>
                </div>
                <div className='filter-option'>
                    <input className='checkbox' checked={brand.includes('Bikaji')} value="Bikaji" type="checkbox" onChange={handleBrandFilter}/>
                    <label> Bikaji </label>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GroceriesFilter