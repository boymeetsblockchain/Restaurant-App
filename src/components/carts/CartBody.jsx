import { MdCall } from 'react-icons/md'
import { NumericFormat } from 'react-number-format'
import { useStateContext } from '../../context/ContextProvider'
import "./CartBody.css"
import CartItem from './CartItem'

const CartBody = () => {
  const { cartItem, getTotalItem } = useStateContext()

  return (
    <div className='cart-component'>
        <div className='cart-total'>
              <h1 className='total-title'>Subtotal</h1>
        <NumericFormat value={getTotalItem(cartItem)} className="total-amount" displayType={'text'} thousandSeparator={true} prefix="$" />
        </div>
      <h4 className="cart-number">Cart({cartItem.length})</h4>
      {cartItem.map((item) => (
        // console.log(item)
          <CartItem key={item.id} item={item} />
        ))}
          <div className='cart-checkout'>
            <div className='icon'>
          <MdCall onClick={""} />
            </div>
        <button onClick={""}>CHECHOUT {" "} (<NumericFormat value={getTotalItem(cartItem)} displayType={'text'} thousandSeparator={true} prefix="$" />)</button>
          </div>
    </div>
  )
}

export default CartBody