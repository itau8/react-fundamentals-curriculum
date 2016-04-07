var React = require('react');
var styles = require('../styles');
var colorBg = require('../styles').colorBg
var Home = React.createClass({
	render: function(){
		return (
			<div >

  						 <div className="col-sm-12">
  						 <h1>Enter a City and State</h1>
							<form >
									<div className="form-group">
											<input 
												className = "form-control" 
												placeholder = "City name"
												type="text"
												/>
									</div>
									<div className="form-group col-sm-6 col-sm-offset-4" >
									<button className="btn btn-block btn-success">
									Check
									</button>
									</div>
					</form>
				 </div>
  				
			</div>

		)
	}
});

module.exports = Home;