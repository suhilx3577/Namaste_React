import {Body} from "../Body"
import { fireEvent, render , waitFor} from "@testing-library/react"
import { Provider } from "react-redux"
import { StaticRouter } from "react-router-dom/server"
import store from "../../utils/store"
import {REST_DATA} from "../../mocks/data"

import "@testing-library/jest-dom"


global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json :  () =>{
           return Promise.resolve(REST_DATA)
        },
    });
})

test("Shimmer To Load on HomePage",()=>{
    
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body/>
            </Provider>
        </StaticRouter>
    );

    // console.log(body)
    const shimmer = body.getByTestId("shimmer");
    expect(shimmer.children.length).toBe(15);

})


test("Restro To Load on HomePage", async()=>{
    
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body/>
            </Provider>
        </StaticRouter>
    );

    await waitFor(()=>expect(body.getByTestId("search-btn")));

    const reslist = body.getByTestId("resList");

    expect(reslist.children.length).toBe(15);


})


test("search for string(food) on home page",async ()=>{

    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body/>
            </Provider>
        </StaticRouter>
    )

    await waitFor(()=>expect(body.getByTestId("search-btn")));

    const input = body.getByTestId("searchinput")

    fireEvent.change(input,{
        target:{
            value:"a",
        },
    })

    const searchBtn = body.getByTestId("search-btn")
    fireEvent.click(searchBtn);

    const resList = body.getByTestId("resList")

    expect(resList.children.length).toBe(10);


})