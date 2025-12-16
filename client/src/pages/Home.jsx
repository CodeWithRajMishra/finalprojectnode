import Carousel from 'react-bootstrap/Carousel';
import ban1 from "../images/ban1.jpeg";
import ban2 from "../images/ban2.webp";
import ban3 from "../images/ban3.jpeg";
import { useEffect, useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { addToCart } from '../cartSlice';
const Home=()=>{
  const [mydata, setMydata] = useState([]);
  const dispatch = useDispatch();

    const loadData = async()=>{
      let api=`${import.meta.env.VITE_BACKENDURL}/product/branddisplay`;  
      const response = await axios.get(api);
      console.log(response.data);
      setMydata(response.data);

    }

    useEffect(()=>{
      loadData();
    }, []);

    const ans= mydata.map((key)=>{
      return(
        <>
          <Card style={{ width: '18rem', marginTop:"20px" }}>
      <Card.Img variant="top" src={key.defaultImage} style={{height:"300px"}} />
      <Card.Body>
        <Card.Title>{key.name}</Card.Title>
        <Card.Text>
          Description : {key.description}
          <br/>
          <b>  For : {key.category} </b>
          <br/>
          <span style={{color:"green", fontWeight:"bold"}}> Price : {key.price}</span>
        </Card.Text>
        <Button variant="primary" onClick={()=>{dispatch(addToCart({id:key._id, name:key.name, description: key.description, category:key.category, price:key.price, image:key.defaultImage, qnty:1}))}}>Add to Cart</Button>
      </Card.Body>
    </Card>
        
        </>
      )
    })
   

  return(
        <>
        <Carousel>
      <Carousel.Item>
         <img src={ban1} className='banimg' />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={ban2}  className='banimg' />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={ban3}  className='banimg' />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
     <h1 className='heading'> Top Brands</h1>

        <div id='topbrands'>
          {ans}

        </div>

       
        </>
    )

  }

  


export default Home;