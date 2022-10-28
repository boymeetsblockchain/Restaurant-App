import React from 'react'
import CartBody from './CartBody'
import "./CartComponent.css"
import CartHeader from './cartHeader'

const CartComponent = () => {
  return (
    <div className='carts'>
      <CartHeader />
      <CartBody />
    </div>
  )
}

export default CartComponent