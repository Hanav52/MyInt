import React, { Component } from 'react';
import Styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import KakaoLoginImg from './img/kakao_login.png';

const ButtonWrap = Styled.div`
  background-image: url(${KakaoLoginImg});
  background-repeat: no-repeat;
  margin: 38px auto;
  color: transparent;
  width: 183px;
  height: 45px;
`;

const { Kakao } = window;

class KakaoLogin extends Component {
  state = {
    isLogin: false,
  };
  loginWithKakao = () => {
    try {
      return new Promise((resolve, reject) => {
        if (!Kakao) {
          reject('인스턴스 없음');
        }
        Kakao.Auth.login({
          success: res => {
            localStorage.setItem('token', res.token);
            this.setState({
              isLogin: true,
            });
            this.props.history.push('/signup');
          },
          fail: err => {
            console.error(err);
          },
        });
      });
    } catch (err) {
      console.error(err);
    }
  };
  componentDidMount() {
    if (Kakao.Auth.getAccessToken()) {
      this.setState({
        isLogin: true,
      });
    }
  }
  render() {
    const { isLogin } = this.state;
    const loginView = <ButtonWrap onClick={this.loginWithKakao}></ButtonWrap>;

    return <div className="App">{loginView}</div>;
  }
}

export default withRouter(KakaoLogin);