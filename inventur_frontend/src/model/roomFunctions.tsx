import {dummyObject, dummyRoom, Object, Room} from "../model/model";
import RoomService from "../services/roomService";
import axios, {AxiosResponse} from "axios";
import {useState, useEffect} from "react";
import React from "react";

export function GetRoomById(id: number){

    const [room, setRoom] = useState<Room[]>(dummyRoom)
    const [loaded, setLoaded] = useState<boolean>(false);

   useEffect(() => {
       if(loaded){return;}
       RoomService.getRoomById(id).then((response: AxiosResponse<Room[]>) =>{
            console.log("response: ", response.data)
            setLoaded(true)
            setRoom(response.data)
        }).catch((error) => {
            console.error("error", error)
        });
    })

    return room[0];
}