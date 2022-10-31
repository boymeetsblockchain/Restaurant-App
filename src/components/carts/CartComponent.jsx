import React from 'react'
import { BsFillCartPlusFill } from 'react-icons/bs'
import { useStateContext } from '../../context/ContextProvider'
import CartBody from './CartBody'
import "./CartComponent.css"
import CartHeader from './cartHeader'

const CartComponent = () => {
  const { cartItem, setOpenCart } = useStateContext()


  return (
    <div className='carts'>
      <CartHeader />
      {cartItem.length === 0? 
      (<div className='empty-cart'>
          <div className='cart-icon'>
            <div><BsFillCartPlusFill /></div>
          </div>
          <h1>Your Cart is empty</h1>
          <button onClick={() => setOpenCart(false)}>start ordering</button>
      </div>) : (
          <CartBody />
      ) }
    </div>
  )
}

export default CartComponent