import React, { Component } from 'react';
import './style.css';
import { Grid, Row, Col} from 'react-bootstrap';


const Skills = () => {
    return(
        <Grid>
            <Row id="skills">
            <Col xs={12} sm={12} md={12} className="Skills-bio">
                <h1>Proficient in:</h1>
                    <p>
                    • HTML • CSS • Javascript • AJAX • Node • Handlebars • Linux/Unix • 
                    </p> 
                    <p>
                    • MySQL • MongoDB • Git • JSON • BootStrap • Material UI • Express • API • Heroku • Yarn • React • jQuery •
                    </p>
                </Col>
            </Row>
        </Grid>
    )
}






export default Skills;