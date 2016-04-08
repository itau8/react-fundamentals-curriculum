var pattern = require('../images/pattern.svg');

var styles = {

	main:{ //main container style
			width: '100%',
			height: '92%'
	},

	menu: { //Header Style

		display:'flex',
		flexDirection:'row',
		justifyContent:'space-between',
		alignItems:'center'

	},

	menuprompt: { //menu form style

		display:'flex',
		flexDirection:'row',
		justifyContent:'space-between',
		alignItems:'center',
		maxWidth:'300px'

	},


	home:{ // Main window style

		 display:'flex',
		 backgroundImage:"url('"+ pattern + "')",
		 backgroundSize:'cover',
		 flexDirection:'column',
		 justifyContent:'center',
		 alignItems:'center',
		 height:'100%',
		 width:'100%'	
	},

	forecast:{ // Main window style with forecasts

	},

	prompt: { //Input form style

	}
};

module.exports = styles;
