import { useEffect ,useState} from "react";
import { useParams } from "react-router-dom";
import { MENU_DATA_URL,RESTAURANT_IMAGE_URL } from "../../utils/constant";
import MenuCard from "../shimmer/MenuCard";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import RestaurantHeaderCard from "../cards/RestaurantHeaderCard";
import Accordian from "../Accordian/Accordian";
const Menu = () => {
    const { id } = useParams();
    const { restaurantInfo, menu } = useRestaurantMenu(id);
    const [showIndex, setShowIndex] = useState(0);
    // this is the custom hook which we created to fetch the restaurant info and menu data from api and return it to the component and we are using it here to get the restaurant info and menu data and display it in the component
    const category = menu?.filter((item) => item?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
   

 
    return (
        <>
            <RestaurantHeaderCard restaurantInfo={restaurantInfo} />
            {
                category?.map((item,index) => {
                    return (<Accordian key={index} props={item?.card?.card} show={showIndex === index} setShowIndex={setShowIndex} index={index}/>)
                 })
            }

        </>
    );
};

export default Menu;