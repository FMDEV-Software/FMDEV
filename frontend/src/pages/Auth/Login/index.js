import React, { Component } from 'react';
import Button from '../../../styles/Button';
import { Container, SignForm } from './styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import logo from '../../../assets/login_logo.svg';
import squares from '../../../assets/login_squares.svg';
import { Creators as AuthActions } from '../../../store/ducks/auth';
import { DialogInput } from '../../../styles/global';

class Login extends Component {

    state = {
      email: 'admin@fmdev.com.br',
      password: 'p@ssW0rd'
    };
  
  
    handleSubmit = (e) => {
      e.preventDefault();
  
      const { email, password } = this.state;
      const { signInRequest } = this.props;
  
      signInRequest(email, password);
  
    }
  
    render() {
      const { email, password } = this.state;
  
      return (
        <Container>
          <img alt="" src={squares} width={200} height={200} />
  
          <SignForm>
            <img alt="" src={logo} />
            <h1>ACESSE A PLATAFORMA</h1>
  
            <Button size="big" onClick={this.handleSubmit}>Acessar o meu ambiente</Button>
  
          </SignForm>
        </Container>
      );
    }
  }
  
  const mapDispatchToProps = (dispatch) =>
    bindActionCreators(AuthActions, dispatch);
  
  export default connect(null, mapDispatchToProps)(Login);
