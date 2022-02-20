import React from "react";
import { useState, useEffect } from "react";
import "./DisplayPage.css";
import CustomCard from "./Card";
import { getDocs } from "firebase/firestore";
import { Row, Col, Container, Modal, Button } from "react-bootstrap";
import { db } from "../../Firebase/Firebase.utils";
import { collection } from "firebase/firestore";

function DisplayPage() {
  const [projects, setProjects] = useState([]);
  const ProjectCollectionRef = collection(db, "projects");
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(ProjectCollectionRef);
      setProjects(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  });
  return (
    <div>
      <Container>
        <Row>
          <Col>
            {projects.map((project) => {
              return (
                <CustomCard
                  year={project.year}
                  sem={project.sem}
                  classp={project.cla}
                  title={project.title}
                  domain={project.domain}
                  languages={project.languages}
                  hosted={project.hosted}
                  desc={project.desc}
                  department={project.department}
                  image={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMevHeRa4l5PKEAMwb8hYXZOJWQbEJKN01yA&usqp=CAU"
                  }
                />
              );
            })}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default DisplayPage;
