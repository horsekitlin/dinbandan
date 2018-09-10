import React, { Component } from 'react';
import LoginScene from './components/LoginScene';
import MainScene from './MainScene';
import {fetchPOST} from './apis/libs/fetch';
import 'semantic-ui-css/semantic.min.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      auth: {
        isLogin: false,
        message: ''
      },
      routes: {
        currentPage: 'Home'
      }
    };
  }

  setLoginState = (updatedAuthData) =>
    this.setState({auth: {...this.state.auth, ...updatedAuthData}});

  changeCurrentPage = (currentPage) =>
    this.setState({routes: {currentPage}});

  handleLogin = async (payload) => {
    const {success} = await fetchPOST('/login', payload);
    
    const updatedData = success ? {isLogin: true} : {message: '登入失敗'};

    this.setLoginState(updatedData);
  }

  MainScene = () =>
    <MainScene
      currentPage={this.state.routes.currentPage}
      changePage={this.changeCurrentPage}
      logout={() => this.setLoginState({isLogin: false})} />
  
  LoginScene = () =>
    <LoginScene handleLogin={this.handleLogin}/>

  render() {
    return this.state.auth.isLogin
      ? this.MainScene()
      : this.LoginScene();
  }
}

export default App;
