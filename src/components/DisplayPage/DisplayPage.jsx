import React from "react";
import { useState } from "react";
import "./DisplayPage.css";
import CustomCard from "./Card";
import {Row,Col,Container,Modal,Button } from "react-bootstrap";

const project = [
  {year : "2019" , sem:"4",classp:"D10A",title:"Project Title",domain:"Web dev",languages:"Js Css Html",hosted:"yes",desc:"nice project",department:"IT",image:"https://images.unsplash.com/photo-1553272725-086100aecf5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"},
  {year : "2019" , sem:"4",classp:"D10A",title:"sss",domain:"Web dev",languages:"Js Css Html",hosted:"yes",desc:"nice project",department:"IT",image:"https://images.unsplash.com/photo-1553272725-086100aecf5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"},
  {year : "2019" , sem:"4",classp:"D10A",title:"llll",domain:"Web dev",languages:"Js Css Html",hosted:"yes",desc:"nice project",department:"IT",image:"https://images.unsplash.com/photo-1553272725-086100aecf5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"},
  {year : "2019" , sem:"4",classp:"D10A",title:"kkkk",domain:"Web dev",languages:"Js Css Html",hosted:"yes",desc:"nice project",department:"IT",image:"https://images.unsplash.com/photo-1553272725-086100aecf5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"},
  {year : "2019" , sem:"4",classp:"D10A",title:"xxxx",domain:"Web dev",languages:"Js Css Html",hosted:"yes",desc:"nice project",department:"IT",image:"https://images.unsplash.com/photo-1553272725-086100aecf5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"},
  {year : "2019" , sem:"4",classp:"D10A",title:"ccc",domain:"Web dev",languages:"Js Css Html",hosted:"yes",desc:"nice project",department:"IT",image:"https://images.unsplash.com/photo-1553272725-086100aecf5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"},
]

const DisplayPage = ({query}) => {
  const [filter,setFilter] = useState([]);

  const searchItems = () => {
    if (query !== '') {
        const filteredData = project.filter((item) => {
            
            console.log(Object.values(item).join('').toLowerCase().includes(query))
        })
        setFilter(filteredData)
    }
    else{
        setFilter(project)
    }
}
  

  return (
    <>
    {query.length > 0  ? (filter.map((item) => {
      return <CustomCard year={item.year} sem={item.sem} classp={item.classp} title={item.title} domain={item.domain}  languages={item.languages}  hosted={item.hosted} desc={item.desc} department= {item.department} image = {item.image}/>
    })) : (project.map((item) => {
      return <CustomCard year={item.year} sem={item.sem} classp={item.classp} title={item.title} domain={item.domain}  languages={item.languages}  hosted={item.hosted} desc={item.desc} department= {item.department} image = {item.image}/>
    }))}

    </>
    // <>
    //      <Container>
    //        <Row>
    //        <Col>
            
    //         <CustomCard year={"2019"} sem={"4"} classp={"D10A"} title={"Project Title"} domain={"Web dev"}  languages={"Js Css Html"}  hosted={"yes"} desc="nice project" department= {"IT"} image = {"https://images.unsplash.com/photo-1553272725-086100aecf5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"}/>
    //         <CustomCard year={"2019"} sem={"4"} classp={"D10A"} title={"sss"} domain={"Web dev"}  languages={"Js Css Html"}  hosted={"yes"} desc="ml project" department= {"CS"} image= {"https://images.unsplash.com/photo-1553272725-086100aecf5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"} />
    //      </Col>

    //       <Col>
            
    //         <CustomCard year={"2019"} sem={"4"} classp={"D10A"} title={"llll"} domain={"Web dev"}  languages={"Js Css Html"}  hosted={"yes"} desc="flutter project" department= {"EXTC"} image= {"https://images.unsplash.com/photo-1553272725-086100aecf5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"}/>
    //         <CustomCard year={"2019"} sem={"4"} classp={"D10A"} title={"kkkk"} domain={"Web dev"}  languages={"Js Css Html"}  hosted={"yes"} desc="kkk project" department= {"Instrumentation"} image= {"https://images.unsplash.com/photo-1553272725-086100aecf5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"}/>
    //         </Col>
    //        <Col>
            
    //         <CustomCard year={"2019"} sem={"4"} classp={"D10A"} title={"xxxx"} domain={"Android"}  languages={"Js Css Html"}  hosted={"yes"} desc="android project" department= {"IT"} image= {"https://images.unsplash.com/photo-1553272725-086100aecf5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"}/>
    //         <CustomCard year={"2019"} sem={"4"} classp={"D10A"} title={"cccc"} domain={"Web dev"}  languages={"Js Css Html"}  hosted={"yes"} desc="blockchain project" department= {"EXTC"} image= {"https://images.unsplash.com/photo-1553272725-086100aecf5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"}/>
    //         </Col>
           
    //        </Row>
    //      </Container>
    //     </>
  );
};

export default DisplayPage;


