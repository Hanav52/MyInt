import "./css/stylemain.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Login from './Login';
import App from './App';

function ProHeader() {

  return (
    <Router>
      <Switch>
      <Route path="/login" component={Login}></Route>
      
    <header>
      <div className="inner">
        <div className="head-container">
          
          <div className="head-brand"><Link href="main.html">MyInt</Link></div>
          <ul className="nav justify-content-center">
            <li className="nav-item fw-bold link-warning">
              <Link className="nav-link fw-bold link-warning" href="#">참고사이트</Link>
            </li>
            <li className="nav-item fw-bold link-warning">
              <Link className="nav-link fw-bold link-warning" href="#">도구</Link>
            </li>
            <li className="nav-item fw-bold link-warning">
              <Link className="nav-link fw-bold link-warning" to="">프로그램</Link>
            </li>
            <li className="nav-item fw-bold link-warning">
              <Link className="nav-link fw-bold link-warning" to="./Login.js">문의</Link>
            </li>
          </ul>
          <button type="button" className="head-blog btn btn lg btn-warning"><Link to="/login">로그인</Link></button>
        </div>
      </div>
      
    </header>
    </Switch>
    </Router>
  );
}

export default ProHeader;