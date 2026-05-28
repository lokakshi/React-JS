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
      <div className="flex justify-center items-center gap-4 my-4 flex-wrap">
        <input
          type="text"
          placeholder="Search for restaurants"
          className="w-64 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchText}
          onChange={(e)=>{
            setSearchText(e.target.value);
          }}
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={()=>{
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
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600" onClick={()=>{
          setFilteredRestaurants(
            listOfRestaurants.filter((restaurant)=>restaurant.info?.avgRating>4));
        }} >Top Rated Restaurants</button>
      </div>
      </div>
      
      <div className="flex flex-wrap justify-center gap-4 px-3.5 py-3.5">
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