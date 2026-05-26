
import { GROCERY_DATA_URL } from "./constant";
import { useEffect, useState } from "react";
const useGrocery = () => {
    const [grocery, setGrocery] = useState([]);

    const getGroceryData = async () => {

        const data = await fetch(GROCERY_DATA_URL);
        const json = await data.json();
        setGrocery(json?.data?.cards[0]?.card.card);
        console.log(json?.data?.cards[0]?.card.card);
    }
    useEffect(()=>{
        getGroceryData();
    },[])


    return grocery;
}

export default useGrocery;