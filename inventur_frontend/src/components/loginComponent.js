import React, {Component} from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import AuthService from "../services/authService";
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
            AuthService.login(this.state.email, this.state.password).then(
                () => {
                    this.props.history.push("/profile");
                    window.location.reload();
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
            <html lang="en" dir="ltr">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta charSet="utf-8" />
                        <title>Login Page</title>
                        <link rel="stylesheet" href="login.css" />
            </head>
            <body>
            <div className="form">
                <Form className="login-form" action="" method="post">
                    <i className="fas fa-user-circle"></i>
                    <Input className="user-input" type="text" name="" placeholder="Username" required />
                        <Input className="user-input" type="password" name="" placeholder="Password" required />
                            <div className="options-01">
                                <label className="remember-me"><input type="checkbox" name="" />Remember me</label>
                                <a href="forgot.html">Forgot your password?</a>
                            </div>
                            <Input className="btn" type="submit" name="" value="LOGIN" />
                                <div className="options-02" />
                </Form>
            </div>
            </body>
            </html>
        );
    }
}