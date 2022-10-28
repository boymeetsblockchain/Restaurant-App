import "./HomePage.css"
import Header from "../components/Header"
import FoodsComponent from "../components/FoodComponent"
import CartComponent from "../components/carts/CartComponent"
import Sidebar from '../components/Sidebar';
import Footer from "../components/Footer"
import { useStateContext } from '../context/ContextProvider';
import Banner from "../components/Banner";

function HomePage() {
  const { sidebar, openCart } = useStateContext()
  return (
    <>
      <div className='home-header'>
        {sidebar ? (
          <div className='sidebar'>
            <Sidebar />
          </div>
        ) : (
          ""
        )}
        {openCart ? (
          <div className='cart-components'>
            <CartComponent />
          </div>
        ) : (
          ""
        )}
        <Header />
        <Banner />
        <FoodsComponent />
        <Footer />
      </ div>
    </>
  )
}

export default HomePage