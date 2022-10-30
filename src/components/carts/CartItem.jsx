import { NumericFormat } from "react-number-format"
import "./CartItem.css"
import foodss from "../../data/foodss.png"
import { AiOutlineDelete } from "react-icons/ai"
import { useStateContext } from "../../context/ContextProvider"

const CartItem = ({item}) => {
    const { cartItem, handleAddToCart, handleRemoveFromCart } = useStateContext()
    // console.log(item)

  return (
    <div className="cart-item">
        <div className='items'>
            <div className='item-image'>
                  <img src={item.image} alt="" />
            </div>
            <div className="about-item">
                  <h2>{item.name}</h2>
                  <div className='item-amount'>
                    <span style={{marginRight:"10px"}}>price:</span>
                      <span>
                          <NumericFormat value={item.price} displayType={'text'} thousandSeparator={true} prefix="$" />
                      </span>
                  </div>
                  <div className='item-amount'>
                      <span style={{ marginRight: "10px" }}>total:</span>
                      <span>
                          <NumericFormat value={item.amount * item.price} displayType={'text'} thousandSeparator={true} prefix="$" />
                      </span>
                  </div>
            </div> 
        </div>
          <div className='cart-button'>
              <div>
                  <AiOutlineDelete />
                  <h3>Remove</h3>
              </div>
              <div>
                  <button onClick={() => handleRemoveFromCart(item)}>-</button>
                  <span>{item.amount}</span>
                  <button onClick={() => handleAddToCart(item)}>+</button>
              </div>
          </div>
    </div>
  )
}

export default CartItem