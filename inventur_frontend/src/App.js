import React, {Component} from "react";
import {Routes, Route, Link,} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css";
import AuthService from "./services/authService";
import Login from "./components/loginComponent";
import Register from "./components/registerComponent";
import Profile from "./components/profileComponent";
import BoardUser from "./components/boardUserComponent";
import BoardAdmin from "./components/boardAdminComponent";

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
    this.state = {
      showAdminBoard: false,
      currentUser: undefined,
    };
  }
  componentDidMount() {
    const user = AuthService.getCurrentUser();
    if(user){
      this.setState({
        currentUser: user,
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
  }
  logOut(){
    AuthService.logout();
  }
  render() {
    const { currentUser, showAdminBoard } = this.state;
    return (
        <div>
          <nav className="navbar navbar-expand navbar-dark bg-dark">
            <Link to={"/"} className="navbar-brand">
              bezKoder
            </Link>
            <div className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/home"} className="nav-link">
                  Home
                </Link>
              </li>
              {showAdminBoard && (
                  <li className="nav-item">
                    <Link to={"/admin"} className="nav-link">
                      Admin Board
                    </Link>
                  </li>
              )}
              {currentUser && (
                  <li className="nav-item">
                    <Link to={"/user"} className="nav-link">
                      User
                    </Link>
                  </li>
              )}
            </div>
            {currentUser ? (
                <div className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link to={"/profile"} className="nav-link">
                      {currentUser.email}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a href="/login" className="nav-link" onClick={this.logOut}>
                      LogOut
                    </a>
                  </li>
                </div>
            ) : (
                <div className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link to={"/login"} className="nav-link">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to={"/register"} className="nav-link">
                      Sign Up
                    </Link>
                  </li>
                </div>
            )}
          </nav>
          <div className="container mt-3">
            <Routes>
              <Route exact path="/login" component={<Login/>} href="/login"/>
              <Route exact path="/register" component={<Register/>} />
              <Route exact path="/profile" component={<Profile/>} />
              <Route path="/user" component={<BoardUser/>} />
              <Route path="/admin" component={<BoardAdmin/>} />
            </Routes>
          </div>
        </div>
    );
  }
}
  
export default App;