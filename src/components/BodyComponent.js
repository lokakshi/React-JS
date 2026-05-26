import RestaurantCard from "./cards/RestaurantCard";
import { useEffect, useState} from "react";
import { RESTAURANT_DATA_URL } from "../utils/constant";
import useRestaurant from "../utils/useRestaurant";
import ShimmerCards from "./shimmer/ShimmerCards";
import useOnlineStatus from "../utils/useOnlineStatus";
const BodyComponent = () => {
  const { listOfRestaurants, filteredRestaurants } = useRestaurant();
  const [searchText,setSearchText]=useState("");
    // Custom hooks used to fetch the restaurant data 
  const isOnline = useOnlineStatus();


  if(listOfRestaurants?.length===0){
    return <ShimmerCards/>
  }
  return (
    isOnline ?
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
            setFilteredRestaurants(listOfRestaurants);
            return;
          }
          const filteredRestaurants=listOfRestaurants.filter((restaurant)=>{
            return restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase());
          })
          setFilteredRestaurants(filteredRestaurants);

        }}>Search</button>
        <div className="filter-container">
        <button className="filter-button" onClick={()=>{
          setFilteredRestaurants(
            listOfRestaurants.filter((restaurant)=>restaurant.info?.avgRating>4));
        }} >Top Rated Restaurants</button>
      </div>
      </div>
      
      <div className="restaurant-container">
      {/* Restaurant Cards */}
      {/* Restaurant Cards we had restaurants data as an array with multiple objects so we looped over the data using array.map  */}
        {filteredRestaurants?.map((restaurant) => (
          <RestaurantCard key={restaurant?.info?.id} props={restaurant?.info} />
        ))}
      </div>
    </div>
    :(
     <div className="offline-wrapper">
  <div className="offline-card">
    <div className="offline-icon">📡</div>

    <h1 className="offline-title">You're Offline</h1>

    <p className="offline-description">
      It looks like your internet connection was interrupted.
      Please check your network and try again.
    </p>

    <button
      className="retry-btn"
      onClick={() => window.location.reload()}
    >
      Retry Connection
    </button>
  </div>
</div> )  
  );
};
export default BodyComponent;