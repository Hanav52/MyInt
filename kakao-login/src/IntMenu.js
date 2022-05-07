import "./css/stylemain.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProHeader from './Header';
import Footer from "./Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function Program() {

  return (
    <div>
        <ProHeader/>
        <Router>
          <Switch>
            <section>
            <div class="inner1">
                <div class="title-container">

                </div>
                <div class="roadmap-container">
                <div class="roadmap-title-container">
                    <div class="roadmap-title">아직 제목을 정하지 못했습니다.</div>
                    <div class="arrow-container">
                    <i class="fas fa-chevron-circle-left slide-prev"></i>
                    <i class="fas fa-chevron-circle-right slide-next"></i>
                    </div>
                </div>
                <ul class="class-list">
                    <li class="class-card">
                    <a href="http://school.fastcampus.co.kr/blog/all/113/" target="_blank">
                        <img src="img/firstimage.png" alt="클릭했을때 나오는 설명" class="class-image" />
                        <div class="class-container">
                        <div class="class-skill">
                            <div class="class-type">학습방법</div>
                            <div class="class-format">블로그</div>
                        </div>
                        <div class="class-desc">
                            <div class="class-title">제목</div>
                            <div class="class-detail">내용입니다.</div>
                        </div>
                        </div>
                    </a>
                    </li>
                    <li class="class-card">
                    <a href="http://www.yes24.com/Product/Goods/60212672?OzSrank=1" target="_blank">
                        <img src="img/firstimage.png" alt="클릭했을때 나오는 설명" class="class-image" />
                        <div class="class-container">
                        <div class="class-skill">
                            <div class="class-type">출판서적</div>
                            <div class="class-format">서적</div>
                        </div>
                        <div class="class-desc">
                            <div class="class-title">제목</div>
                            <div class="class-detail">내용입니다.</div>
                        </div>
                        </div>
                    </a>
                    </li>
                    <li class="class-card">
                    <a href="hhttp://www.yes24.com/Product/Goods/43504370?OzSrank=1" target="_blank">
                        <img src="img/firstimage.png" alt="클릭했을때 나오는 설명" class="class-image" />
                        <div class="class-container">
                        <div class="class-skill">
                            <div class="class-type">출판서적</div>
                            <div class="class-format">서적</div>
                        </div>
                        <div class="class-desc">
                            <div class="class-title">제목</div>
                            <div class="class-detail">내용입니다.</div>
                        </div>
                        </div>
                    </a>
                    </li>
                    <li class="class-card">
                    <a href="http://www.yes24.com/Product/Goods/1461768?OzSrank=8" target="_blank">
                        <img src="img/firstimage.png" alt="클릭했을때 나오는 설명" class="class-image" />
                        <div class="class-container">
                        <div class="class-skill">
                            <div class="class-type">출판서적</div>
                            <div class="class-format">서적</div>
                        </div>
                        <div class="class-desc">
                            <div class="class-title">제목</div>
                            <div class="class-detail">내용입니다.</div>
                        </div>
                        </div>
                    </a>
                    </li>
                    <li class="class-card">
                    <a href="http://www.yes24.com/Product/Goods/3369009" target="_blank">
                        <img src="img/firstimage.png" alt="클릭했을때 나오는 설명" class="class-image" />
                        <div class="class-container">
                        <div class="class-skill">
                            <div class="class-type">출판서적</div>
                            <div class="class-format">서적</div>
                        </div>
                        <div class="class-desc">
                            <div class="class-title">제목</div>
                            <div class="class-detail">내용입니다.</div>
                        </div>
                        </div>
                    </a>
                    </li>
                </ul>
                </div>
            </div>
            </section>
            <section>
            <div class="inner1">
                <div class="roadmap-container">
                <div class="roadmap-title-container">
                    <div class="roadmap-title">아직 제목을 정하지 못했습니다.</div>
                    <div class="arrow-container">
                    <i class="fas fa-chevron-circle-left slide-prev"></i>
                    <i class="fas fa-chevron-circle-right slide-next"></i>
                    </div>
                </div>
                <ul class="class-list">
                    <li class="class-card">
                    <a href="http://school.fastcampus.co.kr/blog/all/113/" target="_blank">
                        <img src="img/firstimage.png" alt="입력했을때 뜨는 이름" class="class-image" />
                        <div class="class-container">
                        <div class="class-skill">
                            <div class="class-type">학습방법</div>
                            <div class="class-format">블로그</div>
                        </div>
                        <div class="class-desc">
                            <div class="class-title">제목</div>
                            <div class="class-detail">내용입니다.</div>
                        </div>
                        </div>
                    </a>
                    </li>
                    <li class="class-card">
                    <a href="http://www.yes24.com/Product/Goods/60212672?OzSrank=1" target="_blank">
                        <img src="img/firstimage.png" alt="입력했을때 뜨는 이름" class="class-image" />
                        <div class="class-container">
                        <div class="class-skill">
                            <div class="class-type">출판서적</div>
                            <div class="class-format">서적</div>
                        </div>
                        <div class="class-desc">
                            <div class="class-title">제목</div>
                            <div class="class-detail">내용입니다.</div>
                        </div>
                        </div>
                    </a>
                    </li>
                    <li class="class-card">
                    <a href="hhttp://www.yes24.com/Product/Goods/43504370?OzSrank=1" target="_blank">
                        <img src="img/firstimage.png" alt="입력했을때 뜨는 이름" class="class-image" />
                        <div class="class-container">
                        <div class="class-skill">
                            <div class="class-type">출판서적</div>
                            <div class="class-format">서적</div>
                        </div>
                        <div class="class-desc">
                            <div class="class-title">제목</div>
                            <div class="class-detail">내용입니다.</div>
                        </div>
                        </div>
                    </a>
                    </li>
                    <li class="class-card">
                    <a href="http://www.yes24.com/Product/Goods/1461768?OzSrank=8" target="_blank">
                        <img src="img/firstimage.png" alt="입력했을때 뜨는 이름" class="class-image" />
                        <div class="class-container">
                        <div class="class-skill">
                            <div class="class-type">출판서적</div>
                            <div class="class-format">서적</div>
                        </div>
                        <div class="class-desc">
                            <div class="class-title">제목</div>
                            <div class="class-detail">내용입니다.</div>
                        </div>
                        </div>
                    </a>
                    </li>
                    <li class="class-card">
                    <a href="http://www.yes24.com/Product/Goods/3369009" target="_blank">
                        <img src="img/firstimage.png" alt="입력했을때 뜨는 이름" class="class-image" />
                        <div class="class-container">
                        <div class="class-skill">
                            <div class="class-type">출판서적</div>
                            <div class="class-format">서적</div>
                        </div>
                        <div class="class-desc">
                            <div class="class-title">제목</div>
                            <div class="class-detail">내용입니다.</div>
                        </div>
                        </div>
                    </a>
                    </li>
                </ul>
                </div>
            </div>
            </section>
            <section>
            <div class="inner1">
                <div class="roadmap-container">
                <div class="roadmap-title-container">
                    <div class="roadmap-title">아직 제목을 정하지 않았습니다.</div>
                    <div class="arrow-container">
                    <i class="fas fa-chevron-circle-left slide-prev"></i>
                    <i class="fas fa-chevron-circle-right slide-next"></i>
                    </div>
                </div>
                <ul class="class-list">
                    <li class="class-card">
                    <a href="http://school.fastcampus.co.kr/blog/all/113/" target="_blank">
                        <img src="img/firstimage.png" alt="입력했을때 뜨는 이름" class="class-image" />
                        <div class="class-container">
                        <div class="class-skill">
                            <div class="class-type">학습방법</div>
                            <div class="class-format">블로그</div>
                        </div>
                        <div class="class-desc">
                            <div class="class-title">제목</div>
                            <div class="class-detail">내용입니다.</div>
                        </div>
                        </div>
                    </a>
                    </li>
                    <li class="class-card">
                    <a href="http://www.yes24.com/Product/Goods/60212672?OzSrank=1" target="_blank">
                        <img src="img/firstimage.png" alt="입력했을때 뜨는 이름" class="class-image" />
                        <div class="class-container">
                        <div class="class-skill">
                            <div class="class-type">출판서적</div>
                            <div class="class-format">서적</div>
                        </div>
                        <div class="class-desc">
                            <div class="class-title">제목</div>
                            <div class="class-detail">내용입니다.</div>
                        </div>
                        </div>
                    </a>
                    </li>
                    <li class="class-card">
                    <a href="hhttp://www.yes24.com/Product/Goods/43504370?OzSrank=1" target="_blank">
                        <img src="img/firstimage.png" alt="입력했을때 뜨는 이름" class="class-image" />
                        <div class="class-container">
                        <div class="class-skill">
                            <div class="class-type">출판서적</div>
                            <div class="class-format">서적</div>
                        </div>
                        <div class="class-desc">
                            <div class="class-title">제목</div>
                            <div class="class-detail">내용입니다.</div>
                        </div>
                        </div>
                    </a>
                    </li>
                    <li class="class-card">
                    <a href="http://www.yes24.com/Product/Goods/1461768?OzSrank=8" target="_blank">
                        <img src="img/firstimage.png" alt="입력했을때 뜨는 이름" class="class-image" />
                        <div class="class-container">
                        <div class="class-skill">
                            <div class="class-type">출판서적</div>
                            <div class="class-format">서적</div>
                        </div>
                        <div class="class-desc">
                            <div class="class-title">제목</div>
                            <div class="class-detail">내용입니다.</div>
                        </div>
                        </div>
                    </a>
                    </li>
                    <li class="class-card">
                    <a href="http://www.yes24.com/Product/Goods/3369009" target="_blank">
                        <img src="img/firstimage.png" alt="입력했을때 뜨는 이름" class="class-image" />
                        <div class="class-container">
                        <div class="class-skill">
                            <div class="class-type">출판서적</div>
                            <div class="class-format">서적</div>
                        </div>
                        <div class="class-desc">
                            <div class="class-title">제목</div>
                            <div class="class-detail">내용입니다.</div>
                        </div>
                        </div>
                    </a>
                    </li>
                </ul>
                </div>
            </div>
            </section>
          </Switch>
        </Router>
        <Footer/>
        
    </div>
  );
}

export default Program;