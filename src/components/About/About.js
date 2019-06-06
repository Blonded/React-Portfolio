import React, { Component } from 'react';
import './style.css';
import { Grid, Row, Col} from 'react-bootstrap';



class About extends Component { 
    
    state = {
        githubico:"/assets/imgs/github.png",
        linkedinico:"/assets/imgs/linkedin.png",
        mediumico: "/assets/imgs/med.png",
        emailico:"/assets/imgs/email.png",
        resumeico:"/assets/imgs/resume.png"

    }

    render(){
        return(
            <Grid>
                <Row id="about">
					          <Col xs={12} sm={12} md={6} align="left" className="img-wrap">
                        <img src="/assets/imgs/lena-edit-0.png" alt="aboutphoto"/>
                    </Col>

                    <Col xs={12} sm={12} md={6} className= "bio">
                       <h1>About</h1>
                        <p>
                        Hey there! My name is Lena and i'm a full-stack web developer currently residing in the Bay Area [San Francisco]. Coming from a creative background i've always been passionate about pushing myself artistically, enjoying the many ranges and paths it can take to have someones ideas come to life - or even my own!
                        </p>
                        <div className="connect">
                        <a href="https://github.com/Blonded" target="_blank"  title="github"> 
                        <img src={this.state.githubico}
                                    onMouseEnter={() => {
                                    this.setState({
                                      githubico: "/assets/imgs/github1.png"
                                    })
                                    }}
                                    onMouseOut={() => {
                                    this.setState({
                                      githubico: "/assets/imgs/github.png"
                                    })
                                    }}/> 

                        </a>

                        <a href="www.linkedin.com/in/lena-m-73b471161" target="_blank" title="linkedin">
                        <img src={this.state.linkedinico}
                                    onMouseEnter={() => {
                                    this.setState({
                                      linkedinico: "/assets/imgs/linkedin1.png"
                                    })
                                    }}
                                    onMouseOut={() => {
                                    this.setState({
                                      linkedinico: "/assets/imgs/linkedin.png"
                                    })
                                    }}/> 
                        </a>

                        <a href="https://medium.com/@blonded" target="_blank" title="medium">
                        <img src={this.state.mediumico}
                                    onMouseEnter={() => {
                                    this.setState({
                                      mediumico: "/assets/imgs/med1.png"
                                    })
                                    }}
                                    onMouseOut={() => {
                                    this.setState({
                                      mediumico: "/assets/imgs/med.png"
                                    })
                                    }}/> 
                        
                        </a>

                        <a href="" target="_blank" title="email">
                        <img src={this.state.emailico}
                                    onMouseEnter={() => {
                                    this.setState({
                                      emailico: "/assets/imgs/email1.png"
                                    })
                                    }}
                                    onMouseOut={() => {
                                    this.setState({
                                      emailico: "/assets/imgs/email.png"
                                    })
                                    }}/> 
                        </a>

                        <a href="" target="_blank" title="resume">
                        <img src={this.state.resumeico}
                                    onMouseEnter={() => {
                                    this.setState({
                                      resumeico: "/assets/imgs/resume1.png"
                                    })
                                    }}
                                    onMouseOut={() => {
                                    this.setState({
                                      resumeico: "/assets/imgs/resume.png"
                                    })
                                    }}/> 
                        </a>


                        </div>
                    </Col>
                </Row>
            </Grid>
                )
            }
}

export default About; 