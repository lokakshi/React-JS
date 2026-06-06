
import { fireEvent, render, screen } from "@testing-library/react"
import RestaurantCard from "../src/components/cards/RestaurantCard";
// import { restaurant } from "../mocks/restuarantcardmocks.json";
import "@testing-library/jest-dom"
import { MemoryRouter, Routes, Route, BrowserRouter } from "react-router-dom";
import Menu from "../src/components/pages/Menu";
import { Provider } from "react-redux";
import store from "../src/utils/store/store.js";
import { RestuarantCardHOC } from "../src/components/cards/RestaurantCard";


test("checking for restaurant card component rendered or not", () => {
    // this component requires props to render the restaurant card component so we are passing the props to the component and then we are checking for the restaurant name in the document if it is present or not. We are using the mock data for the props to test the component.
    const restaurant = {
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
    render(
        <Provider store={store}>
            <MemoryRouter>
                <Routes>
                    <Route path="/" element={<RestaurantCard props={restaurant} />} />
                    <Route path="/restaurant/:id" element={<Menu />} />
                </Routes>

            </MemoryRouter>
        </Provider>
    )

    const restaurantName = restaurant?.name;
    const restaurantNameElement = screen.getByText(restaurantName);
    expect(restaurantNameElement).toBeInTheDocument();


})

test("checking restaurant card with its HOC component", () => {

    const restaurant = {
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
    const RestuarantCardVeg = RestuarantCardHOC(RestaurantCard);
    render(
        <Provider store={store}>
            <BrowserRouter>
                {restaurant?.veg ? <RestuarantCardVeg props={restaurant} /> : <RestaurantCard props={restaurant} />}
            </BrowserRouter>
        </Provider>
    );

    const isvegLabel = screen.queryByText("Veg");
    expect(isvegLabel).not.toBeInTheDocument();
});
