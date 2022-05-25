import "./css/stylemain.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Route, Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

function ProHeader() {

  return (
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
              <Link className="nav-link fw-bold link-warning" to="/여기는 알람이 떠야함">문의</Link>
            </li>
          </ul>
          <button type="button" className="head-blog btn btn lg btn-warning">
            <Link to="/app">로그인</Link>
          </button>
        </div>
      </div>
    </header>
    </BrowserRouter>
    
  );
  
}

export default ProHeader;