import RestaurantCard from "./cards/RestaurantCard";
import { useEffect, useState} from "react";
import { RESTAURANT_DATA_URL } from "../utils/constant";
import ShimmerCards from "./shimmer/ShimmerCards";
const BodyComponent = () => {
  const[listOfRestaurants,setListOfRestaurants]=useState([]);
  const [searchText,setSearchText]=useState("");

  const getRestaurants=async()=>{
    const data=await fetch(RESTAURANT_DATA_URL);
    const json=await data.json();
    console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }
    useEffect(()=>{
    getRestaurants();
  },[]);

  if(listOfRestaurants.length===0){
    return <ShimmerCards/>
  }
  return (
    <div className="body-container">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for restaurants"
          className="search-input"
          value={searchText}
          onChange={(e)=>{
            setSearchText(e.target.value);
          }}
        />
        <button className="search-button" onClick={()=>{
          if(searchText===""){
            setListOfRestaurants([]);
            return;
          }
          const filteredRestaurants=listOfRestaurants.filter((restaurant)=>{
            return restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase());
          })
          setListOfRestaurants(filteredRestaurants);

        }}>Search</button>
        <div className="filter-container">
        <button className="filter-button" onClick={()=>{
          setListOfRestaurants(
            listOfRestaurants.filter((restaurant)=>restaurant.info?.avgRating>4));
        }} >Top Rated Restaurants</button>
      </div>
      </div>
      
      <div className="restaurant-container">
      {/* Restaurant Cards */}
      {/* Restaurant Cards we had restaurants data as an array with multiple objects so we looped over the data using array.map  */}
        {listOfRestaurants?.map((restaurant) => (
          <RestaurantCard key={restaurant?.info?.id} props={restaurant?.info} />
        ))}
      </div>
    </div>
  );
};
export default BodyComponent;