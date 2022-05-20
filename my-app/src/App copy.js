import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./css/style.css";
import { useState } from "react";
import Profile from "./Profile";

function App() {
  const JAVA_API_KEY = "49dbb957eb9235eeec3eaf9f85e5b609";

  const realmain = () => {
    window.location.href="/";
  }
  let loginTF = true;

  const [TF, setTF] = useState(loginTF);

  const changeTF = () => {
    console.log(TF);
    setTF(TF === true ? "true" + true : "false" + false);
  }

        function KakaoLogin() {
        window.Kakao.init(JAVA_API_KEY);
            window.Kakao.Auth.login({
                scope: 'profile_nickname, account_email',
                success: function(data) {
                    console.log(data);
                    window.Kakao.API.request({
                        url:'/v2/user/me',
                        success: res => {
                            const kakao_account = res.kakao_account;
                            console.log(kakao_account);
                            alert('어서오세요' + JSON.stringify(res.scope.profile_nickname))
                        }
                    });
                }
            })
        }
        function kakaoLogout() {
          if (!window.Kakao.Auth.getAccessToken()) {
          alert('Not logged in.')
          return
          }
          window.Kakao.Auth.logout(function() {
          alert('logout ok\naccess token -> ' + window.Kakao.Auth.getAccessToken())
          })
          window.location.reload();
      }
        function unlinkApp() {
            window.Kakao.API.request({
            url: '/v1/user/unlink',
            success: function(res) {
                alert('success: ' + JSON.stringify(res))
            },
            fail: function(err) {
                alert('fail: ' + JSON.stringify(err))
            },
            })
            window.location.reload();
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
                <div className="first" onClick={KakaoLogin}>로그인</div>
                <div className="first" onClick={kakaoLogout}>로그아웃</div>
                <div className="first" onClick={unlinkApp}>앱 탈퇴</div>
        
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