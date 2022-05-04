import "./css/stylemain.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProHeader from './Header';

function Program() {

  return (
    /* 메인 이미지 섹션  footer 부분 */
    <div>
        <ProHeader/>
        <section class="program">
            <div class="program-box" align="center">
                hello
            </div>
        </section>
        <footer>
            <div class="inner">
             <div class="footer-message">MyInt</div>
             <div class="footer-copyright">© MyInt. Make your House!</div>
            </div>
        </footer>
        <a id="backtotop"></a>
        <script src="js/main.js"></script>
    </div>
  );
}

export default Program;