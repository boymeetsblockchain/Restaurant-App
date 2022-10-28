import { NumericFormat } from "react-number-format"
import "./CartItem.css"
import foodss from "../../data/foodss.png"
import { AiOutlineDelete } from "react-icons/ai"

const CartItem = () => {
  return (
    <div className="cart-item">
        <h4 className="cart-number">Cart(0)</h4>
        <div className='items'>
            <div className='item-image'>
                  <img src={foodss} alt="" />
            </div>
            <div className="about-item">
                  <h2>vegetable and akpu</h2>
                  <div className='item-amount'>
                      <span>
                          <NumericFormat value={1000} displayType={'text'} thousandSeparator={true} prefix="$" />
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
                  <button>-</button>
                  <span>1</span>
                  <button>+</button>
              </div>
          </div>
    </div>
  )
}

export default CartItem