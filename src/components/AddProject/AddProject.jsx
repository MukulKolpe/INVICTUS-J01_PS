import React, { useState } from "react";
import "./AddProject.css";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../Firebase/Firebase.utils";
import { useNavigate } from "react-router-dom";
function AddProject() {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [sem, setSem] = useState("");
  const [cla, setCla] = useState("");
  const [domain, setDomain] = useState("");
  const [languages, setLanguages] = useState("");
  const [desc, setDesc] = useState("");
  const [github, setGithub] = useState("");
  const [drive, setDrive] = useState("");
  const [hosted, setHosted] = useState("");

  const ProjectCollectionRef = collection(db, "projects");
  let navigate = useNavigate();
  const ProjectInfo = async () => {
    await addDoc(ProjectCollectionRef, {
      title,
      year,
      sem,
      cla,
      domain,
      languages,
      desc,
      github,
      drive,
      hosted,
    });

    navigate("/");
  };

  return (
    <div className="full_projForm">
      <h1 className="top_header">Add your Project:</h1>
      <div className="main_form">
        <form>
          <div className="form-group top_one">
            <label>Project Title</label>
            <input
              type="text"
              name="projTitle"
              className="form-control"
              id="nameImput"
              placeholder="Project Title..."
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div className="big_one">
            <div className="form-group three_liner">
              <label>Year</label>
              <input
                name="projYear"
                type="text"
                className="form-control"
                id="emailImput"
                placeholder="Year"
                onChange={(e) => {
                  setYear(e.target.value);
                }}
              />
            </div>
            <div className="form-group three_liner">
              <label>Semester</label>
              <input
                type="text"
                name="projSem"
                className="form-control"
                id="nameImput"
                placeholder="Semester"
                onChange={(e) => {
                  setSem(e.target.value);
                }}
              />
            </div>
            <div className="form-group three_liner">
              <label>Class</label>
              <input
                type="text"
                name="projClass"
                className="form-control"
                id="nameImput"
                placeholder="Class"
                onChange={(e) => {
                  setCla(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Domain</label>
            <input
              type="text"
              name="projDomain"
              className="form-control"
              id="nameImput"
              placeholder="Domain"
              onChange={(e) => {
                setDomain(e.target.value);
              }}
            />
          </div>

          <div className="form-group">
            <label>Tech-Stack</label>
            <input
              type="text"
              name="projTech"
              className="form-control"
              id="nameImput"
              placeholder="TechStack"
              onChange={(e) => {
                setLanguages(e.target.value);
              }}
            />
          </div>

          <div className="form-group project_info">
            <label>About This Project</label>
            <textarea
              type="text"
              name="projabt"
              className="form-control"
              id="nameImput"
              placeholder="Write about Your Project"
              onChange={(e) => {
                setDesc(e.target.value);
              }}
            />
          </div>

          <div className="form-group">
            <label>Github Link</label>
            <input
              type="text"
              name="projGit"
              className="form-control"
              id="nameImput"
              placeholder="Github Link"
              onChange={(e) => {
                setGithub(e.target.value);
              }}
            />
          </div>

          <div className="form-group">
            <label>Google Drive Link</label>
            <input
              type="text"
              name="projDrv"
              className="form-control"
              id="nameImput"
              placeholder="Google Drive Link"
              onChange={(e) => {
                setDrive(e.target.value);
              }}
            />
          </div>

          <div className="form-group">
            <label>Hosted Site Link</label>
            <input
              type="text"
              name="projHos"
              className="form-control"
              id="nameImput"
              placeholder="Hosted Site Link"
              onChange={(e) => {
                setHosted(e.target.value);
              }}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={ProjectInfo}
          >
            Submit{" "}
          </button>
        </form>
      </div>
    </div>
  );
}
export default AddProject;
