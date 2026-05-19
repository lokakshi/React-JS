// we will try creating a nested div structure like parent child and grandchild using the createElement method of the React library. We will also add some attributes to the elements we create.
// in addition we will also show how to create siblings using the createElement method. We will create a parent div with an id of 'parent', a child div with an id of 'child', and a grandchild h1 tag with an id of 'grandchild'. We will also create a sibling h1 tag with an id of 'heading' that will be rendered alongside the parent div.
import React from "react";
import ReactDOM from "react-dom/client";

// const parent = React.createElement(
//   "h1",
//   { id: "parent", key: "parent" },
//    "hello world 1"
//   );

// const heading = React.createElement("h1", { id: "heading" }, "hello world");
// we created a react element using the createElement method of the React library. The first argument is the type of element we want to create, in this case, an 'h1' tag. The second argument is an object that can contain any attributes we want to add to the element, but in this case, we are leaving it empty. The third argument is the content of the element, which is 'hello world'.

// Now we will create React Element using JSX syntax. JSX is a syntax extension for JavaScript that allows us to write HTML-like code in our JavaScript files. It makes it easier to create React elements and components.
// const parent = (
//   <div id="parent">
//     <div id="child">
//       <h1 id="grandchild">hello world</h1>
//     </div>
//   </div>
// );
// In the above code, we are creating a nested div structure using JSX syntax. We have a parent div with an id of 'parent', a child div with an id of 'child', and a grandchild h1 tag with an id of 'grandchild'. The content of the h1 tag is 'hello world'.

// In the below code now we will create React Component using JSX syntax. A React component is a reusable piece of code that can be used to create UI elements. We will create a functional component called 'App' that will return the JSX code we created earlier.
// const Title=()=>{
//   return <h1 id="heading">Title</h1>;
// }
// const BodyComponent=()=>{
//   return (

