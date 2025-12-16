import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { addToCart } from "../cartSlice";

const Header=()=>{
  const myData= useSelector(state=>state.mycart.cart);
  console.log(myData);
  const proLength= myData.length;
    return(
        <>
          <div id="header">
            <div></div>
            <div></div>
            <div>
                  {proLength}
                  <FaShoppingCart />
            </div>
          


          </div>
        </>
    )
}

export default Header;