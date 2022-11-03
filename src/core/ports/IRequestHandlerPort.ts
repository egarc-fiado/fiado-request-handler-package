import { Routes } from "../../Routes/Routes";

export interface IRequestHandlerPort{  
    routes:Routes;
    request:object;
    operationName:string|null;
    handler(operationName:string):void;
}