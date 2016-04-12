var React = require('react');
var PropTypes = React.PropTypes;
var Main = require('./Main');
var Header = require('./Header');
var Loading = require('./Loading');

function Forecast (props){

	if(props.isLoading === true){
		return(
			<Main>
			<Header/>
			<Loading speed={111} text={'One moment'} />
			</Main>
		)
	}


	return(
			<Main>
			<Header/>
				<div>Forecast component</div>
			</Main>
	)

}

Forecast.propTypes = {

	city: PropTypes.string.isRequired,
}


module.exports = Forecast;