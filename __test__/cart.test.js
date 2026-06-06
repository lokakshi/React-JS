import HeaderComponent from "../src/components/HeaderComponent";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../src/utils/store/store";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Menu from "../src/components/pages/Menu";
import { act } from "react-dom/test-utils";
global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => Promise.resolve({
            "status": true,
            "message": "Restaurant Menu fetched successfully",
            "data": {
                "cards": [
                    {},
                    {},
                    {
                        "card": {
                            "card": {
                                "info": {
                                    "id": "123456",
                                    "name": "Pizza Paradise",
                                    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/17/6def0f0f-9e6c-45c0-b5e6-05af750f27b5_795906.JPG",
                                    "locality": "MG Road",
                                    "areaName": "Central District",
                                    "costForTwo": "₹400 for two",
                                    "costForTwoMessage": "₹400 for two",
                                    "cuisines": [
                                        "Pizza",
                                        "Italian",
                                        "Fast Food"
                                    ],
                                    "avgRating": 4.3,
                                    "avgRatingString": "4.3",
                                    "totalRatingsString": "10K+ ratings",
                                    "sla": {
                                        "deliveryTime": 30,
                                        "lastMileTravel": 3.5,
                                        "lastMileTravelString": "3.5 km",
                                        "slaString": "30 mins"
                                    }
                                }
                            }
                        }
                    },
                    {},
                    {
                        "groupedCard": {
                            "cardGroupMap": {
                                "REGULAR": {
                                    "cards": [
                                        {},
                                        {
                                            "card": {
                                                "card": {
                                                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                                                    "title": "Recommended",
                                                    "itemCards": [
                                                        {
                                                            "card": {
                                                                "info": {
                                                                    "id": "item_001",
                                                                    "name": "Margherita Pizza",
                                                                    "category": "Pizza",
                                                                    "description": "Classic delight with 100% real mozzarella cheese, fresh tomatoes, and basil",
                                                                    "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/5/23/754c1beb-c413-4fc9-b141-d3680387b462_b553356f-7a27-477f-be6e-f6b9ec3a8bdb.jpg",
                                                                    "price": 29900,
                                                                    "defaultPrice": 29900
                                                                }
                                                            }
                                                        },
                                                        {
                                                            "card": {
                                                                "info": {
                                                                    "id": "item_002",
                                                                    "name": "Pepperoni Pizza",
                                                                    "category": "Pizza",
                                                                    "description": "American classic with spicy pepperoni slices and extra cheese",
                                                                    "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/5/23/754c1beb-c413-4fc9-b141-d3680387b462_b553356f-7a27-477f-be6e-f6b9ec3a8bdb.jpg",
                                                                    "price": 39900
                                                                }
                                                            }
                                                        },
                                                        {
                                                            "card": {
                                                                "info": {
                                                                    "id": "item_003",
                                                                    "name": "Veggie Supreme",
                                                                    "category": "Pizza",
                                                                    "description": "Loaded with fresh vegetables including bell peppers, onions, tomatoes, and olives",
                                                                    "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/5/23/754c1beb-c413-4fc9-b141-d3680387b462_b553356f-7a27-477f-be6e-f6b9ec3a8bdb.jpg",
                                                                    "price": 34900,
                                                                    "defaultPrice": 34900
                                                                }
                                                            }
                                                        }
                                                    ]
                                                }
                                            }
                                        },
                                        {
                                            "card": {
                                                "card": {
                                                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                                                    "title": "Specialty Pizzas",
                                                    "itemCards": [
                                                        {
                                                            "card": {
                                                                "info": {
                                                                    "id": "item_004",
                                                                    "name": "BBQ Chicken Pizza",
                                                                    "category": "Pizza",
                                                                    "description": "Grilled chicken with tangy BBQ sauce, onions, and cheese",
                                                                    "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/5/23/754c1beb-c413-4fc9-b141-d3680387b462_b553356f-7a27-477f-be6e-f6b9ec3a8bdb.jpg",
                                                                    "price": 44900
                                                                }
                                                            }
                                                        },
                                                        {
                                                            "card": {
                                                                "info": {
                                                                    "id": "item_005",
                                                                    "name": "Hawaiian Pizza",
                                                                    "category": "Pizza",
                                                                    "description": "Tropical delight with ham, pineapple, and mozzarella cheese",
                                                                    "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/5/23/754c1beb-c413-4fc9-b141-d3680387b462_b553356f-7a27-477f-be6e-f6b9ec3a8bdb.jpg",
                                                                    "price": 42900,
                                                                    "defaultPrice": 42900
                                                                }
                                                            }
                                                        }
                                                    ]
                                                }
                                            }
                                        },
                                        {
                                            "card": {
                                                "card": {
                                                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                                                    "title": "Beverages",
                                                    "itemCards": [
                                                        {
                                                            "card": {
                                                                "info": {
                                                                    "id": "item_006",
                                                                    "name": "Coca Cola",
                                                                    "category": "Beverages",
                                                                    "description": "Chilled 500ml Coca Cola",
                                                                    "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/5/23/754c1beb-c413-4fc9-b141-d3680387b462_b553356f-7a27-477f-be6e-f6b9ec3a8bdb.jpg",
                                                                    "price": 5900,
                                                                    "defaultPrice": 5900
                                                                }
                                                            }
                                                        }
                                                    ]
                                                }
                                            }
                                        }
                                    ]
                                }
                            }
                        }
                    }
                ]
            }
        })
    })

});
test("should display the correct number of items in the cart", async () => {
    // we will first render our header component
    await act(async () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <Menu />
                    <HeaderComponent />
                </BrowserRouter>
            </Provider>
        )
    })


    const cartCountElement = screen.getByText("0"); // Assuming the cart is initially empty
    expect(cartCountElement).toBeInTheDocument();
    const hotelNameElement = await screen.findByText("Pizza Paradise");

    const margheritaPizzaElement = await screen.findByText("Margherita Pizza");


    // Now we will click on the add to cart button for the Margherita Pizza and then we will check for the cart count element in the document after clicking on the add to cart button. We will also check for the cart count element in the document after clicking on the add to cart button for the Pepperoni Pizza and then we will check for the cart count element in the document after clicking on the add to cart button for the Veggie Supreme and then we will check for the cart count element in the document after clicking on the add to cart button for the BBQ Chicken Pizza and then we will check for the cart count element in the document after clicking on the add to cart button for the Hawaiian Pizza and then we will check for the cart count element in the document after clicking on the add to cart button for the Coca Cola.
    const addToCartButtons = screen.getAllByText("Add+");
    fireEvent.click(addToCartButtons[0]); // Click on the add to cart button for Margherita Pizza
    let cartCountElementAfterFirstAdd = screen.getByText("1");
    expect(cartCountElementAfterFirstAdd).toBeInTheDocument();



})