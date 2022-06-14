import axios from "axios";
import authHeader from "./authHeader";
const API_URL = "http://localhost:8080/";

class AddService{
    addRoom(room){
        return axios.post(API_URL + "add/room", room, {headers: authHeader()});
    }

    addStorage(storage){
        return axios.post(API_URL + "add/storage", storage, {headers: authHeader()});
    }

    addSection(section){
        return axios.post(API_URL + "add/section", section, {headers: authHeader()});
    }

    addObject(object){
        return axios.post(API_URL + "add/object", object, {headers: authHeader()});
    }
}
export default new AddService();