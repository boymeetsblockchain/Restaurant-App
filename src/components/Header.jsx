import { GiHamburgerMenu } from "react-icons/gi"
import { Link, useNavigate } from "react-router-dom";
import "./Header.css"
import { useStateContext } from "../context/ContextProvider"
import logo from "../data/logo.png"
import { BsFillCartPlusFill, BsPersonFill } from "react-icons/bs";

const Header = () => {
  const { setSidebar, setOpenCart, cartItem } = useStateContext()
  const navigate = useNavigate();

  // console.log(cartItem.length)

  const onClick = () => {
    navigate('/signup')
  }
  return (
    <div className="header">
      <div className="header-items">
        {/* <GiHamburgerMenu onClick={() => setSidebar(true)} style={{ cursor: "pointer" }} /> */}
        <Link to="/"><img src={logo} alt="" className="logo" /></Link>
        <div className="header-right">
          <div className="cart" onClick={() => setOpenCart(true)}>
          <BsFillCartPlusFill />
          <span>{cartItem.length}</span>
          </div>
          <BsPersonFill className="cart" style={{cursor:"pointer"}} onClick={onClick} />
        </div>
      </div>
    </div>
  )
}

export default Header