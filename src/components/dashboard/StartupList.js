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
			{ list }
		</div>
	);
}

export default StartupList