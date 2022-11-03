
export interface IResponseHandler{
    code: number,
    message:string,
    name:string
}

export class ResponseHandler implements IResponseHandler{

    code:number;
    message: string;
    name:string

    constructor(code:number,message:string,name:string){
        this.code = code
        this.message = message
        this.name = name
    }

}

