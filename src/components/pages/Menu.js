import { useEffect ,useState} from "react";
import { useParams } from "react-router-dom";
import { MENU_DATA_URL,RESTAURANT_IMAGE_URL } from "../../utils/constant";
import MenuCard from "../shimmer/MenuCard";
import useRestaurantMenu from "../../utils/useRestaurantMenu";

const Menu = () => {
    const { id } = useParams();
    const {restaurantInfo, menu} = useRestaurantMenu(id);
    // this is the custom hook which we created to fetch the restaurant info and menu data from api and return it to the component and we are using it here to get the restaurant info and menu data and display it in the component
   

 
    return (
        <div>
            <div className="restaurant--container-info">
    <img
        src={RESTAURANT_IMAGE_URL + restaurantInfo?.cloudinaryImageId}
        alt="restaurant"
        className="restaurant-menu-image-logo"
    />

    <div className="restaurant-details">
        <h1 className="restaurant-name">{restaurantInfo?.name}</h1>

        <p className="restaurant-cuisines">
            {restaurantInfo?.cuisines?.join(", ")}
        </p>

        <p className="menu-restaurant-rating">
            ⭐ {restaurantInfo?.avgRating}
        </p>
    </div>
</div>
            <div className="restaurant-menu-container">
                
                {menu.length === 0 ? (
                    <MenuCard />
                ) : (
                    <ul className="menu-list">
                        {menu.map((item) => (
                            <li key={item.card.info.id} className="menu-item">
                            <div className="menu-item-conatiner">
                                <img
                                    src={RESTAURANT_IMAGE_URL + item.card.info.imageId}
                                    alt={item.card.info.name}
                                    className="menu-item-image"
                                />
                                <div className="menu-item-description">
                                <h3 className="menu-item-name">{item.card.info.name}</h3>
                               <p className="menu-item-price">
                                ₹{item.card.info.price / 100}
                                </p>
                                <p className="menu-item-description">{item.card.info.description}</p>
                                </div>
                                  <button className="add-btn">ADD</button>
                            </div>
                          
                            </li>
                        ))}


                    </ul>
                )}
            </div>
        </div>
    );
};

export default Menu;