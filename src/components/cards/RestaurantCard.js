
import { RESTAURANT_IMAGE_URL } from "../../utils/constant";
import { useNavigate } from "react-router-dom";

const RestaurantCard = ({props}) => {
  // Destructuring the props object to extract the required properties for the restaurant card. We are using optional chaining to avoid any errors in case any of the properties are undefined.
  const navigate = useNavigate();
  return (
    <div className="w-64 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300
     cursor-pointer" onClick={()=>navigate(`/restaurant/${props?.id}`)}>
      <div className="restaurant-image">
        <img
          src={RESTAURANT_IMAGE_URL + props?.cloudinaryImageId || "/public/logo.svg"}
          alt="restaurant"
          className="w-full h-40 object-cover rounded-t-lg"
        />
      </div>
      <div className="restaurant-details">
        <h2 className="font-bold text-lg px-1.5 py-1.5">{props?.name}</h2>
        <p className="text-gray-600 px-1.5 py-1.5">{props?.cuisines?.join(", ")}</p>
        <p className="text-gray-600 px-1.5 py-1.5">Rating: {props?.avgRating}</p>
        <p className="text-gray-600 px-1.5 py-1.5">Delivery Time: {props?.sla?.slaString}</p>
      </div>
    </div>
  );
}
export default RestaurantCard;