import { render , waitFor,fireEvent} from "@testing-library/react";
import store from "../../utils/store";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import RestroMenu from "../Restromenu"
import { MENU_DATA } from "../../mocks/data";
import "@testing-library/jest-dom"


global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json : ()=>{
            return Promise.resolve(MENU_DATA)
        },
    });
});


test("Cart update on adding item", async()=>{
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <RestroMenu/>
            </Provider>
        </StaticRouter>
    )

    await waitFor(()=>expect(body.getByTestId("menu")))

    const menu = body.getByTestId("menu")

    console.log(menu.children)


})