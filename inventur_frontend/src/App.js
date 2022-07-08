import React, {Component} from "react";
import {Routes, Route, Link,} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css";
import AuthService from "./services/authService";
import Login from "./components/loginComponent";
import Register from "./components/registerComponent";
import Home from "./components/homeComponent";
import ObjectDetails from "./components/objectDetailsComponent";
import AddObject from "./components/addObjectComponent";

/** all components are rendered in this App Component*/
class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
    this.state = {
      currentUser: undefined,
    };
  }
  /**checks if already logged in*/
  componentDidMount() {
    const user = AuthService.getCurrentUser();
    if(user){
      this.setState({
        currentUser: user
      });
    }
  }
  logOut(){
    AuthService.logout();
  }
  /**here is what you see*/
  render() {
    const { currentUser } = this.state;
    return (
        <div>
          <nav className="navbar navbar-expand navbar-dark bg-dark">
            <Link to={"/home"} className="navbar-brand">
              Inventur
            </Link>
            {currentUser ? (
                <div className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link to={"/home"} className="nav-link">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to={"/addObject"} className="nav-link">Add Object</Link>
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
              <Route path="/" element={<Home/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/register" element={<Register/>} />
              <Route path="/home" element={<Home/>} />
              <Route path={"/details/:id"} element={<ObjectDetails/>}/>
              <Route path={"/addObject"} element={<AddObject/>}/>
            </Routes>
          </div>
        </div>
    );
  }
}
  
export default App;