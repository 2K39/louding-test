import React  from "react";
import { Container,Alert ,Form , Button  , Col , Row } from 'react-bootstrap';
// import * as Icon  from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';


function App(){
  console.dir(Form)

  return (
  <Container className="h3">   
    <Form  method="POST" action="form" className="dark">
      <Alert variant="danger mt-3">
      Log in to continue
      </Alert>
    
      <Form.Group>
        <Row lg={2} xl={2} md={2} sm={1} xs={1}>
          <Col>
          <Form.Label>name</Form.Label>
          <Form.Control name="name"/>
          </Col>

          <Col>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" variant="dark"/>
          </Col>
          </Row> 
        <Row>

        <Col>
         <Button variant="outline-dark" className="mt-3" type='submit'>
           submit
         </Button>
        </Col>  
        </Row>
      </Form.Group>
    </Form>
  </Container>
  );}

export default App;