import React from 'react'
import { RESTAURANT_IMAGE_URL } from '../../utils/constant';
import { useDispatch } from 'react-redux';
import { addItem } from '../../utils/slices/cartSlice';
const AccordianBody = (props) => {
  console.log(props);
  const dispatch = useDispatch();
  const onClickAdd = () => {
    console.log("clciked")
    dispatch(addItem(props?.card?.info));
   
 }
  return (
    <div className='flex  gap-4 p-10 justify-between mb-4'>
          
          <div>
              <h3 className='text-lg font-bold'>{props?.card.info.name}</h3>
              <p className='text-gray-600'>{props?.card.info.description}</p>
              <p className='text-gray-600'>{props?.card.info.price ? `₹ ${props?.card.info.price / 100}` : 'Price not available'}</p>
          </div>
           <div className='relative'>
    <img
      src={RESTAURANT_IMAGE_URL + props?.card.info.imageId}
      alt="food"
      className='w-90 h-40 object-cover rounded-lg'
    />

        <button className='absolute bottom-0 left-1/2 -translate-x-1/2 bg-green-500 text-white font-bold px-6 py-2 rounded-lg shadow-lg'
        
        onClick={onClickAdd}
        >
      Add+
    </button>
  </div>
    </div>
  )
}

export default AccordianBody