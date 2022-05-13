import "./css/stylemain.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProHeader from './Header';
import Footer from "./Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function Program() {

  return (
    /* 메인 이미지 섹션  footer 부분 */
    <div>
        <ProHeader/>
        <Router>
          <Switch>
          <Route path="/program"></Route>
        <section className="program">
            <div className="program-box" align="center" >
                hello
            </div>
        </section>
        </Switch>
        </Router>
        <Footer/>
    </div>
  );
}

export default Program;