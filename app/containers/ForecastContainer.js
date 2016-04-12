var React = require('react');
var Forecast = require('../components/Forecast');
var weatherHelpers = require('../utils/weatherHelpers');

var ForecastContainer = React.createClass({
	getInitialState: function(){
		return {
			isLoading:false,
			city:''
		}
	},


	componentDidMount: function() {

		var city = this.props.params.city;
		
		 weatherHelpers.getCityInfoFive(city)
		 .then(function (response) {
     		console.log(response.data);
   		}).then(function(){

   			this.setState({
				isLoading:false
			})

   		}.bind(this));		
		
		
	},

	render: function() {
		return (

			<Forecast 
			isLoading={this.state.isLoading} 
			city={this.state.city} />
		)
	}


})

module.exports = ForecastContainer;