import React, { Component } from 'react';
import propTypes from 'prop-types';
import LoginScene from './components/LoginScene';
import MainScene from './MainScene';
import 'semantic-ui-css/semantic.min.css';

class App extends Component {
  static propTypes = {
    auth: propTypes.object.isRequired,
    routes: propTypes.object.isRequired,
    handleLogin: propTypes.func.isRequired,
    handleChangePage: propTypes.func.isRequired
  };
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

  handleLogin = () =>
    this.props.handleLogin();

  MainScene = () =>
    <MainScene
      currentPage={this.props.routes.currentPage}
      handleChangePage={this.props.handleChangePage}
      logout={console.log} />
  
  LoginScene = () =>
    <LoginScene handleLogin={this.handleLogin}/>

  render() {
    return this.props.auth.isAuth
      ? this.MainScene()
      : this.LoginScene();
  }
}

export default App;
