import { ResponseHandler } from "../ResponseHandler/Response";
import { AuthService } from "./Auth/AuthService";
import { Response } from "./response/Response";

export class Controller {

  constructor() {}

  static sendResponse(response: Response, payload: { httpCode: number; response: any;}, rawResponse:any) {
    response.setStatusCode(payload.httpCode || 200);
    const responsePayload =
      payload.response !== undefined ? payload.response : payload;
    if (responsePayload instanceof Object) {
      response.setBody(JSON.stringify(responsePayload));
    } else {
      response.setBody(responsePayload);
    }
    if(rawResponse.responseBody){
      response.setBody(rawResponse.responseBody);
    }

    return new Response()

  }

  static sendError(response:Response, error:any) {
    response.setStatusCode(error.httpCode || 500);
    if (error.response instanceof Object) {
      response.setBody(JSON.stringify(error.response));
    } else {
      response.setBody(error.response || error.message);
    }
  }

  static collectRequestParams(request:any) {

    let authService = new AuthService()

    let requestParams:{headers:any,body:any,tokenInfo:Object|null, token:Object|null, roles:any, app:any, path:any} = {
        headers:'',body:'',tokenInfo:'',token:'',roles:'',app:'', path:''}

    if (request.pathParameters != null)
      requestParams = { ...request.pathParameters };

    if (request.queryStringParameters != null)
      requestParams = {
        ...requestParams,
        ...request.queryStringParameters,
      };

    requestParams.headers = request.headers;

    if (request.body != null || request.body != undefined) {
      try {  
        requestParams.body = JSON.parse(request.body);  
      } catch (e) {  
        requestParams.body = request.body; 
      }
    };

    if(request.body == null || request.body == undefined && (request != null )){  

      try {  
        requestParams.body = JSON.parse(request);  
      } catch (e) {  
        requestParams.body = request; 
      }

    }

    if(request?.rawPath){
      requestParams['path'] = request.rawPath
      console.log(requestParams)
    }

    if (request.headers?.Authorization != null) {
      requestParams["tokenInfo"] = authService.getAuthInfo(request.headers.Authorization);
      requestParams["token"] = authService.getToken(request.headers.Authorization);
      requestParams["roles"] = authService.getRoles(request.headers.Authorization);
    }
    requestParams["app"] = (request.headers?.app);

    return requestParams; 
  }
  
  static async handleRequest(request:any, serviceOperation:any) {
    let response = new Response();
    try {
      const serviceResponse = await serviceOperation(
        this.collectRequestParams(request)
      );
      console.log(JSON.stringify(serviceResponse));
      let formattedResponse:any =this.formatResponse(serviceResponse)
      Controller.sendResponse(response, formattedResponse,serviceResponse);
      console.log(response);
      if(response.body == "{}"){
        if(serviceResponse.responseBody){
          response.body = serviceResponse.responseBody;
        }
      }
      return response;
    } catch (error) {
      console.log(JSON.stringify(error));
      Controller.sendError(response, error);
      return response;
    }
  }

  static formatResponse(serviceResponse:ResponseHandler){
    
    var response = {
      "code": serviceResponse.code,
      "description": serviceResponse.description,
      "msg": serviceResponse.msg,
      "data": serviceResponse.data,
      "date": serviceResponse.date
    };

    let httpCode = serviceResponse.httpCode;

    return {httpCode, response}
  }


}

