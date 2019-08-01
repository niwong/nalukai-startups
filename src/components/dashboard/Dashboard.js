/* 
	Dashboard is a class-based component because
	at some point in the future there will be state.
*/
import React, { Component } from 'react'
import { connect } from 'react-redux'
import StartupList from './StartupList'
import logo from '../../assets/images/nalukai_logo.png'
import updateStartups from '../../actions/updateStartups'
import '../../assets/styles/Dashboard.css'

class Dashboard extends Component {

	// good place to load content
	componentDidMount() {
		this.props.updateStartups()
	}

	/*

	<ul id="nav-mobile" class="right hide-on-med-and-down">
	  <li><a className="black-text" href="sass.html">Sass</a></li>
	  <li><a className="black-text" href="badges.html">Components</a></li>
	  <li><a className="black-text" href="collapsible.html">JavaScript</a></li>
	</ul>

	*/

	render() {
		
		return (
			<div className="white">
				<nav className="z-depth-0 white">
				    <div className="nav-wrapper valign-wrapper">
				      <img src={logo} alt="Nalukai's Logo" className="logo"/>
				      <h5 className="black-text">Nalukai Startups List</h5>
				    </div>
				  </nav>
				<div className="container dashboard">
					<div className="row">
						<StartupList startups={this.props.startups}/>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		startups: state.startups.startups
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		updateStartups: () => dispatch(updateStartups()),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
