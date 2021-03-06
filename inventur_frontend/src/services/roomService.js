import axios from "axios";
import authHeader from "./authHeader";
const API_URL = "http://141.56.180.173:8080/";

/** communication with backend */
/** sends requests for rooms */
class RoomService{
    getRoomById(id){
        return axios.get(API_URL + "room/" + id, {headers: authHeader()});
    }

    getAllRooms(){
        return axios.get(API_URL + "room/", {headers: authHeader()});
    }
}
export default new RoomService();