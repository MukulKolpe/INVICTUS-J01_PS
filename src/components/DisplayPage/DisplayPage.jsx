import React from "react";
import { useState } from "react";
import "./DisplayPage.css";
import CustomCard from "./Card";
import {Row,Col,Container,Modal,Button } from "react-bootstrap";

const DisplayPage = () => {
 
  return (
    <>
         <Container>
           <Row>
           <Col>
            
            <CustomCard title={"mmmm"} domain={"Web dev"}  languages={"Js Css Html"}  hosted={"yes"} desc="nice project" department= {"IT"} image = {"https://images.unsplash.com/photo-1553272725-086100aecf5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"}/>
            <CustomCard title={"sss"} domain={"Web dev"}  languages={"Js Css Html"}  hosted={"yes"} desc="ml project" department= {"CS"} image= {"https://images.unsplash.com/photo-1553272725-086100aecf5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"} />
         </Col>
          <Col>
            
            <CustomCard title={"llll"} domain={"Web dev"}  languages={"Js Css Html"}  hosted={"yes"} desc="flutter project" department= {"EXTC"} image= {"https://images.unsplash.com/photo-1553272725-086100aecf5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"}/>
            <CustomCard title={"kkkk"} domain={"Web dev"}  languages={"Js Css Html"}  hosted={"yes"} desc="kkk project" department= {"Instrumentation"} image= {"https://images.unsplash.com/photo-1553272725-086100aecf5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"}/>
            </Col>
           <Col>
            
            <CustomCard title={"xxxx"} domain={"Android"}  languages={"Js Css Html"}  hosted={"yes"} desc="android project" department= {"IT"} image= {"https://images.unsplash.com/photo-1553272725-086100aecf5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"}/>
            <CustomCard title={"cccc"} domain={"Web dev"}  languages={"Js Css Html"}  hosted={"yes"} desc="blockchain project" department= {"EXTC"} image= {"https://images.unsplash.com/photo-1553272725-086100aecf5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"}/>
            </Col>
           
           </Row>
         </Container>
        </>
  );
};

export default DisplayPage;


