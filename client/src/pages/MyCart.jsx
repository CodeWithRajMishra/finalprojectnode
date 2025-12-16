import { useDispatch, useSelector } from "react-redux";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { FaPlusSquare } from "react-icons/fa";
import { FaSquareMinus, FaSquarePlus } from "react-icons/fa6";
import { qntyInc } from "../cartSlice";
const MyCart=()=>{
    const myData= useSelector(state=>state.mycart.cart);
    const dispatch= useDispatch();

     const ans=myData.map((key)=>{
         return(
            <>
               <tr>
                <td> <img src={key.image} style={{width:"100px", height:"100px"}} /> </td>
                <td> {key.name} </td>
                <td>{key.category}</td>
                <td>{key.description}</td>
                <td>{key.price}</td>
                <td style={{fontSize:"20px", fontWeight:"bold"}}>
                     <FaSquareMinus />
                    {key.qnty}
                    <FaSquarePlus onClick={()=>{dispatch(qntyInc({id:key.id}))}} />
                   
                </td>
                <td> {key.price * key.qnty} </td>
                <td> 
                  <Button variant="primary">Remove</Button>
                </td>
               </tr>
            
            </>
         )
     })

    return(
        <>
           <h1> My Cart Data</h1>
            <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Product Name</th>
          <th>Category</th>
          <th>Decription</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total Amount</th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
      {ans}
      </tbody>
</Table>

        </>
    )
}

export default MyCart;