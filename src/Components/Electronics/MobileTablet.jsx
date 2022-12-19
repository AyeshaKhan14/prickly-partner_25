import styles from "./MobileTablet.module.css";
import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react'
import Sort from "./Sort";


const getData = ({page}) => {
   return fetch(`http://localhost:8080/mobile-tablets?_limit=20&_page=${page}`).then(
        r => {
            return r.json();
      
    })
}

const image = "https://www.jiomart.com/assets/global/verticals/fashion_default_banner.svg";

const MobileTablet = () => {

   
    const [page , setPage] = useState(1);
    const [posts, setPosts] = useState([]);
    const [sortObg, setSortObg] = useState([]);
   
    useEffect(() => {
       handleFetchData(page);

    }, [page]);

    const handleFetchData = async(page = 1) => {
        try{
            const data = await getData({page});
            setPosts(data);
        }
        catch(err){
            console.log("error");
        }
    }

    // console.log(posts);
    // return posts;

  
    
const handlePageChange = (changeBy) => {
    setPage(page+changeBy);
}
// descending order

const handleHighToLow =() => {
    posts.sort(function(a,b){
        return b.price - a.price;
    })
    console.log("u can chk descending here",posts);
}
// ascending order
const handleLowToHigh =() => {
    posts.sort(function(a,b){
        return a.price - b.price;
    })
    console.log("u can chk ascending here",posts);
}

// handleLowToHigh()
//     // getData()
    return (
        <div className={styles.sam__main__div}>
            {/* <h1>I am don</h1> */}

            <div className={styles.sam__side__bar}>
                <div className="sam__category__div">
                    <div className={styles.sam__category__child__div}></div>
                </div>
                <div className="sam__filter__div">
                    <div className={styles.sam__filter__child__div}></div>
                </div>
            </div>

            <div className={styles.sam__hero__section__div}>
                <div className={styles.sam__heading__div}>
                    <img className={styles.sam__banner__img} src={image} alt="banner"
                    
                    />
                   
                </div>
                <div className={styles.sam__sort__div}>
                    <div><p>Showing 20 of 138870 items</p></div>

                    <div className="sam__sortButton__div">
                        <button style={{border:"none", margin:"5px", padding:"2px 5px" }}>Sort by:</button>
                        <button style={{border:"2px solid grey", margin:"5px", padding:"2px 5px" }} >Priority</button>
                        <button style={{border:"2px solid grey", margin:"5px", padding:"2px 5px" }} onClick={handleLowToHigh}>Low to High</button>
                        <button style={{border:"2px solid grey", margin:"5px", padding:"2px 5px" }} onClick={handleHighToLow} >High to Low</button>
                        <button style={{border:"2px solid grey", margin:"5px", padding:"2px 5px" }}>Discount</button>
                        <button style={{border:"2px solid grey", margin:"5px", padding:"2px 5px" }}>All Product</button>
                    </div>
                </div>
                <div style={{margin:"10px", fontSize:"14px" }}>ALL PRODUCTS</div>
                <div className={styles.divs__container}>
                    {
                        posts.map((item) => (
                            <div className={styles.child__divs} 
                            key={item.id}>
                                <div>
                                    <img className={styles.sam__dis__img} src={item.discountimgLink} alt=""/>
                                    <div className={styles.over_the_image}><p>{item.discount}</p></div>
                                </div>  
                            <img className={styles.sam__cart__img} src={item.imgLink1} /> <br /> {item.name}<br />  ₹{item.price}.00  (₹ 499.00/0 )</div>
                        ))
                    }
                </div>
                   <div style={{textAlign:"center" } }>
                    {/* <button onClick={()=>handlePageChange(-1)} disabled={page === 1} >PREV</button> */}

                    <button style={{border:"2px solid grey", padding:"5px 10px", marginRight:"5px", marginTop:"20px", marginBottom:"40px" }} onClick={()=>handlePageChange(-1)} hidden={page===1} >PREVIOUS </button> 
                    <button style={{border:"2px solid grey", padding:"5px 10px", marginRight:"5px", marginTop:"20px", marginBottom:"40px" }}>{page}</button>
                    <button style={{border:"2px solid grey", padding:"5px 10px", marginRight:"5px", marginTop:"20px", marginBottom:"40px" }}>{page+1}</button>
                    <button style={{border:"2px solid grey", padding:"5px 10px", marginRight:"5px", marginTop:"20px", marginBottom:"40px" }}>{page+2}</button>
                    <button style={{border:"2px solid grey", padding:"5px 10px", marginRight:"5px", marginTop:"20px", marginBottom:"40px" }} onClick={()=> handlePageChange(+1)} disabled={page === 4} >NEXT</button>
                   </div>
            </div>
        </div>
    )
}



export default MobileTablet;



// background {transparent}

// {{page} === 1} ? visibility="hidden"

      // console.log(r.data)
        // setData(r.data)

       
    // }).catch(e => {
    //     console.log("Error")
    // const [data, setData] = useState([]);

    // const getData = () => {
    //     axios.get("http://localhost:8080/mobile-tablets").then(r => {
    //         // console.log(r.data)
    //         setData(r.data)
    //     }).catch(e => {
    //         console.log("Error")
    //     })
    // }