import React from 'react'
import '../App.css'
import Tables from './table';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';
const Contents = () => {
  
  const[count, setCount]=useState(1);
  const Increase=()=>{
    setCount(count + 1);
  };
  
  const Decrease=()=>{
    setCount(count-1);
  };
  return (
    <>
     <div className='b'>
     <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Row>
      </Form>
      <Tables/>
     </div>
     <Form>
     <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
    <div className='k'>
    <h1>{count}</h1>
     <Button variant="success" onClick={Increase}>Increase</Button>
     <Button variant="danger" onClick={Decrease}>Decrease</Button>
    
    </div>
    
     </>
   
  )
}

export default Contents