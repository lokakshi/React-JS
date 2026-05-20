import RestaurantCard from "./cards/RestaurantCard";
import restaurantData from "../utils/restaurantData";
import { useState} from "react";
const BodyComponent = () => {
  const[listOfRestaurants,setListOfRestaurants]=useState(restaurantData);
  const [searchText,setSearchText]=useState("");
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
            setListOfRestaurants(restaurantData);
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