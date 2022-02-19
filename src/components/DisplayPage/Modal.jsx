import { useState } from "react"; 
import {Button, MyVerticallyCenteredModal,Modal,Row,Col,Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import CustomCard from '../DisplayPage/Card'



const WorkModal = () => {
    const [modalShow, setModalShow] = useState(false);
    return (
        <>
          <button  style={{border: 'none', backgroundColor : 'none', padding: '0'}} onClick={() => setModalShow(true)}>
            <CustomCard title={"mmmm"} domain={"Web dev"}  languages={"Js Css Html"}  hosted={"yes"} />
          </button>
    
          <Modal show= {modalShow} >
            <Modal.Body style= {{height: '19rem'}}>
            <Container>
            <Row>
           <Col>
               <img class="img-fluid" src= "https://images.unsplash.com/photo-1644193808959-c9bd3bb60ee1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60"></img>
           </Col>
           <Col>
               <Row>jj</Row>
               <Row>jj</Row>
               <Row>jj</Row>
           </Col>
           </Row>
           </Container>

            </Modal.Body>
           
            

            <Button style= {{height: '3rem', width : '20%'}} onClick={() => setModalShow(false)} >Close</Button>
            
          </Modal>
    
        </>
      );
    }


export default WorkModal