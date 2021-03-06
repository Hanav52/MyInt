import Auth from "./Auth";
import Profile from "./Profile";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import kakao from './img/kakao_login.png';
import "./css/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const REST_API_KEY = "572dfd151f0b3039b01dfb3655e13389";
  const REDIRECT_URI = "http://localhost:3000/oauth/kakao/callback";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/app">
          <section>
              <div className="main">
              <div className="inner">
                  <div className="login">
                  <div className="font-title">로그인</div>
                  <div className="kakao">
                  <a href={KAKAO_AUTH_URL}>
                    <img src={kakao} alt="카카오로그인"/>
                  </a>
                  </div>
                  <div className="first">처음화면</div>
                  </div>
              </div>
              </div>
          </section>
           
          </Route>
          <Route path="/oauth/kakao/callback">
            <Auth />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;