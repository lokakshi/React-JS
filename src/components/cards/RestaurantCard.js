
import { RESTAURANT_IMAGE_URL } from "../../utils/constant";
const RestaurantCard = ({props}) => {
  // Destructuring the props object to extract the required properties for the restaurant card. We are using optional chaining to avoid any errors in case any of the properties are undefined.

  return (
    <div className="restaurant-card">
      <div className="restaurant-image">
        <img
          src={RESTAURANT_IMAGE_URL + props?.cloudinaryImageId}
          alt="restaurant"
          className="restaurant-logo"
        />
      </div>
      <div className="restaurant-details">
        <h2 className="restaurant-name">{props?.name}</h2>
        <p className="restaurant-cuisine">{props?.cuisines?.join(", ")}</p>
        <p className="restaurant-rating">Rating: {props?.avgRating}</p>
        <p className="restaurant-delivery-time">Delivery Time: {props?.sla?.slaString}</p>
      </div>
    </div>
  );
}
export default RestaurantCard;