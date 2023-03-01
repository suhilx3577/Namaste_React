import  ReactDOM  from "react-dom/client"
import logo from "./logo.png"
import user from "./usericon.png"

const root =  ReactDOM.createRoot(document.getElementById("root"))

const Logo = ()=>{
    return(
            <div className="left">
                <img src={logo} alt="image" width="80px" height="80px"/>
            </div>
    )
}   
const Search =() =>{
    return(
        <div className="center">
            <input type="search" placeholder="Search here"></input>
        </div>

    )
}
const Icon =()=>{
    return(
        <div className="right">
            <img src={user} alt="icon" width="100px" height="100px"/>
        </div>
    )
}

const HeaderComp =()=>{
    return(
        <header>
            <div className="container">
                <Logo/>
                <Search/>
                <Icon/>
            </div>
        </header>
    )
}

const Heading = <h1>Header</h1>
const Navbar =()=>{
    return(
        <>
        <HeaderComp/>
        </>
    )
} 


root.render(<Navbar/>)