import React from 'react'
import { useStateContext } from '../../context/ContextProvider'
import CartBody from './CartBody'
import "./CartComponent.css"
import CartHeader from './cartHeader'

const CartComponent = () => {
  const { cartItem } = useStateContext()

  console.log(cartItem)


  return (
    <div className='carts'>
      <CartHeader />
      <CartBody />
    </div>
  )
}

export default CartComponent