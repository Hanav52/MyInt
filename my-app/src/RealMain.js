import "./css/stylemain.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Footer";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";

function RealMain() {

  return (
    /* 메인 이미지 섹션  footer 부분 */
    <div>
        <BrowserRouter>
        <Route exact path="/">
        <section>
          <div className="inner">
            <div className="program11">
              MyInt는 자신이 원하는 도면에
              <br/>인테리어 하는 곳입니다
            </div>
            <div className="program1-1">
              <div className="program112">
                  <div className="pro-head">프로그램1</div>
                  <div className="pro-body">여기에는 이 프로그램에 대한 설명을 적을 예정입니다. 하지만 프로그램 개수가 많아질수록
                  <br/>설명하는것도 많아질 예정입니다.</div>
                  <div className="pro-button ">
                    <button type="button" className="head-blog btn btn lg btn-outline-warning"><Link to="/program">더보기</Link></button>
                  </div>
              </div>
              <div className="program112">
                <div className="pro-head">프로그램2</div>
                <div className="pro-body">여기에는 이 프로그램에 대한 설명을 적을 예정입니다. 하지만 프로그램 개수가 많아질수록
                <br/> 설명하는것도 많아질 예정입니다.</div>
                <div className="pro-button ">
                  <button type="button" className="head-blog btn btn lg btn-outline-warning">
                    <Link to="/program">더보기</Link>
                  </button>
                </div>
              </div>
            </div>
            <div className="program1-1">
              <div className="program113">
                <div className="pro-head">프로그램3</div>
                <div className="pro-body">여기에는 이 프로그램에 대한 설명을 적을 예정입니다. 하지만 프로그램 개수가 많아질수록
                <br/>설명하는것도 많아질 예정입니다.</div>
                <div className="pro-button ">
                  <button type="button" className="head-blog btn btn lg btn-outline-warning">
                    <Link to="/program">더보기</Link>
                  </button>
                </div>
              </div>
              <div className="program113">
                <div className="pro-head">프로그램4</div>
                <div className="pro-body">여기에는 이 프로그램에 대한 설명을 적을 예정입니다. 하지만 프로그램 개수가 많아질수록
                <br/>설명하는것도 많아질 예정입니다.</div>
                <div className="pro-button ">
                  <button type="button" className="head-blog btn btn lg btn-outline-warning">
                    <Link to="/program">더보기</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
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
          <div className="program12-container">
            <div className="login-explain">
              <div className="login-maintitle">
                <div className="login-title">
                  자신이 원하는 방 또는 집을 지금 당장 만들러 가보세요!
                </div>
                <div className="login-subtitle">
                  로그인 후 사용할 수 있습니다.
                </div>
              </div>
              <div className="login-mainsubtitle">
              <Link to="/app"><button type="button" className="head-blog btn btn lg btn-warning">로그인</button></Link>
              <Link to="/알람창"><button type="button" className="head-blog btn btn lg btn-outline-warning">문의하기</button></Link>
              </div>
            </div>
          </div>
          </div>
        </section>
        </Route>
        <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default RealMain;