/* 
	Dashboard is a class-based component because
	at some point in the future there will be state.
*/
import React, {Component} from 'react'
import { connect } from 'react-redux'
// css
import '../../assets/styles/Dashboard.css'


// deconstruct the props object

class StartupCard extends Component {

	render(){

		const {name, team, website, cohort, industry, logo} = this.props;

		const TeamThing = (team) => {
			const list = team.team.map(member => {
				return (
					`${member}  `
				);
			})
			return (
				<div className="container memberCont">
					<p>{list}</p>
				</div>
			);
		}
		
		return (
			<div className="row card z-depth-0">
				<div className="col s12 startupCard">
					<div className="col s3 nameAndLogo">							
						<img src={logo} alt={`${name}'s logo`} width="50px"/>
						<a href={website}><h5>{name}</h5></a>
					</div>
					<div className="col s4 infoCont">
						<h6 className="grey-text lighten-1">Team</h6>
						<TeamThing team={team}/>
					</div>
					<div className="col s2 infoCont">
						<h6 className="grey-text lighten-1">Industry</h6>
						<p>{industry}</p>
					</div>
					<div className="col s2 infoCont">
						<h6 className="grey-text lighten-1">Cohort</h6>
						<p>{cohort}</p>
					</div>				
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
	}
}

export default connect(null, mapDispatchToProps)(StartupCard)