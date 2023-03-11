import React from 'react'
import { Card, Col, Row } from "react-bootstrap";
import { motion } from "framer-motion"
import { icon } from '@fortawesome/fontawesome-svg-core';


function Services() {
  return (
    <div className='mt-3 services'>
    <Row>



    <Col>
    <motion.div whileHover={{scale: 1.1}}>
    <Card>
        <div>
    <Card.Body className='card-02'>
        <i className='fa fa-truck'></i>
    <Card.Title className="mb-3">Free Shipping</Card.Title>
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
    <i class="fa-regular fa-badge-check"></i>
    <Card.Title className="mb-3">Quality Assurance</Card.Title>
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
    <i class="fa-regular fa-badge-percent"></i>
        <Card.Title className="mb-3">Offers</Card.Title>
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
    <i class="fa-sharp fa-solid fa-bolt"></i>
        <Card.Title className="mb-3">Latest Designs</Card.Title>
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