import "./css/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";

function Login() {
  
  return (
    <Router>
    <section>
        <div className="main">
        <div className="inner">
            <div className="login">
            <div className="font-title">로그인</div>
            <div className="kakao">
                <App/>
            </div>
            <div className="first">처음화면</div>
            </div>
        </div>
        </div>
    </section>
    </Router>
  );
}

export default Login;