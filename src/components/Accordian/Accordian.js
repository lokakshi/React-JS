import AccordianBody from "./AccordianBody";
import { useState } from "react";
const Accordian = ({ props,show ,setShowIndex,index}) => {
//   here we made Accordian as controlled component and we are passing the show and setShowIndex as props from the parent component and we are using it to show and hide the AccordianBody component when we click on the button and we are also passing the index of the Accordian component to the parent component so that we can compare it with the showIndex state in the parent component and show or hide the AccordianBody component accordingly
    return (
        <>
        <div className="flex justify-between items-center p-2 border border-gray-300 rounded-lg m-4">
            <h2 className="text-xl font-bold">{props?.title}</h2>
            <button className="px-4 py-2" onClick={()=>setShowIndex(index)}>{show ? '⬆️' : '⬇️'}</button>
        </div>
            { show && props?.itemCards?.length > 0 && props.itemCards.map((item) => <AccordianBody key={item.card.info.id} {...item} />) }
          
        </>
    );
     
}

export default Accordian;