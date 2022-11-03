
export class Response{


    statusCode:number
    headers:object
    isBase64Encoded:boolean
    body:object|string

    
    constructor(){
        this.statusCode = 200;
        this.headers = {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "*"
        };
        this.isBase64Encoded = false;
        this.body = {};
    }
    
    setStatusCode(statusCode:number){
        this.statusCode = statusCode;
    }

    setHeaders(headers:object){
        this.headers = headers;
    }

    getHeaders(){
        return this.headers;
    }

    setBody(body:object|string){
        this.body = body;
    }

    getBody(){
        return this.body;
    }

    getReponse(){
        return {
            statusCode: this.statusCode,
            headers: this.headers,
            isBase64Encoded: this.isBase64Encoded,
            body: this.body
        };
    }
}


