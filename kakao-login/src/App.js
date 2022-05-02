import Auth from "./Auth";
import Profile from "./Profile";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const REST_API_KEY = "572dfd151f0b3039b01dfb3655e13389";
  const REDIRECT_URI = "http://localhost:3000/oauth/kakao/callback";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <a href={KAKAO_AUTH_URL}>
              <img src={ require('./img/kakao_login.png') } alt="카카오로그인"/>
            </a>
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