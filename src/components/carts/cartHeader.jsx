import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../../context/ContextProvider";
import "./cartHeader.css"

const CartHeader = () => {
    const { setOpenCart } = useStateContext()

  return (
    <div className="carts-header">
      <span><AiOutlineClose onClick={() => setOpenCart(false)} /></span>
          <div>
            <h1>Carts</h1>
          </div>
    </div>
  )
}

export default CartHeader