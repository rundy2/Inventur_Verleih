export interface Object{
    id: number;
    sectionId: number;
    sectionName: string;
    storageId: number;
    storageName: string;
    roomId: number;
    roomName: string;
    name: string;
    isbn: number;
    state: ObjectState;
    lendBy: String;
    cond: number;
}

export enum ObjectState{
    LEND= "LEND",
    FREE= "FREE",
    RESERVED= "RESERVED"
}

export interface Room{
    id: number;
    name: string;
}

export interface Section{
    id: number;
    storageId: number;
    roomId: number;
    name: string;
}

export interface Storage{
    id: number;
    roomId: number;
    name: string;
}

export interface User{
    id: number;
    email: string;
    password: string;
    btoken: string;
}

export const dummyObject: Object[] = [
    {
        id: 4,
        sectionId: 3,
        sectionName: "dummySection",
        storageId: 2,
        storageName: "dummyStorage",
        roomId: 1,
        roomName: "dummyRoom",
        name: "dummy",
        isbn: 1234,
        state: ObjectState.FREE,
        lendBy: "nobody",
        cond: 100

    }

];

export const dummyRoom: Room[] = [
    {
        id: 1,
        name: "dummy"
    }];