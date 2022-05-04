import "./css/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

function Login() {

  return (
    <section>
        <div className="main">
        <div className="inner">
            <div className="login">
            <div className="font-title">로그인</div>
            <div className="kakao">
                <App/>
            </div>
            <div className="first" target="">처음화면</div>
            </div>
        </div>
        </div>
    </section>
  );
}

export default Login;