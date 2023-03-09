import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import { Row,Col } from 'react-bootstrap';
import ProductCard from './ProductCard';

function ProductList({data}) {
  return (
    <>
    {
        data.map((item)=>(
            <ProductCard item={item}/>
        ))
    }
    </>
  );
}

export default ProductList;