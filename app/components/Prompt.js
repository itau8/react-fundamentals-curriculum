var React = require('react');
var styles = require('../styles');
var weatherHelpers = require('../utils/weatherHelpers');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var PropTypes = React.PropTypes;

var Prompt =React.createClass({

	propTypes:{		
		styles: PropTypes.object,
		classes:PropTypes.string,
		btnsty: PropTypes.object
	},

	getDefaultProps:function(){
		return{
			styles: {},
			classes:'',
			btnsty:{}
		}
	},

	getInitialState: function(){
			return {
				city:''
			}
		},

	onUpdateCity: function(e){

		this.setState({
				city: e.target.value
			})

	},

	handleSubmit: function(e){
		e.preventDefault();
		var city = this.state.city;

		// weatherHelpers.getCityInfoFive(city)
		// .then(function (response) {
  //   		console.log(response);
  // 		});

		//console.log(weather);

	},

	//onSubmit={this.handleSubmit}

	render: function(){
	return(
			<div style={this.props.styles}>
				<form className={this.props.classes} >
	        		<div className="form-group"  >
	          			<input type="text" 
	          				className="form-control" 
	          				placeholder="New York, NY" 
	          				onChange={this.onUpdateCity}
	          				value={this.props.city}
	          				/>          			
	        		</div>
	        		<Link to={'forecast/'+ this.state.city}  >
	        		<button type="submit" className="btn btn-success" style={this.props.btnsty}>Submit</button>
	        		</Link>
	      		</form>
      		</div>
		)
	}

});
// Prompt.PropTypes = {
// //		header: PropTypes.string.isRequired,
// //		onUpdateUser: PropTypes.func.isRequired,
// //		onSubmitUser: PropTypes.func.isRequired,
// //		username: PropTypes.string.isRequired
// 		css:PropTypes.object

// };


module.exports = Prompt;