//     <div id="parent">
//       <div id="child">
//         <Title/>
//         <h1 id="grandchild">hello world</h1>
//       </div>
//     </div>
//   );
// }
const HeaderComponent = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKJHtW8EcW6LSLpok8JoZXP4sXhX5ROrF4Qw&s"
          alt="logo"
          className="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const restaurantData= [
{
"info": {
"id": "123456",
"name": "Pizza Paradise",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/17/6def0f0f-9e6c-45c0-b5e6-05af750f27b5_795906.JPG",
"locality": "MG Road",
"areaName": "Central District",
"costForTwo": "₹400 for two",
"cuisines": [
"Pizza",
"Italian",
"Fast Food"
],
"avgRating": 4.3,
"avgRatingString": "4.3",
"totalRatingsString": "10K+ ratings",
"veg": false,
"sla": {
"deliveryTime": 30,
"lastMileTravel": 3.5,
"slaString": "30 mins"
},
"aggregatedDiscountInfoV3": {
"header": "50% OFF",
"subHeader": "UPTO ₹100"
}
}
},
{
"info": {
"id": "234567",
"name": "Burger Hub",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/acfcaacc-edf0-4189-8264-d614d312c0ee_740457.JPG",
"locality": "Park Street",
"areaName": "Downtown",
"costForTwo": "₹300 for two",
"cuisines": [
"Burgers",
"American",
"Fast Food"
],
"avgRating": 4.5,
"avgRatingString": "4.5",
"totalRatingsString": "15K+ ratings",
"veg": false,
"sla": {
"deliveryTime": 25,
"lastMileTravel": 2,
"slaString": "25 mins"
},
"aggregatedDiscountInfoV3": {
"header": "40% OFF",
"subHeader": "UPTO ₹80"
}
}
},
{
"info": {
"id": "345678",
"name": "Green Bites",
"cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
"locality": "Residency Road",
"areaName": "South Zone",
"costForTwo": "₹250 for two",
"cuisines": [
"Healthy Food",
"Salads",
"Vegan"
],
"avgRating": 4.7,
"avgRatingString": "4.7",
"totalRatingsString": "8K+ ratings",
"veg": true,
"sla": {
"deliveryTime": 20,
"lastMileTravel": 1.5,
"slaString": "20 mins"
},
"aggregatedDiscountInfoV3": {
"header": "30% OFF",
"subHeader": "UPTO ₹75"
}
}
},
{
"info": {
"id": "456789",
"name": "Spice Kingdom",
"cloudinaryImageId": "rng/md/carousel/production/indian101",
"locality": "Brigade Road",
"areaName": "City Center",
"costForTwo": "₹500 for two",
"cuisines": [
"Indian",
"North Indian",
"Biryani"
],
"avgRating": 4.2,
"avgRatingString": "4.2",
"totalRatingsString": "12K+ ratings",
"veg": false,
"sla": {
"deliveryTime": 35,
"lastMileTravel": 4,
"slaString": "35 mins"
},
"aggregatedDiscountInfoV3": {
"header": "20% OFF",
"subHeader": "UPTO ₹50"
}
}
},
{
"info": {
"id": "567890",
"name": "Chinese Dragon",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/ba9f1f59-30d5-44de-afad-df6db8471ead_9648.jpg",
"locality": "Commercial Street",
"areaName": "East District",
"costForTwo": "₹350 for two",
"cuisines": [
"Chinese",
"Asian",
"Thai"
],
"avgRating": 4.4,
"avgRatingString": "4.4",
"totalRatingsString": "9K+ ratings",
"veg": false,
"sla": {
"deliveryTime": 28,
"lastMileTravel": 2.8,
"slaString": "28 mins"
},
"aggregatedDiscountInfoV3": {
"header": "60% OFF",
"subHeader": "UPTO ₹120"
}
}
},
{
"info": {
"id": "678901",
"name": "Dessert Delight",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/8/731001f1-f1c4-4f5f-849f-79a697cb0b72_390173.jpg",
"locality": "Lavelle Road",
"areaName": "West End",
"costForTwo": "₹200 for two",
"cuisines": [
"Desserts",
"Ice Cream",
"Bakery"
],
"avgRating": 4.6,
"avgRatingString": "4.6",
"totalRatingsString": "7K+ ratings",
"veg": true,
"sla": {
"deliveryTime": 22,
"lastMileTravel": 1.8,
"slaString": "22 mins"
},
"aggregatedDiscountInfoV3": {
"header": "25% OFF",
"subHeader": "UPTO ₹60"
}
}
},
{
"info": {
"id": "789012",
"name": "Sushi Station",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/acfcaacc-edf0-4189-8264-d614d312c0ee_740457.JPG",
"locality": "Indiranagar",
"areaName": "Uptown",
"costForTwo": "₹800 for two",
"cuisines": [
"Japanese",
"Sushi",
"Asian"
],
"avgRating": 4.8,
"avgRatingString": "4.8",
"totalRatingsString": "5K+ ratings",
"veg": false,
"sla": {
"deliveryTime": 40,
"lastMileTravel": 5.2,
"slaString": "40 mins"
},
"aggregatedDiscountInfoV3": {
"header": "15% OFF",
"subHeader": "UPTO ₹150"
}
}
},
{
"info": {
"id": "890123",
"name": "South Spice",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/17/6def0f0f-9e6c-45c0-b5e6-05af750f27b5_795906.JPG",
"locality": "Jayanagar",
"areaName": "South Bangalore",
"costForTwo": "₹300 for two",
"cuisines": [
"South Indian",
"Dosa",
"Idli"
],
"avgRating": 4.5,
"avgRatingString": "4.5",
"totalRatingsString": "11K+ ratings",
"veg": true,
"sla": {
"deliveryTime": 25,
"lastMileTravel": 3,
"slaString": "25 mins"
},
"aggregatedDiscountInfoV3": {
"header": "35% OFF",
"subHeader": "UPTO ₹70"
}
}
},
{
"info": {
"id": "901234",
"name": "Pasta Palace",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/17/7bd350a8-55e7-459b-83a2-e250e670d194_14558.JPG",
"locality": "Koramangala",
"areaName": "Tech Hub",
"costForTwo": "₹450 for two",
"cuisines": [
"Italian",
"Pasta",
"Continental"
],
"avgRating": 4.1,
"avgRatingString": "4.1",
"totalRatingsString": "6K+ ratings",
"veg": false,
"sla": {
"deliveryTime": 32,
"lastMileTravel": 3.8,
"slaString": "32 mins"
},
"aggregatedDiscountInfoV3": {
"header": "45% OFF",
"subHeader": "UPTO ₹90"
}
}
}
]
const RestaurantCard = ({props}) => {
  // Destructuring the props object to extract the required properties for the restaurant card. We are using optional chaining to avoid any errors in case any of the properties are undefined.
  const { cloudinaryImageId,name,cuisines,avgRatingString,sla } = props;
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
        <p className="restaurant-rating">Rating: {avgRatingString}</p>
        <p className="restaurant-delivery-time">Delivery Time: {sla?.slaString}</p>
      </div>
    </div>
  );
}
const BodyComponent = () => {
  return (
    <div className="body-container">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for restaurants"
          className="search-input"
        />
        <button className="search-button">Search</button>
      </div>
      <div className="restaurant-container">
      {/* Restaurant Cards */}
      {/* Restaurant Cards we had restaurants data as an array with multiple objects so we looped over the data using array.map  */}
        {restaurantData?.map((restaurant) => (
          <RestaurantCard key={restaurant?.info?.id} props={restaurant?.info} />
        ))}
      </div>
    </div>
  );
};
// Now we will build our first project . We will create a food delivery app that will show a list of restaurants and their details. We will create a header component that will contain the logo and navigation items, a body component that will contain the search bar and restaurant cards, and a restaurant card component that will show the details of each restaurant. We will also create some dummy data for the restaurants and pass it as props

// Now we will build our first project .
const AppLayout = () => {
  return (
    <div className="app">
      {/* header */}
      <HeaderComponent />
      {/* body */}
      <BodyComponent />
      {/* footer */}
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
// we are using the createRoot method of the ReactDOM library to create a root element that will be used to render our React component. We pass in the DOM element with the id of 'root' as an argument to this method.
root.render(<AppLayout />);
// Finally, we call the render method on the root element and pass in the heading element we created earlier. This will render the 'hello world' message inside the 'h1' tag on the webpage.
