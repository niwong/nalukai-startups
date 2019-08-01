const updateStartups = () => {
	return (dispatch, getState) => {
			fetch("https://nalukai-startups.herokuapp.com/api/startups")
	  .then(res => res.json())
	  .then(
	    (result) => {
			dispatch({
	    		type: 'UPDATE_STARTUPS',
	    		startups: result
	    	})
	    },
	    // Note: it's important to handle errors here
	    // instead of a catch() block so that we don't swallow
	    // exceptions from actual bugs in components.
	    (error) => {
	    	console.log('nick and morgan fucked up')
	    }
	  )
	}
}

export default updateStartups