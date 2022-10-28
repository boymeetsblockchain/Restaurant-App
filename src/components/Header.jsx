import { GiHamburgerMenu } from "react-icons/gi"
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as PersonOutlineIcon } from "../assets/svg/personOutlineIcon.svg";
import "./Header.css"
import { useStateContext } from "../context/ContextProvider"
import logo from "../data/logo.png"
import { BsFillCartPlusFill } from "react-icons/bs";

const Header = () => {
  const { setSidebar, setOpenCart } = useStateContext()
  const navigate = useNavigate();

  const onClick = () => {
    navigate('/signup')
  }
  return (
    <div className="header">
      <div className="header-items">
        <GiHamburgerMenu onClick={() => setSidebar(true)} style={{ cursor: "pointer" }} />
        <Link to="/"><img src={logo} alt="" className="logo" /></Link>
        <div className="header-right">
          <div className="cart" onClick={() => setOpenCart(true)}>
          <BsFillCartPlusFill />
          <span>0</span>
          </div>
          <PersonOutlineIcon style={{cursor:"pointer"}} onClick={onClick} />
        </div>
      </div>
    </div>
  )
}

export default Header