import React from 'react';
import { withRouter } from 'react-router-dom';
// import { ReCaptcha } from 'react-recaptcha-v3';
// import ReCAPTCHA from "react-google-recaptcha";
import { ReCaptcha } from 'react-recaptcha-google';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      isVerified: false,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.onLoadRecaptcha = this.onLoadRecaptcha.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);
  }

  handleClose(e) {
    e.preventDefault();
    this.props.closeModal();
  }

  handleSubmit(e) {
    if (this.state.isVerified) {
      e.preventDefault();
      const user = Object.assign({}, this.state);
      this.props.processForm(user);
    } else {
      alert('Silly bot, unions are for humans');
    }
  }

  update(field, secondField) {
    return e => {
      this.setState({ [field]: e.target.value })
      if (secondField) {
        this.setState({ [secondField]: e.target.value })
      }
    }
  }

  componentDidMount() {
    if (this.captcha) {
        this.captcha.reset();
        //invisible:
        this.captcha.execute();
    }
  }

  onLoadRecaptcha() {
      if (this.captcha) {
          this.captcha.reset();
          //invisible:
          this.captcha.execute();
      }
  }

  verifyCallback(recaptchaToken) {
    if (recaptchaToken) {
      this.setState({
        isVerified: true
      })
    } 
  }

  render() {
    let errors = Array.isArray(this.props.errors) ? (
    this.props.errors.map((err, i) => {
      return (
        <li className="session-errors" key={i}>{err}</li>
      )
    })
    ):(
      null
    )

    let appropriateCredentials = this.props.formType === 'login' ? (
      <div className="">
        <label>Username or email:</label>
        <input type="text" value={this.state.username} onChange={this.update('username', 'email')} />
      </div>
    ):(
      <div>
        <div className="">
          <label>Username:</label>
          <input type="text" value={this.state.username} onChange={this.update('username')} />
        </div>
        <div className="">
          <label>Email:</label>
          <input type="email" value={this.state.email} onChange={this.update('email')} />
        </div>
      </div>
    )

    return (
      <form className="session-form" onSubmit={this.handleSubmit}>
        <a className="btn-floating waves-effect waves-light" onClick={this.handleClose}><i className="material-icons">close</i></a>
        {errors}
        {appropriateCredentials}
        <div className="">
          <label>Password:</label>
          <input type="password" value={this.state.password} onChange={this.update('password')} />
        </div>
        <ReCaptcha
          ref={(el) => {this.captcha = el;}}
          // action='homepage'
          // onChange={this.onChange}

          //checkbox:
          // sitekey="6LdTScoUAAAAAN1mJ9m9qz9JAhUe8ysMldK4IwqX"
          // size="normal"
          // data-theme="dark"

          //invisible:
          sitekey="6Lepv8sUAAAAACVOwNxHDThDdBQhtnNsP6qMTPaw"
          size="invisible" 

          render="explicit"
          onloadCallback={this.onLoadRecaptcha}
          verifyCallback={this.verifyCallback}
        />
        <input className="btn waves-effect waves-light" type="submit" value={this.props.formType} />
        <br/>
        <a>or</a>
        <br/>
        {this.props.otherForm}
      </form>
    )
  }

}

export default withRouter(SessionForm);