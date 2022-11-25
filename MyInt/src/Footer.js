import "./css/stylemain.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { RiBringForward } from "react-icons/ri";

function Footer() {

  return (
    /* 메인 이미지 섹션  footer 부분 */
    <div>
        <footer>
            <div className="inner">
             <div className="footer-message"><RiBringForward/>MyInt</div>
             <div className="footer-copyright" >© MyInt. Make your House!</div>
            </div>
        </footer>
        <script src="js/main.js"></script>
    </div>
  );
}

export default Footer;