import React, { createContext, useContext, useState } from 'react'

const StateContext = createContext()

// const initialState = {
//     basket: 
// }

export const ContextProvider = ({ children }) => {
    const [sidebar, setSidebar] = useState(false)
    const [screenSize, setScreenSize] = useState(undefined)
    const [openCart, setOpenCart] = useState(false)
    const [cartItem, setCartItem] = useState([])

    const handleAddToCart = (clickedItem) => setCartItem(prev => {

        const isItemInCart = prev.find(item => item.id === clickedItem.id)
        if (isItemInCart) {
            return prev.map(item => item.id === clickedItem.id ? { ...item, amount: item.amount + 1 } : item)
        }
        return [...prev, { ...clickedItem, amount: 1 }]
    })

    const handleRemoveFromCart = (clickedItem) => setCartItem(prev => {

        const isItemInCart = prev.find(item => item.id === clickedItem.id)
        if (isItemInCart) {
            return prev.map(item => item.id === clickedItem.id ? { ...item, amount: item.amount - 1 } : item)
        }
        return [...prev, { ...clickedItem, amount: 1 }]
    })

    const getTotalItem = (items) => items.reduce((ack, item) => ack + item.amount * item.price, 0)


   
    return (
        <StateContext.Provider value={{ sidebar, setSidebar, screenSize, setScreenSize, openCart, setOpenCart, cartItem, setCartItem, handleAddToCart, handleRemoveFromCart, getTotalItem }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)