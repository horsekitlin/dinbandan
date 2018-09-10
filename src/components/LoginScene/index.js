import React, { Component } from 'react';
import propTypes from 'prop-types';
import logo from '../../logo.svg';
import { Form, Label, Container, Image, Header } from 'semantic-ui-react';

export const checkEmail = v => {
  if (v === '') {
    return {
      emailErr: true,
      emailErrMsg: 'Email不能為空'
    };
  }

  const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!re.test(v)) {
    return {
      emailErr: true,
      emailErrMsg: 'Email格式錯誤'
    };
  }

  return {
    emailErr: false,
    emailErrMsg: ''
  };
};

export const checkPassword = v => {
  if (v === '') {
    return {
      passwordErr: true,
      passwordErrMsg: '密碼不能為空'
    };
  }

  if (v.length < 8) {
    return {
      passwordErr: true,
      passwordErrMsg: '密碼長度至少要8個字元'
    };
  }

  return {
    passwordErr: false,
    passwordErrMsg: ''
  };
};


const ErrorMessage = ({isError, message}) =>
  isError &&
  (
    <Label basic pointing style={{color: 'red'}}>
      {message}
    </Label>
  )
class LoginScene extends Component {
  static propTypes = {
    handleLogin: propTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      emailErr: false,
      passwordErr: false,
      emailErrMsg: '',
      passwordErrMsg: '',
      email: '',
      password: ''
    };
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
    
    this.verifyFields(name, value);
  }

  verifyFields = (name, value) => {
    switch (name) {
      case 'email':
        this.setState(checkEmail(value));
        break;
      case 'password':
        this.setState(checkPassword(value));
        break;
      default:
        break;
    }
  };

  disabledButton = () => {
    const {emailErr, passwordErr, email, password} = this.state;

    return emailErr
      || passwordErr
      || email === ''
      || password === '';
  }

  handleSubmit = () =>
    this.props.handleLogin(this.state)

  emailField = () =>
    <Form.Field>
      <Form.Input
        name='email'
        error={this.state.emailErrMsg !== ''}
        placeholder='Email'
        onChange={this.handleInputChange}
        value={this.state.email} />
      <ErrorMessage
        message={this.state.emailErrMsg}
        isError={this.state.emailErrMsg !== ''}/>
    </Form.Field>
  
  passwordField = () =>
    <Form.Field>
      <Form.Input
        name='password'
        type='password'
        error={this.state.passwordErrMsg !== ''}
        onChange={this.handleInputChange}
        value={this.state.password}/>
      <ErrorMessage
        message={this.state.passwordErrMsg}
        isError={this.state.passwordErrMsg !== ''}/>
    </Form.Field>

  loginButton = () =>
    <Form.Field>
      <Form.Button
        primary
        disabled={this.disabledButton()}
        onClick={this.handleSubmit} >
        登入
      </Form.Button>
    </Form.Field>

  render() {
    return (
      <Container  text>
        <Header textAlign="center">好食在</Header>
        <Image src={logo}  centered />
        <Form>
          {this.emailField()}
          {this.passwordField()}
          {this.loginButton()}
        </Form>
      </Container>
    );
  }
}

export default LoginScene;
