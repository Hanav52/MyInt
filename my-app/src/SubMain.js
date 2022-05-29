import "./css/stylemain.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Footer";
import { BrowserRouter as  Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

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
                    전체 이미지
                </div>
                <div className="explain2">
                    화면 기준 왼쪽은 가구 편집 오른쪽 위는 평면도 오른쪽 아래는 3d로 사용자에게 제공된다.
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
                    평면도
                </div>
                <div className="explain2">
                    9개의 평면도 중에 도면이 없는 것과 어느정도 그려진 것 중에서 원하는 것을 선택하여 사용자가 원하는 인테리어를 편집 할 수 있습니다.
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