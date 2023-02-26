import React from "react";
import ReactDOM from "react-dom/client";

// const heading1 = React.createElement("h1",{id:"h1"},"Heading1")
// const heading2 = React.createElement("h2",{id:"h2"},"Heading2")
// const heading3 = React.createElement("h3",{id:"h3"},"Heading3")

const Heading1 = <h1 id="h1">Heading1</h1>
const Heading2 = <h1 id="h2">Heading2</h1>
const Heading3 = <h1 id="h3">Heading3</h1>

const Para =()=>{
    return(
        <p>This is Composition</p>
    )
}





const root = ReactDOM.createRoot(document.getElementById("root"))

// const container = React.createElement("div",{id:"container"},[heading1,heading2,heading3])


const Container = () =>{
    return(
        <div id="container">
            {Heading1}
            {Heading2}
            {Heading3}
            {/* {Para} This will Give The Error */}
            {<Para/>}
            {<Para>Where is this going to </Para>}

            
        </div>
    )

}


root.render(<Container/>)
