import axios from "axios";
import authHeader from "./authHeader";
const API_URL = "http://localhost:8080/";

class ObjectService{
    getAllObjects(){
        return axios.get(API_URL + "objects", {headers: authHeader()});
    }
}
export default new ObjectService();