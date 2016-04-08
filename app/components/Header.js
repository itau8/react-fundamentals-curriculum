var React = require('react');
var styles = require('../styles');
var Prompt = require('./Prompt');

var Header = React.createClass({

	render: function(){

		return(

			<div style={styles.menu}>
				<h2>Clever title</h2>
				<Prompt styles={styles.menuprompt} classes='form-inline' btnsty={{margin:'10px'}} />

			</div>
		)
	}

});

module.exports = Header;