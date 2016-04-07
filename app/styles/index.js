var pattern = require('../images/pattern.svg');

var styles ={

	colorBg:{

		 backgroundImage:"url('"+ pattern + "')",
		 backgroundSize:'cover',
		 display:'flex',
		 flexDirection:'column',
		 justifyContent:'center',
		 alignItems:'center',
		 height:'100%',
		 width:'100%'	},

	space:{
		marginTop:'25'
	}
};

module.exports = styles;
