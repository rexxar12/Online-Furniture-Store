import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import { Row,Col } from 'react-bootstrap';

function ProductCard({item}) {
  return (

        <Col lg="3" md="4">
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={item.path} />
            <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                    {item.category}
                    {item.price}

                </Card.Text> 
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
            </Col>
  );
}

export default ProductCard;