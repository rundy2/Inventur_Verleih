import React, {Component} from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import AuthService from "../services/authService";
import './login.css';

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
                    window.location.replace("/home");
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
    /*
    Forgot Funktion
    document.getElementById("forgot").addEventListener("click", function(){alert("If you have forgotten your password, please write an email to @htw-dresden.de");});
    */
    render(){
        return (
            <div className="col-md-12">
                <div className="card card-container">
                    <Form
                        onSubmit={this.handleLogin}
                        ref={c => {
                            this.form = c;
                        }}>
                        <div class="form">
                            <div className="form-group" class="input">
                                <Input
                                    type="text"
                                    className="form-control"
                                    class="user-input"
                                    name="email"
                                    placeholder="Username"
                                    value={this.state.email}
                                    onChange={this.onChangeEmail}
                                    validations={[required]}
                                />
                            </div>
                            <div className="form-group" class="input">
                                <Input
                                    type="password"
                                    className="form-control"
                                    class="user-input"
                                    name="password"
                                    placeholder="Password"
                                    value={this.state.password}
                                    onChange={this.onChangePassword}
                                    validations={[required]}
                                />
                            </div>
                            <div class="options-01">
                                <p id="forgot" class="forgot">Forgot your password?</p>
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
                </div>
            </div>
        );
    }
}