import { Routes } from "../../Routes/Routes";
import {ResponseReject, ResponseSuccess} from "../../ResponseHandler/Response"
import {Controller} from "../../Controller/Controller";
import { ResponseHandler } from "../../ResponseHandler";
import { Inject, Service } from "typedi";
import IFormatRequestPort  from "../ports/IFormatRequestPort";
import FormatRequestService  from "./FormatRequestService";


@Service()
export class RequestManager {
    
    private _formatRequestService: IFormatRequestPort;

    constructor(@Inject(() => FormatRequestService) _formatRequestService: IFormatRequestPort) 
    {
      this._formatRequestService = _formatRequestService
    }


    async handler(request:any){
      try {
        //Format a valid request.
        let formattedRequest = this._formatRequestService.format(request)

        //Set routes

        //Call to handle request

        // //this.operationName = this.getOperationName();
        // if(this.operationName == null){
        //   throw new ResponseReject('You forget to set an operationName value.');
        // }
        // let operation = this.routes.routes[this.operationName as keyof Routes];
        // return await Controller.handleRequest(this.request,  operation);
      } catch (error) {
        console.log(error);
        return {};
      }
    }

 
}