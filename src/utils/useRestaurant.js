import { useState,useEffect } from "react";
import { RESTAURANT_DATA_URL } from "./constant";
const useRestaurant=()=>{
    const [listOfRestaurants,setListOfRestaurants]=useState([]);
    const [filteredRestaurants,setFilteredRestaurants]=useState([]);

    const getRestaurants=async()=>{
        const data = await fetch(RESTAURANT_DATA_URL);
        const json = await data.json();
            setListOfRestaurants(json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setFilteredRestaurants(json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    useEffect(()=>{
        getRestaurants();
    },[]);

    return {listOfRestaurants,filteredRestaurants};
}


export default useRestaurant;