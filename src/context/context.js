import React, { createContext } from "react";

const AppContext = createContext({
    username: '',
    setUserName: () => { }
})

export default AppContext