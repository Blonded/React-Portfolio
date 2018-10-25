import React from 'react';
import './style.css';
import { Grid, Row, Col} from 'react-bootstrap';



const About = () => {
    return(
        <div className="about-description">
        <Grid>
				<Row>
					<Col xs={12} sm={12} md={12}>
                    <h1 className= "about">About</h1>
					</Col>
				</Row>
        </Grid>
                <p className="about-details">
                Hey there! My name is Lena and i'm a full-stack web developer currently residing in the Bay Area [San Francisco]. Coming from a creative background i've always been passionate about pushing myself artistically, enjoying the many ranges and paths it can take to have someones ideas come to life - or even my own!
                </p>
   
        </div> 
       
    )
}

export default About; 