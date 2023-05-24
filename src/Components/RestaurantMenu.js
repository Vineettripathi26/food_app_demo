import { useEffect, useState } from "react";
import { useParams } from "react-router"

const RestaurantMenu = () => {
    // console.log(useState['11'])
    // useEffect(()=>{
    //     apiCall();
    // },[])

    // async function apiCall(){
    //     const data = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=498382&submitAction=ENTER')
    //     const json = await (data.json())
    //     console.log(json)
    // }

    const { id } = useParams(); 
    return (
        <div>{id}</div>
    )
}

export default RestaurantMenu