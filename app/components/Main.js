var React = require('react');
require('../main.css');
var pattern = require('../images/pattern.svg');

var style={

	width: '100%',
	height: '92%'
	
}

var style2 ={

	display:'flex',
	flexDirection:'row',
	justifyContent:'space-between',
	alignItems:'center',

}

var style3 ={


		 display:'flex',
		 backgroundImage:"url('"+ pattern + "')",
		 backgroundSize:'cover',
		 flexDirection:'column',
		 justifyContent:'center',
		 alignItems:'center',
		 height:'100%',
		 width:'100%'	
}


var Main = React.createClass({
	render: function () {
		return (
			<div style={style}>
				<div style={style2}>
					<h2>Clever title</h2>
					 <form className="navbar-form">
        					<div className="form-group">
          						<input type="text" className="form-control" placeholder="New York, NY" />
          						
        					</div>
        					<button type="submit" className="btn btn-success">Submit</button>
      				</form>
				</div>
				<div style={style3}>
					{this.props.children}
				</div>
			</div>

		)
	}
});

module.exports = Main;