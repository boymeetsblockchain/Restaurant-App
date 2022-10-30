import "./FoodComponent.css"
import FoodItem from "./FoodItem"
import { AiTwotoneStar } from "react-icons/ai"
import food from "../data/food.jpeg"
import foodss from "../data/foodss.png"
import mqdefault from "../data/mqdefault.png"
import OkraSoup from "../data/nutrition.png"
import nutrition from "../data/OkraSoup.png"


const FoodsComponent = () => {
  return (
    <main className='food-component'>
        <div className='title'>
            <h2>Popular food</h2>
            <span>See more</span>
        </div>
        <div className="food-list">
        <FoodItem icon={<AiTwotoneStar />} rate={3.5} image={foodss} price={2400} name="vegetable and akpu" id={1}/>
        <FoodItem icon={<AiTwotoneStar />} rate={4.8} image={mqdefault} price={1400} name=" Vegetable Sauce" id={2} />
        <FoodItem icon={<AiTwotoneStar />} rate={4.1} image={OkraSoup} price={2000} name="fruit salad" id={3} />
        <FoodItem icon={<AiTwotoneStar />} rate={3.9} image={nutrition} price={4300} name="okro and akpu" id={4} />
            
        </div>
    </main>
  )
}

export default FoodsComponent