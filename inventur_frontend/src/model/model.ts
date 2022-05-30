export interface Object{
    id: number;
    sectionId: number;
    storageId: number;
    roomId: number;
    name: string;
    isbn: number;
    state: ObjectState;
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
        storageId: 2,
        roomId: 1,
        name: "dummy",
        isbn: 1234,
        state: ObjectState.FREE,
        cond: 100

    }

];

export const dummyRoom: Room[] = [
    {
        id: 1,
        name: "dummy"
    }];