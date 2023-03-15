const Shimmer= () =>(
    <>
    <div className="restaurantlists">
        {Array(12).fill("").map((e,index)=><div key={index} className="shimmerbox"></div>)}
    </div>
    </>
)

export default Shimmer