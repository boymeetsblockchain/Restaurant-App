import { MdOutlineKeyboardBackspace } from "react-icons/md"
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../../context/ContextProvider";
import "./cartHeader.css"

const CartHeader = () => {
    const { setOpenCart } = useStateContext()

  return (
    <div className="carts-header">
          <MdOutlineKeyboardBackspace onClick={() => setOpenCart(false)}/>
          <h1>Carts</h1>
    </div>
  )
}

export default CartHeader