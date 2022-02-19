import React from "react"
import { Card,Button,Modal,Row,Container,Col } from "react-bootstrap"
import { useState } from "react";


const CustomCard = ({title,domain,languages,hosted,image,desc,department,year,sem,classp}) => {
    const [modalShow, setModalShow] = useState(false);
    return(
        <>
        <button  style={{border: 'none', backgroundColor : '#fff', padding: '0'}} onClick={() => setModalShow(true)}>
        <Card className="rounded-top"
          style={
            { 
              width: '18rem',
              margin: '1rem 1rem 1rem 1rem'
            }
          }>
  <Card.Img variant="top" src={image} 
  style={{
    height : '200px'
  }}
  />
  <Card.Body
    style ={{
      height : '140px'
    }}
  >
    <Card.Title
      style={
        {
          position : 'relative',
          textAlign: 'left',
        }
      }
      >{title}</Card.Title>
    <Card.Text 
      style={
        {
          position : 'relative',
          left : '5px',
          textAlign: 'left',
          color : 'rgb(60,60,60)'
        }
      }>
      <h6>{domain}</h6>

    </Card.Text>

    <Card.Text 
      style={
        {
          position : 'relative',
          width : '80px',
          height : '20px',
          textAlign : 'right',
          backgroundColor: "#FF2400",
          color : 'white',
          fontWeight : '400',
          left : '-16px'
        }
      }>
      <h6>Hosted</h6>
    </Card.Text>
    <Card.Text 
      style={
        {
          position : 'relative',
          margin: '1rem 0 0 0',
          textAlign : 'right',
          width : '120px',
          left : '130px',
          top : '-10px'
        }}>
        <div>
          <ul>
            <li>
              <h6>{languages}</h6>
            </li>
          </ul>
        </div>
      
    </Card.Text>

    
       
  </Card.Body>

</Card>
</button>

<Modal show= {modalShow} >
            <Modal.Body 
              style= 
              {
                {
                  height: '400px',
                }
              }>
            <Container>
            <Row>
           <Col
           style={{
             height : '100px'
           }}
           >
           <img style={{height: '200px',position: 'realtive',left :'30px'}}class="img-fluid" src= {image} alt=""></img> 
           </Col>
           <Col>
           <Row
            style={{
              textAlign : 'left',
              fontSize : '1.8rem',
              fontWeight : 'bold'
            }}
           >{title}</Row>
           <Row
            style={{
              textAlign : 'left',
              position : 'relative',
              fontSize : '1.4rem',
              fontWeight : 'bold',
              color : 'rgb(133, 126, 126)'
            }}
           >{domain}</Row>
           <Row
            style={{
              fontWeight : 'bold',
              position : 'relative',
              fontSize : '1.2rem'
            }}
           >Department: {department}</Row>
           <Row
           style={{
             position : 'relative',
             top : '5px',
             fontWeight : 'bold',
              
           }}>Year: {year}</Row>
           <Row
           style={{
            position : 'relative',
            left : '130px',
            top : '-18px',
            fontWeight : 'bold',
            
          }}>Sem: {sem}</Row>
           <Row
           style={{
            position : 'relative',
            fontWeight : 'bold',
            top : '-10px'
           }}
           >Languages Used : {languages}</Row>

           </Col>
           </Row>
           <Row
           style = {{
             position : 'relative',
             top :'50px',
             width :'460px',
             height : '200px',
           }}
           >About this Project: <br/>{desc}</Row>
           </Container>

            </Modal.Body>
           
            

            <Button style= 
            {{
              height: '30px', 
              position : 'relative',
              bottom : '20px',
              fontSize :'1rem',
              lineHeight : '10px',
              width : '80px',
              left : '20px'
            }} onClick={() => setModalShow(false)} >Close</Button>
            
          </Modal>
    

</>
    )

}

export default CustomCard