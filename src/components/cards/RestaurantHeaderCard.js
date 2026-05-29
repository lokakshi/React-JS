import React from 'react'
import { RESTAURANT_IMAGE_URL } from '../../utils/constant';
export const RestaurantHeaderCard = ({ restaurantInfo }) => {
    console.log(restaurantInfo);
    return (

      <div className="h-70 flex items-center p-4 gap-4">
          <img src={RESTAURANT_IMAGE_URL + restaurantInfo?.cloudinaryImageId} alt={restaurantInfo?.name} className="h-60 w-60 rounded-full" />
          <div >
              <h2 className="text-xl font-bold">{restaurantInfo?.name}</h2>
              <p className="text-gray-600">{restaurantInfo?.areaName}</p>
                <p className="text-gray-600">{restaurantInfo?.locality}</p>
                <p className="text-gray-600">{restaurantInfo?.avgRating} ⭐</p>
                <p className="text-gray-600">{restaurantInfo?.costForTwoMessage}</p>
                <p className="text-gray-600">{restaurantInfo?.cuisines?.join(", ")}</p>
          </div>
      </div>
  )
}
export default RestaurantHeaderCard;