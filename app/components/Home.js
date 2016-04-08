var React = require('react');
var styles = require('../styles');
var Prompt = require('./Prompt');
var Home = React.createClass({
	render: function(){
		return (

			<div style={styles.home} >			
				 <div className="col-sm-4">
  					 <h1>Enter a City and State</h1>
  					 <Prompt/>
				 </div>		
			</div>

		)
	}
});

module.exports = Home;