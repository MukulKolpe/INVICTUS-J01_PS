import React, { useState } from "react";
import "./AddProject.css";
class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projTitle: '',
      projYear:'',
      projSem:'',
      projClass:'',
      projDomain:'',
      projTech:'',
      projabt:'',
      projGit:'',
      projDrv:'',
      projHos:'',
    };
    
    this.handleChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    
    this.setState({
      [name]: value
    });
    console.log('Change detected. State updated' + name + ' = ' + value);
  }

  handleSubmit(event) {
    alert('A form was submitted: ' + this.state.name + ' // ' + this.state.email);
    event.preventDefault();
  }

  render() {
    return (
      <div className="main_form">
        <form onSubmit={this.handleSubmit} >
          <div className="form-group top_one">
            <label for="nameImput">Project Title</label>
            <input type="text" name="projTitle" value={this.state.projTitle} onChange={this.handleChange} className="form-control" id="nameImput" placeholder="Project Title" />
          </div>
          <div class="big_one">
            <div className="form-group three_liner">
              <label for="emailImput">Year</label>
              <input name="projYear" type="text" value={this.state.projYear} onChange={this.handleChange} className="form-control" id="emailImput" placeholder="Year" />
            </div>
            <div className="form-group three_liner">
              <label for="nameImput">Semester</label>
              <input type="text" name="projSem" value={this.state.projSem} onChange={this.handleChange} className="form-control" id="nameImput" placeholder="Semester" />
            </div>
            <div className="form-group three_liner">
              <label for="nameImput">Class</label>
              <input type="text" name="projClass" value={this.state.projClass} onChange={this.handleChange} className="form-control" id="nameImput" placeholder="Class" />
            </div>
          </div>
          
          <div className="form-group">
            <label for="nameImput">Domain</label>
            <input type="text" name="projDomain" value={this.state.projDomain} onChange={this.handleChange} className="form-control" id="nameImput" placeholder="Domain" />
          </div>

          <div className="form-group">
            <label for="nameImput">TechStack</label>
            <input type="text" name="projTech" value={this.state.projTech} onChange={this.handleChange} className="form-control" id="nameImput" placeholder="TechStack" />
          </div>

          <div className="form-group project_info">
            <label for="nameImput">About This Project</label>
            <input type="text" name="projabt" value={this.state.projabt} onChange={this.handleChange} className="form-control" id="nameImput" placeholder="Write about Your Project" />
          </div>

          <div className="form-group">
            <label for="nameImput">Github Link</label>
            <input type="text" name="projGit" value={this.state.projGit} onChange={this.handleChange} className="form-control" id="nameImput" placeholder="Github Link" />
          </div>

          <div className="form-group">
            <label for="nameImput">Google Drive Link</label>
            <input type="text" name="projDrv" value={this.state.projDrv} onChange={this.handleChange} className="form-control" id="nameImput" placeholder="Google Drive Link" />
          </div>

          <div className="form-group">
            <label for="nameImput">Hosted Site Link</label>
            <input type="text" name="projHos" value={this.state.projHos} onChange={this.handleChange} className="form-control" id="nameImput" placeholder="Hosted Site Link" />
          </div>
          <input type="submit" value="Submit" className="btn btn-primary" />
        </form>
      </div>
    )
  }
}

class MainTitle extends React.Component {
  render(){
    return(
      <h1 className="top_header">Add your Project:</h1>
    )
  }
}

class AddProject extends React.Component {
  render(){
    return(
      <div className="full_projForm">
        <MainTitle/>
        <ContactForm/>
      </div>
    )
  }
}

export default AddProject;
