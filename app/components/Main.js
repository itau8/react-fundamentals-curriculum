var React = require('react');
var styles = require('../styles');

require('../main.css');


function  Main (props){

	return (
				
			<div style={styles.main}>	
				{props.children}
			</div>

		)

}

module.exports = Main;