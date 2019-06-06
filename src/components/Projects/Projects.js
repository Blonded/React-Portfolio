import React, { Component } from 'react';
import './style.css';
import { Grid, Row, Col} from 'react-bootstrap';


class Projects extends Component {

    state = {

        foodtrovertsp:"/assets/imgs/foodtroverts.png",
        satiablep:"/assets/imgs/satiable.png",
        bamazonp:"/assets/imgs/bamazon.png",
        burgerp:"/assets/imgs/burger.png"
    }


render(){
    return(
        <Grid>
            <Row id="projects">
            <h1>Projects</h1>
            <Col xs={12} sm={12} md={12} className="project-display">
            <a href="https://github.com/Blonded/Foodtroverts" target="_blank" title="foodtroverts">
            <img src={this.state.foodtrovertsp}
                        onMouseEnter={() => {
                            this.setState({
                                foodtrovertsp: "/assets/imgs/foodtroverts.png"
                                    })
                                    }}
                                    onMouseOut={() => {
                                    this.setState({
                                        foodtrovertsp: "/assets/imgs/foodtroverts.png"
                                    })
                                    }}/> </a>

            <a href="https://github.com/Blonded/Satiable-Soiree" target="_blank" title="satiable">
            <img src={this.state.satiablep}
                        onMouseEnter={() => {
                            this.setState({
                                satiablep: "/assets/imgs/satiable.png"
                                    })
                                    }}
                                    onMouseOut={() => {
                                    this.setState({
                                        satiablep: "/assets/imgs/satiable.png"
                                    })
                                    }}/> </a>

            <a href="https://github.com/Blonded/bamazon" target="_blank" title="bamazon">
            <img src={this.state.bamazonp}
                        onMouseEnter={() => {
                            this.setState({
                                bamazonp: "/assets/imgs/bamazon.png"
                                    })
                                    }}
                                    onMouseOut={() => {
                                    this.setState({
                                        bamazonp: "/assets/imgs/bamazon.png"
                                    })
                                    }}/> </a>
            
            <a href="https://github.com/Blonded/burger" target="_blank" title="burger">
            <img src={this.state.burgerp}
                        onMouseEnter={() => {
                            this.setState({
                                burgerp: "/assets/imgs/burger.png"
                                    })
                                    }}
                                    onMouseOut={() => {
                                    this.setState({
                                        burgerp: "/assets/imgs/burger.png"
                                    })
                                    }}/> </a>
            </Col>

            </Row>
        </Grid>
            
    )

}

}





export default Projects;