import {dummyObject, dummyRoom, Object, Room} from "../model/model";
import ObjectService from "../services/objectService";
import RoomService from "../services/roomService";
import { GetRoomById } from "./roomFunctions";
import { getRoomNameById } from "./roomFunctions";
import axios, {AxiosResponse} from "axios";
import {useState, useEffect} from "react";
import React from "react";

export function GetAllObjectsInTable(){

    const [objects, setObjects] = useState<Object[]>(dummyObject);
    const [loaded, setLoaded] = useState<boolean>(false);

    useEffect( () => {
        if(loaded){return;}
        ObjectService.getAllObjects().then((response: AxiosResponse<Object[]>) =>{
            console.log("response: ", response.data)
            setLoaded(true)
            setObjects(response.data)
        }).catch((error) => {
            console.error("error: ", error)
        })
        setLoaded(false)

    })

    //let test = objects
    return(
        <table>
            <thead>
            <tr>
                <th>Object</th>
                <th>Room</th>
                <th>Locker</th>
                <th>Compartment</th>
                <th>Availability</th>
                <th></th>
                <th></th>
            </tr>
            </thead>
            {
                objects.map((object) => {
                    //let room:Room = GetRoomById(object.roomId)
                    return (
                        <tbody>
                        <tr key={object.id}>
                            <td>{object.name}</td>
                            <td>{/*room.name*/ object.roomId}</td>
                            <td>{object.storageId}</td>
                            <td>{object.sectionId}</td>
                            <td>{object.state}</td>
                            <td>
                                <button className="button">Borrow/Return</button>
                            </td>
                            <td>
                                <button className="button">Details</button>
                            </td>
                        </tr>
                        </tbody>
                    )
                })
            }
        </table>


    )
}