import "./css/stylemain.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function ProHeader() {
    

  return (
    <header>
      <div class="inner">
        <div class="head-container">
          <div class="head-brand"><a href="main.html">MyInt</a></div>
          <ul class="nav justify-content-center">
            <li class="nav-item fw-bold link-warning">
              <a class="nav-link fw-bold link-warning" aria-current="page" href="#">참고사이트</a>
            </li>
            <li class="nav-item fw-bold link-warning">
              <a class="nav-link fw-bold link-warning" href="#">도구</a>
            </li>
            <li class="nav-item fw-bold link-warning">
              <a class="nav-link fw-bold link-warning" href="program.html">프로그램</a>
            </li>
            <li class="nav-item fw-bold link-warning">
              <a class="nav-link fw-bold link-warning" href="#">문의</a>
            </li>
          </ul>
          <button type="button" class="head-blog btn btn lg btn-warning"><a href="login.js">로그인</a></button>
        </div>
      </div>
    </header>
  );
}

export default ProHeader;