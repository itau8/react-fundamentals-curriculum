var axios = require('axios');

var sec = 'cfd7b3a3acdd1fe9ba9081be87b459ca';





var helpers = {
	getCityInfo: function getCityData(city){

	return axios.get('http://api.openweathermap.org/data/2.5/weather?q='+ city +'&type=accurate&APPID=' + sec);

	},
	getCityInfoFive: function getCityDataFive(city){

	return axios.get('http://api.openweathermap.org/data/2.5/forecast/daily?q='+ city +'&type=accurate&APPID=' + sec + '&cnt=5');

	}
		
};

module.exports = helpers;

