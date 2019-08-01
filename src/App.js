import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard'
import './assets/styles/app.css'

function App() {
  return (
  	<BrowserRouter>
	    <div className="App grey lighten-5">
	    	<Dashboard />
	    </div>
	</BrowserRouter>
  );
}

export default App;
