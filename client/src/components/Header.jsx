import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { addToCart } from "../cartSlice";
import { useNavigate } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import { FaUserCircle } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
const Header=()=>{
  const myData= useSelector(state=>state.mycart.cart);
  console.log(myData);
  const proLength= myData.length;
  const navigate = useNavigate();

  const logout=()=>{
      localStorage.clear();
      navigate("/home");
  }


  return(
        <>
          <div id="header">
            <div></div>
            <div style={{width:"85%", textAlign:"right"}}>

               
                  <Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        <FaUserCircle />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Welcome {localStorage.getItem("user")}</Dropdown.Item>
        <Dropdown.Item  onClick={logout}>Logout!</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

              

            </div>
            <div>


                  <FaRegUserCircle style={{marginRight:"20px", cursor:"pointer"}}
                  onClick={()=>{navigate("/login")}} />

                  {proLength}
                  <FaShoppingCart style={{cursor:"pointer"}} onClick={()=>{navigate("/mycart")}} />
            </div>
          </div>
        </>
    )
}
export default Header;