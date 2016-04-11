var React = require('react');
var styles = require('../styles');
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
		console.log(city);

	},

	render: function(){
	return(
			<div style={this.props.styles}>
				<form className={this.props.classes} onSubmit={this.handleSubmit}>
	        		<div className="form-group"  >
	          			<input type="text" 
	          				className="form-control" 
	          				placeholder="New York, NY" 
	          				onChange={this.onUpdateCity}
	          				/>          			
	        		</div>
	        		<button type="submit" className="btn btn-success" style={this.props.btnsty}>Submit</button>
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