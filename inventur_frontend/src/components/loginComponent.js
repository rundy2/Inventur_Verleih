import React, {Component} from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import AuthService from "../services/authService";
import BoardUser from "./boardUserComponent";
import {BrowserRouter, withRouter} from 'react-router-dom';
import ReactDOM from "react-dom";
const required = value =>{
    if(!value){
        return(
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};
export default class Login extends Component{
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.state = {
            email: "",
            password: "",
            loading: false,
            message: ""
        };
    }
    onChangeEmail(e){
        this.setState({
            email: e.target.value
        });
    }
    onChangePassword(e){
        this.setState({
            password: e.target.value
        });
    }
    handleLogin(e){
        e.preventDefault();
        this.setState({
            message: "",
            loading: true
        });
        this.form.validateAll();
        if(this.checkBtn.context._errors.length === 0){
            console.log(AuthService.login(this.state.email, this.state.password));
            AuthService.login(this.state.email, this.state.password).then(
                () => {
                    ReactDOM.render(
                        <BrowserRouter>
                            <BoardUser />
                        </BrowserRouter>,
                        document.getElementById('root')
                    );
                    //this.props.history.push(/objects);
                    //window.location.reload();
                },
                error => {
                    const resMessage =
                        (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                        error.message ||
                        error.toString();
                    this.setState({
                        loading: false,
                        message: resMessage
                    });
                }
            );
        } else {
            this.setState({
                loading: false
            });
        }
    }
    render(){
        return (
            /*<html lang="en" dir="ltr">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta charSet="utf-8" />
                        <title>Login Page</title>
                        <link rel="stylesheet" href="login.css" />
            </head>
            <body>
            <div className="form">
                <Form className="login-form" onSubmit={this.handleLogin} method="post">
                    <i className="fas fa-user-circle"></i>
                    <Input className="user-input" type="text" name="email" placeholder="Email" required />
                        <Input className="user-input" type="password" name="password" placeholder="Password" required />
                            <div className="options-01">
                                <label className="remember-me"><Input type="checkbox" name="" />Remember me</label>
                                <a href="#forgot" onclick="forgotPW()">Forgot your password?</a>
                                <script>
                                    function forgotPW() {
                                    alert("If you have forgotten your password, please write an email to x@htw-dresden.de");}
                                </script>
                            </div>
                            <Input className="btn" type="submit" name="login" value="LOGIN" />
                                <div className="options-02" />
                </Form>
            </div>
            </body>
            </html>*/

            <div className="col-md-12">
                <div className="card card-container">
                    <Form
                        onSubmit={this.handleLogin}
                        ref={c => {
                            this.form = c;
                        }}
                    >
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <Input
                                type="text"
                                className="form-control"
                                name="email"
                                value={this.state.email}
                                onChange={this.onChangeEmail}
                                validations={[required]}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <Input
                                type="password"
                                className="form-control"
                                name="password"
                                value={this.state.password}
                                onChange={this.onChangePassword}
                                validations={[required]}
                            />
                        </div>
                        <div className="form-group">
                            <button
                                className="btn btn-primary btn-block"
                                disabled={this.state.loading}
                            >
                                {this.state.loading && (
                                    <span className="spinner-border spinner-border-sm"></span>
                                )}
                                <span>Login</span>
                            </button>
                        </div>
                        {this.state.message && (
                            <div className="form-group">
                                <div className="alert alert-danger" role="alert">
                                    {this.state.message}
                                </div>
                            </div>
                        )}
                        <CheckButton
                            style={{ display: "none" }}
                            ref={c => {
                                this.checkBtn = c;
                            }}
                        />
                    </Form>
                    <Form>
                        <p></p>
                        <h2>Overview</h2>
                        <button className="button">Search</button>
                        <h5>My lending list</h5>
                        <table>
                            <tr>
                                <th>Object</th>
                                <th>Return Until</th>
                                <th>Room</th>
                                <th>Locker</th>
                                <th>Compartment</th>
                                <th>Note</th>
                                <th></th>
                            </tr>
                            <tr>
                                <td>[Object]</td>
                                <td>[ReturnDate]</td>
                                <td>[Room]</td>
                                <td>[Locker]</td>
                                <td>[Compartment]</td>
                                <td>[Note]</td>
                                <td>
                                    <button className="button">Return</button>
                                </td>
                            </tr>
                        </table>
                    </Form>
                </div>
            </div>
        ); /*Start Ansicht*/
    }
}