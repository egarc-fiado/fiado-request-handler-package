interface IResponse{
    httpCode:number
    code:string,
    description:string,
    msg:string,
    data:any,
    date:string
}


export class ResponseHandler implements IResponse{

    httpCode: number;
    code: string;
    description: string;
    msg: string;
    data: any;
    date: string;

    constructor(description:string,msg:string,data:any, code:string='PROCESS_OK'){
        this.httpCode = 200;
        this.code = code;
        this.description = description;
        this.msg = msg;
        this.data = data;
        this.date = new Date().toISOString()
    }
}


export class ResponseSuccess extends ResponseHandler{
    constructor(data:any=[], description:string='Process completed',msg:string='Completed', code:string='PROCESS_OK'){
        super(description,msg,data)
        this.httpCode=200
        this.code = code;
    }
}

export class ResponseNotFound extends ResponseHandler{
    constructor(data:any=[], description:string='Not found.',msg:string = 'Not found.',code:string='NOT_FOUND'){
        super(description,msg,data)
        this.httpCode=404
        this.code = code;
    }
}

export class ResponseUnauthorized extends ResponseHandler{
    constructor(data:any, description:string='Internal Error',msg:string = 'Internal Error.',code:string='UNAUTHORIZED'){
        super(description,msg,data)
        this.httpCode=401
        this.code = code;
    }
}

export class ResponseReject extends ResponseHandler{
    constructor(data:any=[], description:string='Internal Error',msg:string = 'Internal Error.',code:string='INTERNAL_ERROR'){
        super(description,msg,data)
        this.httpCode=500
        this.code = code;
    }
}

export class ResponseTimeOut extends ResponseHandler{
    constructor(data:any=[], description:string='Time out',msg:string = 'Time out.', code:string='TIMEOUT'){
        super(description,msg,data)
        this.httpCode=408
        this.code = code;
    }
}

export class ResponseBadRequest extends ResponseHandler{
    constructor(data:any=[], description:string='Bad Request.',msg:string = 'Bad Request.',code:string='BAD_REQUEST'){
        super(description,msg,data)
        this.httpCode=400
        this.code = code;
    }
}

