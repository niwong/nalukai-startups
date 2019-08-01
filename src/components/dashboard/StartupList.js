/* 
	Dashboard is a class-based component because
	at some point in the future there will be state.
*/
import React from 'react'
import StartupCard from './StartupCard'
import '../../assets/styles/Dashboard.css'

// deconstruct the props object

const StartupList = ({startups}) => {
	const list = startups.map(startup => {
		return (
			<StartupCard key={startup.id} id={startup.id} name={startup.name} team={startup.team} website={startup.website} cohort={startup.cohort} industry={startup.industry} 
			logo={startup.logo}/>
		);
	})
	return (
		<div className="container StartupList">
			<h5>Here is a list of startups created by founders at Nalukai Startup Camp, as of July 2019.</h5>
			{ list }
		</div>
	);
}

export default StartupList