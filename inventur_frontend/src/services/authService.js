import axios from "axios";
import authHeader from "./authHeader";
const API_URL = "http://141.56.180.173:8080/auth/";

/** communication with backend */
/** sends requests for authentication */
class AuthService{
    login(email, password){
        return axios.post(
            API_URL + "login", {
                email,
                password
            },{headers: authHeader()}).then(response => {
                if(response.data){
                    localStorage.setItem("user", JSON.stringify(response.data));
                }
                return response.data;
        });
    }
    logout(){
        localStorage.removeItem("user");
    }
    register(email, password){
        return axios.post(API_URL+"register", {
            email,
            password
        }, {headers: authHeader()});
    }
    getCurrentUser(){
        return JSON.parse(localStorage.getItem("user"));
    }
}
export default new AuthService();