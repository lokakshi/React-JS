const RestaurantCard = ({props}) => {
  // Destructuring the props object to extract the required properties for the restaurant card. We are using optional chaining to avoid any errors in case any of the properties are undefined.
  const { cloudinaryImageId,name,cuisines,avgRating,sla } = props;
  return (
    <div className="restaurant-card">
      <div className="restaurant-image">
        <img
          src={cloudinaryImageId}
          alt="restaurant"
          className="restaurant-logo"
        />
      </div>
      <div className="restaurant-details">
        <h2 className="restaurant-name">{name}</h2>
        <p className="restaurant-cuisine">{cuisines?.join(", ")}</p>
        <p className="restaurant-rating">Rating: {avgRating}</p>
        <p className="restaurant-delivery-time">Delivery Time: {sla?.slaString}</p>
      </div>
    </div>
  );
}
export default RestaurantCard;