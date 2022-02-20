import React from "react";
import { useState } from "react";
import "./DisplayPage.css";
import CustomCard from "./Card";
import { Row, Col, Container, Modal, Button } from "react-bootstrap";

const DisplayPage = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <CustomCard
              year={"2019"}
              sem={"4"}
              classp={"D10A"}
              title={"Project Title"}
              domain={"Web dev"}
              languages={"Js Css Html"}
              hosted={"yes"}
              desc="nice project"
              department={"IT"}
              image={
                "https://images.unsplash.com/photo-1553272725-086100aecf5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"
              }
            />
            <CustomCard
              year={"2019"}
              sem={"4"}
              classp={"D10A"}
              title={"sss"}
              domain={"Web dev"}
              languages={"Js Css Html"}
              hosted={"yes"}
              desc="ml project"
              department={"CS"}
              image={
                "https://images.unsplash.com/photo-1553272725-086100aecf5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"
              }
            />
          </Col>

          <Col>
            <CustomCard
              year={"2019"}
              sem={"4"}
              classp={"D10A"}
              title={"llll"}
              domain={"Web dev"}
              languages={"Js Css Html"}
              hosted={"yes"}
              desc="flutter project"
              department={"EXTC"}
              image={
                "https://images.unsplash.com/photo-1553272725-086100aecf5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"
              }
            />
            <CustomCard
              year={"2019"}
              sem={"4"}
              classp={"D10A"}
              title={"kkkk"}
              domain={"Web dev"}
              languages={"Js Css Html"}
              hosted={"yes"}
              desc="kkk project"
              department={"Instrumentation"}
              image={
                "https://images.unsplash.com/photo-1553272725-086100aecf5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"
              }
            />
          </Col>
          <Col>
            <CustomCard
              year={"2019"}
              sem={"4"}
              classp={"D10A"}
              title={"Ssss"}
              domain={"Android"}
              languages={"Js Css Html"}
              hosted={"yes"}
              desc="android project"
              department={"IT"}
              image={
                "https://images.unsplash.com/photo-1553272725-086100aecf5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"
              }
            />
            <CustomCard
              year={"2019"}
              sem={"4"}
              classp={"D10A"}
              title={"cccc"}
              domain={"Web dev"}
              languages={"Js Css Html"}
              hosted={"yes"}
              desc="blockchain project"
              department={"EXTC"}
              image={
                "https://images.unsplash.com/photo-1553272725-086100aecf5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"
              }
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DisplayPage;
