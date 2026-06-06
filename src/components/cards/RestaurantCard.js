
import { RESTAURANT_IMAGE_URL } from "../../utils/constant";
import { useNavigate } from "react-router-dom";

const RestaurantCard = ({ props }) => {
  // Destructuring the props object to extract the required properties for the restaurant card. We are using optional chaining to avoid any errors in case any of the properties are undefined.
  console.log(props)
  const navigate = useNavigate();
  return (
    <div className="w-64 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300
     cursor-pointer" onClick={() => navigate(`/restaurant/${props?.id}`)}>
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

export const RestuarantCardHOC = (RestaurantCard) => {
  // higher order component which takes the RestaurantCard component as an argument and returns a new component with some additional functionality. In this case, we are adding a "Veg" label to the restaurant card. We can use this HOC to create a new component called RestuarantCardVeg which will display the "Veg" label on the restaurant card.
  // return ()=> here is a function that returns a new component which is a combination of the original RestaurantCard component and the additional "Veg" label. We can use this new component in our BodyComponent to display the restaurant cards with the "Veg" label for vegetarian restaurants.
  // () => {
  //   return (
  //     <div className="relative">
  //       <RestaurantCard  />
  //       <div className="absolute top-0 left-0 bg-green-500 text-white px-2 py-1 rounded-bl-lg">
  //         Veg
  //       </div>
  //     </div>
  //   );
  // }

  // This is the new component that we are returning from the HOC. It is a combination of the original RestaurantCard component and the additional "Veg" label. We can use this new component in our BodyComponent to display the restaurant cards with the "Veg" label for vegetarian restaurants.
  return (props) => {
    // higer order component is a pure function we are adding something on the top that's why were are ...props here we are passing the props to the original component and then we are adding the veg label on the top of the card. We can use this new component in our BodyComponent to display the restaurant cards with the "Veg" label for vegetarian restaurants.
    return (
      <div className="relative">
        <RestaurantCard {...props} />
        <div className="absolute top-0 left-0 bg-green-500 text-white px-2 py-1 rounded-bl-lg">
          Veg
        </div>
      </div>
    );
  }
}