import { NumericFormat } from 'react-number-format';
import { BsFillCartPlusFill } from "react-icons/bs"
import "./FoodItem.css"
import { useStateContext } from '../context/ContextProvider';
import { useNavigate } from 'react-router-dom';

const FoodItem = ({ icon, image, amount, rate, name, id, price }) => {
  const { setCartItem, handleAddToCart } = useStateContext()

const navigate = useNavigate()

  const item = {
      image,  
      rate, 
      name, 
      id, 
      amount,
      price,
    }

  return (
    <div className='food-items'>
      <div className='food-rating'>
        <span style={{ color: "#d1681d" }}>{icon}</span>
        <h4>{rate}</h4>
      </div>
      <div className='image-container'>
        <img src={image} className="food-image" alt="" />
      </div>
      <h2 className='food-name'>{name}</h2>
      <div className='food-amount'>
        <span>
          <NumericFormat value={price} displayType={'text'} thousandSeparator={true} prefix="$" />
        </span>
        <BsFillCartPlusFill style={{ cursor: "pointer" }} onClick={() => handleAddToCart(item)}/>
      </div>

    </div>
  )
}

export default FoodItem