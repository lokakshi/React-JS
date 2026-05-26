import  {useEffect,useState} from "react";
import { MENU_DATA_URL } from "./constant";
const useRestaurantMenu = (restaurantId) => {
    //fetch data from api and return restaurant info and menu

    // HERE WE ARE USING USESTATE TO STORE THE RESTAURANT INFO AND MENU DATA AND USEEFFECT TO FETCH THE DATA FROM API WHEN THE COMPONENT MOUNTED
    const [restaurantInfo, setRestaurantInfo] = useState([]);
    const [menu, setMenu] = useState([]);
    const fetchData= async (restaurantId)=>{
        const data = await fetch( `${MENU_DATA_URL}${restaurantId}`)
        const json = await data.json();
        setRestaurantInfo(json?.data.cards[2].card?.card?.info);
        setMenu(json?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
    }
    useEffect(()=>{
        fetchData(restaurantId);
    },[]);


    return { restaurantInfo, menu };
}

export default useRestaurantMenu;