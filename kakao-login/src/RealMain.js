import "./css/stylemain.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProHeader from './Header';
import Footer from "./Footer";

function RealMain() {

  return (
    /* 메인 이미지 섹션  footer 부분 */
    <div>
        <ProHeader/>
        <section>
          <div class="inner">
            <div class="program11">
                MyInt는 자신이 원하는 도면에
                <br>인테리어 하는 곳입니다
            </div>
            <div class="program1-1">
              <div class="program112">
                  <div class="pro-head">프로그램1</div>
                  <div class="pro-body">여기에는 이 프로그램에 대한 설명을 적을 예정입니다. 하지만 프로그램 개수가 많아질수록
                                <br>설명하는것도 많아질 예정입니다.</div>
                  <div class="pro-button ">
                    <button type="button" class="head-blog btn btn lg btn-outline-warning"><a href="#">더보기</a></button>
                  </div>
              </div>
              <div class="program112">
                <div class="pro-head">프로그램2</div>
                <div class="pro-body">여기에는 이 프로그램에 대한 설명을 적을 예정입니다. 하지만 프로그램 개수가 많아질수록
                              <br>설명하는것도 많아질 예정입니다.</div>
                <div class="pro-button ">
                  <button type="button" class="head-blog btn btn lg btn-outline-warning"><a href="#">더보기</a></button>
                </div>
              </div>
            </div>
            <div class="program1-1">
              <div class="program113">
                <div class="pro-head">프로그램3</div>
                <div class="pro-body">여기에는 이 프로그램에 대한 설명을 적을 예정입니다. 하지만 프로그램 개수가 많아질수록
                              <br>설명하는것도 많아질 예정입니다.</div>
                <div class="pro-button ">
                  <button type="button" class="head-blog btn btn lg btn-outline-warning"><a href="#">더보기</a></button>
                </div>
              </div>
              <div class="program113">
                <div class="pro-head">프로그램4</div>
                <div class="pro-body">여기에는 이 프로그램에 대한 설명을 적을 예정입니다. 하지만 프로그램 개수가 많아질수록
                              <br>설명하는것도 많아질 예정입니다.</div>
                <div class="pro-button ">
                  <button type="button" class="head-blog btn btn lg btn-outline-warning"><a href="#">더보기</a></button>
                </div>
              </div>
            </div>
          </div>
        </section>
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
          <div class="program12-container">
            <div class="login-explain">
              <div class="login-maintitle">
                <div class="login-title">
                  자신이 원하는 방 또는 집을 지금 당장 만들러 가보세요!
                </div>
                <div class="login-subtitle">
                  로그인 후 사용할 수 있습니다.
                </div>
              </div>
              <div class="login-mainsubtitle">
                <button type="button" class="head-blog btn btn lg btn-warning"><a href="login.html">로그인</a></button>
                <button type="button" class="head-blog btn btn lg btn-outline-warning"><a href="#">문의하기</a></button>
              </div>
            </div>
          </div>
          </div>
        </section>
        <Footer/>
    </div>
  );
}

export default RealMain;