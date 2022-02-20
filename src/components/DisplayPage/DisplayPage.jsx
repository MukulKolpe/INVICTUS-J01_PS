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
    <section className="project">
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
                    "https://images.unsplash.com/photo-1553272725-086100aecf5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"
                  }
                />
              );
            })}
    </section>
  );
}

export default DisplayPage;
