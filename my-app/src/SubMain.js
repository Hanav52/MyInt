import "./css/stylemain.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProHeader from './Header';
import Footer from "./Footer";
import { BrowserRouter as  Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Switch } from "react-router-dom";

function SubMain() {

  return (
    /* 메인 이미지 섹션  footer 부분 */
    <div>
        <BrowserRouter>
        <Route path="submain">
            <section>
            <div className="inner">
            <div className="program1-container">
                <div className="program1-explain">
                </div>
                <div className="program1-explain1">
                <div className="explain1">
                    여기는 프로그램의 이미지를 왼쪽에 보여주고 설명을 해주는 곳입니다.
                </div>
                <div className="explain2">
                    여기는 설명입니다.
                </div>
                </div>
            </div>
            </div>
            </section>
            <section>
            <div className="inner">
            <div className="program2-container">
                <div className="program2-explain2">
                <div className="explain1">
                    여기는 프로그램의 이미지를 왼쪽에 보여주고 설명을 해주는 곳입니다.
                </div>
                <div className="explain2">
                    여기는 설명입니다.
                </div>
                </div>
                <div className="program2-explain">
                </div>
            </div>
            </div>
            </section>
            <section>
            <div className="inner">
            <div className="program3-container">
                <div className="program1-explain">
                </div>
                <div className="program1-explain1">
                <div className="explain1">
                    여기는 프로그램의 이미지를 왼쪽에 보여주고 설명을 해주는 곳입니다.
                </div>
                <div className="explain2">
                    여기는 설명입니다.
                </div>
                </div>
            </div>
            </div>
            </section>
            <section>
            <div className="inner">
            <div className="program2-container">
                <div className="program2-explain2">
                <div className="explain1">
                    여기는 프로그램의 이미지를 왼쪽에 보여주고 설명을 해주는 곳입니다.
                </div>
                <div className="explain2">
                    여기는 설명입니다.
                </div>
                </div>
                <div className="program2-explain">
                </div>
            </div>
            </div>
            </section>
            </Route>
        </BrowserRouter>
        <Footer/>
    </div>
  );
}

export default SubMain;