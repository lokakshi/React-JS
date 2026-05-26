const GroceryCard = ({props}) => {
   console.log(props)
    return (
        <div className="grocery-card-container">
            <img className="grocery-card-img" src={"https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200/"+props?.variations[0]?.imageIds[0]} alt="grocery"/>
            <div className="grocery-card-details">
                <h3>{props?.displayName}</h3>
                <p>{props.variations[0].quantityDescription}</p>
                <p>₹{props?.variations[0]?.price.mrp.units}</p>
            </div>
            
        </div>
    )
}

export default GroceryCard;