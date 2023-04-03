import { createContext } from "react";

const userContext = createContext(
    {
        user:{
            name:"dummyName",
            email:"dummyName@gmail.com"

        },
    }
)

export default userContext;