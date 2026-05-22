const ShimmerCards=()=>{
    return (
        <div className="shimmer-cards">
            {Array(10).fill("").map((e,index)=><div key={index} className="shimmer-card"></div>)}
        </div>
    )
}
export default ShimmerCards;