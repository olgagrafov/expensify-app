import React from 'react';
import { connect } from 'react-redux';
import Translate from 'react-translate-component';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
  <div className="box-layout">
    <div className="box-layout__box">     
      <Translate content="expensify_app" component="h1" className="box-layout__title"/>      
      <Translate content="time_to_get" component="p" />       
      <button onClick={startLogin} className="button" >
          <Translate content="login_Google" />
      </button>
    </div>    
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
