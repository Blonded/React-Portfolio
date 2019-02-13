import React, { Component } from 'react';import './style.css';
import { Grid, Row, Col} from 'react-bootstrap';

class Recommendations extends Component {
	state = {
		recs: [
			{author:"jane doe",rec:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ornare in augue mattis pretium. Lorem ipsum dolor si quis metus id ipsum interdum hendrerit ut in erat...", img:"jane.png"},
			{author:"jan doe",rec:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ornare in augue mattis pretium. Lorem ipsum dolor si quis metus id ipsum interdum hendrerit ut in erat...", img:"jan.png"},
			{author:"jon doe",rec:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ornare in augue mattis pretium. Lorem ipsum dolor si quis metus id ipsum interdum hendrerit ut in erat...", img:"jon.png"}
		]
	}

  render(){
  	return(
	    <div id="recommendations">
	    	<Grid>
	    		<Row align="center">
	    		{this.state.recs.map((val, index) =>{
	    			return <Col xs={12} sm={12} md={4} className={`clearfix rec rec${index}`}>
							<Row className="clearfix card">
								<Col xs={12} sm={12} md={12} className="clearfix card-top">
								</Col>
								<Col xs={12} sm={12} md={12} className="clearfix card-btm">
								<img src={`/assets/imgs/${val.img}`} alt={val.author} />
								<p><span>"</span>{val.rec}<span>"</span></p>
								<p className="auth">- {val.author}</p>
								{(index === 1)?
									<a href="#" title="linkedin recommendations" className="btn">view recommendations</a>
									:
									""
								}
								</Col> 
							</Row>
						</Col>
	    		})}
	    		</Row>
	    	</Grid>
	    </div>
  	)
	}
}

export default Recommendations;