import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom";
import BodyComponent from "../src/components/BodyComponent";
import { BrowserRouter } from "react-router-dom";
import { transform } from "@babel/core";

// now this will replace the DOM fetch with our custom 
global.fetch = jest.fn(() => {

    return Promise.resolve({
        json: () => {
            return Promise.resolve({
                "status": true,
                "message": "Restaurant List fetched successfully",
                "data": {
                    "data": {
                        "cards": [
                            {},
                            {
                                "card": {
                                    "card": {
                                        "gridElements": {
                                            "infoWithStyle": {
                                                "restaurants": [
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
                                            }
                                        }
                                    }
                                }
                            }
                        ]
                    }
                }
            });
        }
    })
});
test("we will test the search functionality so we need entire body Component", async () => {
    // Since the body component has API calls and we render it on jsDOM so it doesn't know fetch.
    // fetch is given to us by browser but jsDOM doesn't have fetch so we need to mock the fetch function and we will use jest.fn() to mock the fetch function and we will return a promise that resolves to an object with a json method that returns the restaurant data. We will also mock the useRestaurant hook to return the restaurant data and the filtered restaurant data. We will also mock the useOnlineStatus hook to return true so that we can test the search functionality. We will also mock the userContext to return the theme as light so that we can test the search functionality. After mocking all these things we will render the body component and we will get the search button using screen.getByRole and we will check if the search button is in the document or not.
    // when we are doing a state update in the body component then we need to use act() method to update the state and then we can check for the search button in the document. We will also check for the restaurant name in the document after searching for it. We will also check for the filtered restaurant name in the document after searching for it. We will also check for the no restaurant found message in the document after searching for a restaurant that is not present in the restaurant data.
    await act(async () => render(<BrowserRouter><BodyComponent /></BrowserRouter>));
    // when we use act we make test as a async function and we need to await the act method to update the state and then we can check for the search button in the document. We will also check for the restaurant name in the document after searching for it. We will also check for the filtered restaurant name in the document after searching for it. We will also check for the no restaurant found message in the document after searching for a restaurant that is not present in the restaurant data.
    const searchBtn = screen.getByRole("button", { name: "Search" });

    expect(searchBtn).toBeInTheDocument();
    // now since we have body component now we will try to write something on the input and click on search button and then we will check for the restaurant name in the document after searching for it. We will also check for the filtered restaurant name in the document after searching for it. We will also check for the no restaurant found message in the document after searching for a restaurant that is not present in the restaurant data.
    const searchInput = screen.getByPlaceholderText("Search for restaurants");
    // now we will change the value of the search input and then we will click on the search button and then we will check for the restaurant name in the document after searching for it. We will also check for the filtered restaurant name in the document after searching for it. We will also check for the no restaurant found message in the document after searching for a restaurant that is not present in the restaurant data.
    fireEvent.change(searchInput, { target: { value: "Pizza Paradise" } });
    fireEvent.click(searchBtn);
    const filteredRestaurantName = screen.getByText("Pizza Paradise");
    expect(filteredRestaurantName).toBeInTheDocument();

});