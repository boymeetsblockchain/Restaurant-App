import React, { createContext, useContext, useState } from 'react'

const StateContext = createContext()

export const ContextProvider = ({ children }) => {
    const [sidebar, setSidebar] = useState(false)
    const [screenSize, setScreenSize] = useState(undefined)
    const [openCart, setOpenCart] = useState(false)

   
    return (
        <StateContext.Provider value={{ sidebar, setSidebar, screenSize, setScreenSize, openCart, setOpenCart }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)