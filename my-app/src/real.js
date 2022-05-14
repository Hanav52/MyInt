import "./css/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Route, Link } from "react-router-dom";
import Program from "./Program";
import App from "./App";
import RealMain from "./RealMain";
import { Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import SubMain from "./SubMain";
import ProgramEx from "./IntMenu";
import Swal from 'sweetalert2'

function Real() {

  const mail = () => {
    Swal.fire('wnsrl8329@gmail.com 으로 연락 주시면 감사합니다.');
  }
  
  return (
    <div>
        <BrowserRouter>
        <header>
          <div className="inner">
            <div className="head-container">
              <div className="head-brand">
                <Link to="/">MyInt</Link>
              </div>
              <ul className="nav justify-content-center">
                <li className="nav-item fw-bold link-warning">
                  <Link className="nav-link fw-bold link-warning" to="/intmenu">참고사이트</Link>
                </li>
                <li className="nav-item fw-bold link-warning">
                  <Link className="nav-link fw-bold link-warning" to="/program">도구</Link>
                </li>
                <li className="nav-item fw-bold link-warning">
                  <Link className="nav-link fw-bold link-warning" to="/submain">프로그램</Link>
                </li>
                <li className="nav-item fw-bold link-warning">
                  <Link className="nav-link fw-bold link-warning" onClick={mail}>문의</Link>
                </li>
              </ul>
              <button type="button" className="head-blog btn btn lg btn-warning">
                <Link to="/app">로그인</Link>
              </button>
            </div>
          </div>
        </header>
        <>
          <Switch>
            <Route exact path="/">
              <RealMain/>
            </Route>
            <Route path="/program">
              <Program/>
            </Route>
            <Route path="/app">
              <App/>
            </Route>
            <Route path="/submain">
              <SubMain/>
            </Route>
            <Route path="/intmenu">
              <ProgramEx/>
            </Route>
          </Switch>
          </>
        </BrowserRouter>
        
    </div>
  );
}

export default Real;