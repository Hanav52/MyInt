import Auth from "./Auth";
import Profile from "./Profile";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import kakao from './img/kakao_login.png';
import "./css/style.css";
import { useState } from "react";
import KakaoLogin1 from "./KakaoLogin";

function App() {
  const REST_API_KEY = "572dfd151f0b3039b01dfb3655e13389";
;
  const realmain = () => {
    window.location.href="/";
  }
  let loginTF = true;

  const [TF, setTF] = useState(loginTF);

  const changeTF = () => {
    console.log(TF);
    setTF(TF === true ? "true" + true : "false" + false);
  }

  return (
    <Router>
      <div className="App">
          <Route path="/app">
            <section>
            <div className="main">
            <div className="inner">
                <div className="login">
                <div className="font-title">로그인</div>
                <div className="kakao">
                  <a href={<KakaoLogin1/>}>
                  <img src="https://k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg" alt="kakaologin"/>
                  </a>
                </div>
                <button onClick={changeTF}>{TF}</button>
                <div className="first" onClick={realmain}>처음화면</div>
                </div>
            </div>
            </div>
        </section>
          </Route>
      </div>
    </Router>
  );
}

export default App;