import "./css/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Program from "./Program";
import App from "./App";

function Real() {
  
  return (
    <div>
        <Router>
            <Route path='/' component={Program}/> 
            <Route path='/app' component={App}/> 
        </Router>

    </div>
  );
}

export default Real;