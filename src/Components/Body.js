import React, {useState, useEffect} from "react";
// import ReactDOM from "react-dom/client";
import Restaurant from "./Restaurant"
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

function filterData(a,b){
    return b.filter((restaurant) => restaurant?.data?.name?.toLowerCase()?.includes(a.toLowerCase()))
}

 
const Body = () => {
    const [search, setSearch] = useState('');
    const [res, setRes] = useState([])  
    const [filteredRes, setFilteredRes] = useState()


    useEffect(()=>{
        api();
        // console.log('useEffect is called')
      },[]);

      const api = async()=>{
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7041&lng=77.1025&page_type=DESKTOP_WEB_LISTING'); 
        const json = await data.json()
        // console.log(json)
        setRes(json?.data?.cards[2]?.data?.data?.cards)
        setFilteredRes(json?.data?.cards[2]?.data?.data?.cards)
    }

    
    const ResetClick = ()=> {
        setFilteredRes(res)
        setSearch('')
    }

    const updateSearch = (e)=> {
      setSearch(e.target.value)
      setFilteredRes(filterData(e.target.value, res))
    }

    if (!res) return null

    return res?.length === 0 ? 
    (<Shimmer></Shimmer>) :
     (
        <>
        <input type="text" placeholder="Search" value={search} onChange={updateSearch}></input>
        <button onClick={ResetClick}>Reset Search Filters</button>
      <div className="body-div">
        {
          filteredRes.map((restaurant)=>{
            return <Link to={"/restaurant/123"} key = {restaurant.data.id}> <Restaurant {...restaurant.data}/>
            </Link>
            // return <Restaurant {...restaurant.data} key = {restaurant.data.id}/>
          })
        }
      </div>
      </>
    )
  }

export default Body