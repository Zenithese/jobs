// import React from 'react';

// class SessionForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: '',
//       password: ''
//     };
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   update(field) {
//     return e => this.setState({
//       [field]: e.currentTarget.value
//     });
//   }

//   handleSubmit(e) {
//     e.preventDefault();
//     const user = Object.assign({}, this.state);
//     this.props.processForm(user);
//   }

//   renderErrors() {
//     return(
//       <ul>
//         { this.props.errors.map((error, i) => (
//           <li key={`error-${i}`}>
//             {error}
//           </li>
//         )) }
//       </ul>
//     );
//   }

//   render() {
//     return (
//       // <div className="login-form-container">
//       //   <form onSubmit={this.handleSubmit} className="login-form-box">
//       //     <br/>
//       //     {this.props.navLink}
//       //     { this.props.errors ? this.renderErrors() : null }
//       //     <div className="login-form">
//       //       <br/>
//       //       <label>Username:
//       //         <input type="text"
//       //           value={this.state.username}
//       //           onChange={this.update('username')}
//       //           className="login-input"
//       //         />
//       //       </label>
//       //       <br/>
//       //       <label>Password:
//       //         <input type="password"
//       //           value={this.state.password}
//       //           onChange={this.update('password')}
//       //           className="login-input"
//       //         />
//       //       </label>
//       //       <br/>
//       //       <input className="btn waves-effect waves-light btn-large" type="submit" value={this.props.formType} />
//       //     </div>
//       //   </form>
//       // </div>
//     );
//   }
// }

// export default SessionForm;

import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose(e) {
    e.preventDefault();
    this.props.closeModal();
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value })
    }
  }

  render() {
    let errors = this.props.errors.map((err) => {
      return (
        <li className="session-errors" key={err.id}>{err}</li>
      )
    });

    return (
      <form className="session-form" onSubmit={this.handleSubmit}>
        <a className="btn-floating waves-effect waves-light" onClick={this.handleClose}><i className="material-icons">close</i></a>
        {errors}
        <div className="">
          <label>Username:</label>
          <input type="text" value={this.state.username} onChange={this.update('username')} />
        </div>
        <div className="">
          <label>Password:</label>
          <input type="password" value={this.state.password} onChange={this.update('password')} />
        </div>
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