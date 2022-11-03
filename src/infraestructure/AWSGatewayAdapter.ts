import { Service, Token } from "typedi";
import IRequestAdapter from "../core/ports/IRequestAdapter";

export const RequestAdapter = new Token<IRequestAdapter>(); 

@Service(RequestAdapter)
@Service()

export default class AWSGatewayAdapter implements IRequestAdapter {
    
    setPathParmeters(request: any): Promise<any> {
      let requestParams:any = {}
      if (request.pathParameters != null){ requestParams = request.pathParameters}
      return requestParams
    }

    setQueryStringParameters(request: any): Promise<any> {
      throw new Error("Method not implemented.");
    }
    setHeaders(request: any): Promise<any> {
      throw new Error("Method not implemented.");
    }
    setBody(request: any): Promise<any> {
      throw new Error("Method not implemented.");
    }
      
}

