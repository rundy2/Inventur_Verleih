import axios from "axios";
import authHeader from "./authHeader";
const API_URL = 'http://141.56.180.173:8080/';
class UserService{
    getUserBoard(){
        return axios.get(API_URL + 'objects', {headers: authHeader()});
    }
    getAdminBoard(){
        return axios.get(API_URL + 'admin', {headers: authHeader()});
    }
}
export default new UserService();