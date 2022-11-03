export class Service {
    static rejectResponse(error:any, code = "ERROR", httpCode = 500, description:any, msg="") {
      var response = this.responseFormat(code, description, msg, error);
      return { response, httpCode };
    }
  
    static successResponse(payload:any, code = "PROCESS_OK", httpCode = 200, description:any, msg="") {
  
      var response = this.responseFormat(code, description, msg, payload);
      return { response, httpCode };
    }
  
    static responseFormat(code:any, description:any, msg:any, data:any) {
      var response = {
        "code": code,
        "description": description,
        "msg": msg,
        "data": data,
        "date": new Date().toISOString()
      };
      return response;
    }
  }
  

  