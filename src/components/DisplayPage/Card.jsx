import React from "react"
import { Card,Button,Modal,Row,Container,Col } from "react-bootstrap"
import { useState } from "react";


const CustomCard = ({title,domain,languages,hosted,image,desc,department}) => {
    const [modalShow, setModalShow] = useState(false);
    return(
        <>
        <button  style={{border: 'none', backgroundColor : 'none', padding: '0'}} onClick={() => setModalShow(true)}>
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={image} />
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Card.Text style={{margin: '1rem 0 0 0'}}>
      <h6>Domain : {domain}</h6>

    </Card.Text>

    <Card.Text style={{margin: '1rem 0 0 0'}}>
      <h6>Languages : {languages}</h6>

    </Card.Text>

    <Card.Text style={{margin: '1rem 0 0 0'}}>
      <h6>Hosted: {hosted}</h6>

    </Card.Text>
       
  </Card.Body>

</Card>
</button>

<Modal show= {modalShow} >
            <Modal.Body style= {{height: '19rem'}}>
            <Container>
            <Row>
           <Col>
           <img class="img-fluid" src= {image}></img> 
           </Col>
           <Col>
               <Row>{title}</Row>
               <Row>{department}</Row>
               <Row>{desc}</Row>
           </Col>
           </Row>
           </Container>

            </Modal.Body>
           
            

            <Button style= {{height: '3rem', width : '20%'}} onClick={() => setModalShow(false)} >Close</Button>
            
          </Modal>
    

</>
    )

}

export default CustomCard