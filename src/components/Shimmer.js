const Shimmer= () =>(
    <>
    <div className="bg-purple-200 flex flex-wrap overflow-hidden gap-4 justify-between">
        {Array(15).fill("").map((e,index)=><div key={index}
        className="w-52 h-52 bg-pink-200 mt-2"
        ></div>)}
    </div>
    </>
)

export default Shimmer