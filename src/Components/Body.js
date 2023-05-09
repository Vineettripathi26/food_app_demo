import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom/client";
// import "/index.css"
// import { RestaurantList } from "../constant";
// import Restaurant from "./Restaurant";

import Restaurant from "./Restaurant"

function filterData(a,b){
    return b.filter((restaurant) => restaurant.data.name.includes(a))
}



  
const Body = () => {
    const [search, setSearch] = useState('');
    const [res, setRes] = useState([])
    const [data, setData] = useState()

    useEffect(()=>{
        api();
      },[]);

      const api = async()=>{
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&page_type=DESKTOP_WEB_LISTING'); 
        const json = await data.json()
        setRes(json?.data?.cards[2]?.data?.data?.cards)
        // console.log(json?.data?.cards[2]?.data?.data?.cards)
    }

    
    const searchClick = ()=> {
        const data = filterData(search, res)
        setRes(data)
    }

    const updateSearch = (e)=> {
        setSearch(e.target.value)
        // if (e.target.value == ""){
        //     setRes()
        // }
    }

    return (
        <>
        <input type="text" placeholder="Search" value={search} onChange={updateSearch}></input>
        <button onClick={searchClick}>Search</button>
      <div className="body-div">
        {
          res.map((restaurant)=>{
            return <Restaurant {...restaurant.data} key = {restaurant.data.id}/>
          })
        }
      </div>
      </>
    )
  }

export default Body