import React from 'react';
import './style.css';
import { Grid, Row, Col} from 'react-bootstrap';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';



const About = () => {
    return(
        <div className="about-description">
            <Card className='about-card'>
            <div className="card-body">
        <Grid>
				<Row>
					<Col xs={12} sm={12} md={12}>
                    
					</Col>
				</Row>
        
                <Row>
					<Col xs={6} sm={6} md={6}>
                        <img src="/assets/imgs/lena-edit-0.png" alt="Logo"/>
                    </Col>
                    <Col xs={6} sm={6} md={6}>
                        <h1 className= "about">About</h1>
                        <p className="about-details">
                        Hey there! My name is Lena and i'm a full-stack web developer currently residing in the Bay Area [San Francisco]. Coming from a creative background i've always been passionate about pushing myself artistically, enjoying the many ranges and paths it can take to have someones ideas come to life - or even my own!
                        </p>
                    </Col>

                </Row>


        </Grid>
        </div>
        </Card>
        </div> 
       
    )
}

export default About; 