interface IRoutes{
    routes:{ [key: string]: (event:any) => void;};
}

export class Routes implements IRoutes{

    routes:{ [key: string]: (event:any) => void;}; 

    constructor(routes:{ [key: string]: (event:any) => void;}){
        this.routes = routes
    }
}