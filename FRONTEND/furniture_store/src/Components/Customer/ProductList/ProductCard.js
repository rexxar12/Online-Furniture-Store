import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import { Row,Col } from 'react-bootstrap';
import Btnn from '../AddCart/AddToCart' 
import {motion} from 'framer-motion';


function ProductCard({item}) {
  return (

        <Col lg="3" md="4">
            <motion.div whileHover={{scale: 1.1}}>
            <Card>
            <Card.Img variant="top" src={item.path} style={{ height: '305px', width: '305px', objectFit: 'cover' }} />
            <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                    {item.category}
                    {item.price}

                </Card.Text> 
                <Btnn itemName={item.name} />
            </Card.Body>
            </Card>
            </motion.div>
        </Col>
  );
}

export default ProductCard;