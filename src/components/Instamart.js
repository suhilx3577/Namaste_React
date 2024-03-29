import { useState } from "react";

const Section =({title,desc,isVisible,setIsVisible}) =>{
    return(
        <div className="border border-black p-2 m-2">
        <h1 className="text-lg font-bold">{title}</h1>
        {
            isVisible ? 
            <>
            <button
            onClick={setIsVisible}>hide</button>
            <p>{desc}</p>
            </>
            :
            <>
            <button
            onClick={setIsVisible}>show</button>
            </>
        }
        </div>
    )
}



const Instamart =()  =>{
    const [visibleSec, setVisibleSec] = useState("About")
    return(
        <div >
            <Section 
            title={"About"}
            desc={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatu"}
            isVisible={visibleSec==="About"}
            setIsVisible={()=>
                visibleSec==="About"? 
                setVisibleSec("")
                :
                setVisibleSec("About")}
            />
            <Section 
            title={"Career"}
            desc={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatu"}
            isVisible={visibleSec==="Career"}
            setIsVisible={()=>
                visibleSec==="Career"?
                setVisibleSec(""):
                setVisibleSec("Career")}
            />
            <Section 
            title={"Products"}
            desc={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatu"}
            isVisible={visibleSec==="Products"}
            setIsVisible={()=>
                visibleSec==="Products"?
                setVisibleSec(""):
                setVisibleSec("Products")}
            />
        </div>
    )
}

export default Instamart;