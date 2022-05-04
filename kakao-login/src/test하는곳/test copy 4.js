import React from 'react'; 
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import SignPage from './test copy'; 
import ProfilePage from './test copy 3'; 
import MainPage from './test copy 2';
import "./index.css";

function App() { 
    return ( 
    <> 
    <Router> 
        <Route path='/' exact component={SignPage}/>
        <Route path='/main' component={MainPage} /> 
        <Route path='/profile' component={ProfilePage} /> 
    </Router> 
    </> 
    ); 
} 

export default App;
