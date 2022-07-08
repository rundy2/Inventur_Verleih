import axios from "axios";
import authHeader from "./authHeader";
const API_URL = "http://141.56.180.173:8080/";

/** communication with backend */
/** sends requests for objects */
class ObjectService{
    getAllObjects(){
        return axios.get(API_URL + "objects", {headers: authHeader()});
    }
    updateState(objectId, newState){
        return axios.post(API_URL + "objects/"+objectId+"/updateState",{"state":newState, "token":JSON.parse(localStorage.getItem('user'))},{headers: authHeader()});
    }
    getObjectById(objectId){
        return axios.get(API_URL + "objects/"+objectId,{headers: authHeader()});
    }
    getObjectsByUser(){
        return axios.post(API_URL + "objects/user",{"token":JSON.parse(localStorage.getItem('user'))}, {headers: authHeader()});
    }
    deleteObjectById(objectId){
        return axios.post(API_URL + "objects/"+objectId+"/delete",{"objectId":objectId},{headers: authHeader()});
    }
}
export default new ObjectService();