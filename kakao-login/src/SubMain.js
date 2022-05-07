import "./css/stylemain.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProHeader from './Header';
import Footer from "./Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function SubMain() {

  return (
    /* 메인 이미지 섹션  footer 부분 */
    <div>
        <ProHeader/>
        <Router>
          <Switch>
          <Route path="/SubMain"></Route>
            <section>
            <div class="inner">
            <div class="program1-container">
                <div class="program1-explain">
                </div>
                <div class="program1-explain1">
                <div class="explain1">
                    여기는 프로그램의 이미지를 왼쪽에 보여주고 설명을 해주는 곳입니다.
                </div>
                <div class="explain2">
                    여기는 설명입니다.
                </div>
                </div>
            </div>
            </div>
            </section>
            <section>
            <div class="inner">
            <div class="program2-container">
                <div class="program2-explain2">
                <div class="explain1">
                    여기는 프로그램의 이미지를 왼쪽에 보여주고 설명을 해주는 곳입니다.
                </div>
                <div class="explain2">
                    여기는 설명입니다.
                </div>
                </div>
                <div class="program2-explain">
                </div>
            </div>
            </div>
            </section>
            <section>
            <div class="inner">
            <div class="program3-container">
                <div class="program1-explain">
                </div>
                <div class="program1-explain1">
                <div class="explain1">
                    여기는 프로그램의 이미지를 왼쪽에 보여주고 설명을 해주는 곳입니다.
                </div>
                <div class="explain2">
                    여기는 설명입니다.
                </div>
                </div>
            </div>
            </div>
            </section>
            <section>
            <div class="inner">
            <div class="program2-container">
                <div class="program2-explain2">
                <div class="explain1">
                    여기는 프로그램의 이미지를 왼쪽에 보여주고 설명을 해주는 곳입니다.
                </div>
                <div class="explain2">
                    여기는 설명입니다.
                </div>
                </div>
                <div class="program2-explain">
                </div>
            </div>
            </div>
            </section>
        </Switch>
        </Router>
        <Footer/>
    </div>
  );
}

export default SubMain;