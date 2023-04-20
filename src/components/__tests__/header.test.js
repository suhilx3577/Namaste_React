import {Heading} from "../Header"
import {render} from "@testing-library/react"
import { Provider } from "react-redux"
import store from "../../utils/store"
import {StaticRouter} from "react-router-dom/server"


test("Logo should load on Rendering the Header",()=>{
    const header = render(
    <StaticRouter>
        <Provider store = {store}>
            <Heading/>
        </Provider>
    </StaticRouter>
    )
    const logo =header.getByTestId("logo");
    expect(logo.src).toBe("http://localhost/dummy.png")

})

test("status to be online on loading the header",()=>{
    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Heading/>
            </Provider>
        </StaticRouter>
    )
    const status = header.getByTestId("status")
    // console.log(status)
    expect(status.innerHTML).toBe("Online")
})

test("Cart Should be 0 on rendering our header",()=>{

    const header = render(
    <StaticRouter>
        <Provider store={store}>
            <Heading/>
        </Provider>
    </StaticRouter>
    )

    const cart =  header.getByTestId("cart-item")
    expect(cart.innerHTML).toBe("CART -0")
})