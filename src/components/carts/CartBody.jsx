import { MdCall } from 'react-icons/md'
import { NumericFormat } from 'react-number-format'
import "./CartBody.css"
import CartItem from './CartItem'

const CartBody = () => {
  return (
    <div className='cart-component'>
        <div className='cart-total'>
              <h1 className='total-title'>Subtotal</h1>
              <NumericFormat value={20344} className="total-amount" displayType={'text'} thousandSeparator={true} prefix="$" />
        </div>
          <CartItem />
          <div className='cart-checkout'>
            <div className='icon'>
          <MdCall onClick={""} />
            </div>
        <button onClick={""}>CHECHOUT {" "} (<NumericFormat value={1000} displayType={'text'} thousandSeparator={true} prefix="$" />)</button>
          </div>
    </div>
  )
}

export default CartBody