import useGrocery from "../../utils/useGrocery";
import GroceryCard from "../cards/GroceryCard";
const Grocery = () => {
    const grocery = useGrocery();
    return (
        <div className="grocery-container">
            <h1>{grocery?.header?.title}</h1>
            <h2>{grocery?.header?.subtitle}</h2>
            <div className="grocery-body-container">
            {grocery?.gridElements?.infoWithStyle?.items?.map((item) => {
                return <GroceryCard key={item?.variations[0]?.skuId} props={item}/>
            })}
            </div>

        </div>
    )
}

export default Grocery;