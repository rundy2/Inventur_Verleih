import axios from "axios";
import authHeader from "./authHeader";
const API_URL = "http://localhost:8080/";

class RoomService{
    getRoomById(id){
        return axios.get(API_URL + "room/" + id, {headers: authHeader()});
    }

    getAllRooms(){
        return axios.get(API_URL + "room/", {headers: authHeader()});
    }
}
export default new RoomService();