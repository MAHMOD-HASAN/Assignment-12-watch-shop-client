import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../Shared/Footer';
import Header from '../Shared/Header';

const Explore = () => {
    
    const [products, setProducts] = useState([]);
    useEffect( () => {
        fetch('https://safe-crag-74905.herokuapp.com/product')
        .then(res => res.json())
        .then(data => {
            setProducts(data);
        })
    }, [])


    return (
        <div>
            <Header></Header>
        <Container className='my-5'>
        <Row xs='1' md='3' className='g-3'>

            {
                products.map(product => <div key={product._id}>

                   <Col className='text-center py-3'
                   style={{
                       backgroundColor : 'rgba(0, 0, 37, 0.89)',
                       borderRadius : '10px',
                       color : 'rgb(185, 145, 145)',
                     }}
                   >

                   <img 
                   width = '200px'
                   height= '200px'
                   src={product.img} alt="" />

                   <h3>{product.name}</h3>

                   <span className='fs-4'>price : $ {product.price}</span>
                   &nbsp;&nbsp;&nbsp;
                   <span className='fs-4'>stock : {product.stock}</span>

                   <p>{product.description}</p>

                   <Link to={`/orders/${product._id}`} style={{textDecoration : 'none'}}>

                   <Button variant='danger'
                    size='sm' className='w-50'
                    >Purchase</Button>

                   </Link>

                   </Col>

                </div>)
            }
            
        </Row>

    </Container>
    <Footer></Footer>
    </div>
    );
};

export default Explore;