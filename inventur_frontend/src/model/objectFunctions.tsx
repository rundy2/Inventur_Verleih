import {dummyObject, dummyRoom, Object, Room} from "../model/model";
import ObjectService from "../services/objectService";
import RoomService from "../services/roomService";
import { GetRoomById } from "./roomFunctions";
import axios, {AxiosResponse} from "axios";
import {useState, useEffect} from "react";
import React from "react";

export function GetAllObjectsInArray(){
    const [objects, setObjects] = useState<Object[]>(dummyObject);
    const [loaded, setLoaded] = useState<boolean>(false);

    useEffect( () => {
        if(loaded){return;}
        ObjectService.getAllObjects().then((response: AxiosResponse<Object[]>) =>{
            setLoaded(true)
            setObjects(response.data)
        }).catch((error) => {
            console.error("error: ", error)
        });
        setLoaded(false);

    })
    return objects;

    /*const objects:Object[] = dummyObject;

    useEffect(() => {
        let isApiSubscribed = true;
        ObjectService.getAllObjects().then((response: AxiosResponse<Object[]>) =>{
            if(isApiSubscribed){
                console.log(response.data);
                let objects = Array.from(response.data.values()).slice();
                console.log("return1: " + objects[0].name);
            }
            console.log("return2: " + objects[0].name);
        })
        return () => {
            isApiSubscribed=false;
            console.log("return3" + objects[0].name);
        };
    },[]);
    console.log("return4: " + objects[0].name);
    return objects;*/
}

export function GetAllObjectsInTable(){

    let objects:Object[] = GetAllObjectsInArray();

    return(
        <table>
            <thead>
            <tr className="tableHeader">
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
                    return (
                        <tbody>
                        <tr key={object.id} className="data">
                            <td>{object.name}</td>
                            <td>{object.roomName}</td>
                            <td>{object.storageName}</td>
                            <td>{object.sectionName}</td>
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