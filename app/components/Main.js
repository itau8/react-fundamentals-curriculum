var React = require('react');
var Header = require('./Header');
var styles = require('../styles');
var Home = require('./Home');
require('../main.css');


var Main = React.createClass({
	render: function () {
		return (
			<div style={styles.main}>
				<Header />
				<Home />
			</div>

		)
	}
});

module.exports = Main;