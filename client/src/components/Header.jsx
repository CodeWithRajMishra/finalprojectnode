import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { addToCart } from "../cartSlice";
import { useNavigate } from "react-router-dom";
const Header=()=>{
  const myData= useSelector(state=>state.mycart.cart);
  console.log(myData);
  const proLength= myData.length;
  const navigate = useNavigate();
    return(
        <>
          <div id="header">
            <div></div>
            <div></div>
            <div>
                  {proLength}
                  <FaShoppingCart style={{cursor:"pointer"}} onClick={()=>{navigate("/mycart")}} />
            </div>
          </div>
        </>
    )
}
export default Header;