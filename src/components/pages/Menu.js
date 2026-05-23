import { useEffect ,useState} from "react";
import { useParams } from "react-router-dom";
import { MENU_DATA_URL,RESTAURANT_IMAGE_URL } from "../../utils/constant";
import MenuCard from "../shimmer/MenuCard";


const Menu = () => {
    const [menu, setMenu] = useState([]);
    const [restaurantInfo, setRestaurantInfo] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    const getAllMenuForRestaurant = async () => {
        try {
            const response = await fetch(
                `${MENU_DATA_URL}${id}`
            );

            const json = await response.json();

            console.log(json?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
            setRestaurantInfo(json?.data.cards[2].card?.card?.info);
            setMenu(json?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
            setLoading(false);

        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getAllMenuForRestaurant();
    }, [id]);
 
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
                
                {loading ? (
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