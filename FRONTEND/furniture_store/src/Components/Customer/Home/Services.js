import React from 'react'
import { Card, Col, Row } from "react-bootstrap";
import { motion } from "framer-motion"




function Services() {
  return (
    <div className='mt-3 services'>
    <Row>



    <Col>
    <motion.div whileHover={{scale: 1.1}}>
    <Card>
        <div>
    <Card.Body className='card-02'>
    
    <Card.Title className="mb-3"><i class="fa-solid fa-truck"></i> Free Shipping</Card.Title>
        <Card.Text>
            Delivery is free within the city
        </Card.Text>
    </Card.Body>
        </div>
    </Card>
    </motion.div>
    </Col>
    
    <Col>
    <motion.div whileHover={{scale: 1.1}}>
    <Card>
        <div>
    <Card.Body className='card-04'>
    
    <Card.Title className="mb-3"><i class="fa-sharp fa-solid fa-check"></i> Quality Assurance</Card.Title>
        <Card.Text>
            We have quality assured products
        </Card.Text>
    </Card.Body>
        </div>
    </Card>
    </motion.div>
    </Col>
    
    <Col>
    <motion.div whileHover={{scale: 1.1}}>
    <Card>
        <div>
    <Card.Body className='card-03'>
    
        <Card.Title className="mb-3"><i class="fa-solid fa-heart"></i> Offers</Card.Title>
        <Card.Text>
            Enjoy festivals with our fantastic offers.
        </Card.Text>
    </Card.Body>
        </div>
    </Card>
    </motion.div>
    </Col>
    
    <Col>
    <motion.div whileHover={{scale: 1.1}}>
    <Card>
        <div>
    <Card.Body className='card-03'>
    
        <Card.Title className="mb-3"><i class="fa-sharp fa-solid fa-bolt"></i> Latest Designs</Card.Title>
        <Card.Text>
            Our Sellers have the latest designs.
        </Card.Text>
    </Card.Body>
        </div>
    </Card>
    </motion.div>
    </Col>
    </Row>
    </div>
  )
}

export default Services