import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../reduxStore/actions';
import Navbar from '../Navigation/Navigation';
import Carousel from 'react-bootstrap/Carousel';
import { Container, Col, Row } from "react-bootstrap";
import { data } from "./data";
import './home.css'
import Services from './Services';
import ProductList from '../ProductList/ProductList';


const Customer = () => {
    //logout logic
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
      const hist=window.history.state;
      window.history.replaceState(hist,"","/");
      dispatch(logout());
      navigate('/');
    };

    console.log(sessionStorage.getItem("id"));
  return (
   <>
    <Navbar/>
    <div className='below-nav'>
    <div>
      <Carousel className='align-items-center justify-content-center carousel '>
      <Carousel.Item>
        <a href='/products'>
        <img
          className="d-block w-100 carousel"
          src={require("./Images/banner1.jpg")}
          alt="First slide"
        />
        </a>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel"
          src={require("./Images/banner3.png")}
          alt="Third slide"
        />
        </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel"
          src={require("./Images/banner4.png")}
          alt="Third slide"
        />
        </Carousel.Item>
      </Carousel>
    </div>
    <Services/>



    </div>
    </>
  );
}

export default Customer;
    // <div className="trending_products">
    //   <section>
    //   <Container>
    //     <Row>
    //       <Col lg="12" className="text-center">
    //       <h2>Trending Prodcuts</h2>
    //       <Row className='mt-5'>
    //           <ProductList data={data}/>
    //       </Row>
    //       </Col>
    //     </Row>
    //   </Container>
    //   </section>
    // </div>