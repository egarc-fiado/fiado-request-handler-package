import { FormatRequestEntity } from "../entities/FormatRequestEntity";
import IFormatRequestPort from "../ports/IFormatRequestPort";
import IRequestAdapter from "../ports/IRequestAdapter";
import RequestAdapter from '../../infraestructure/AWSGatewayAdapter';
import { Inject, Service } from "typedi";


@Service()
export default class FormatRequestService implements IFormatRequestPort{

    private _requestAdapter: IRequestAdapter;

    constructor (
        @Inject(() => RequestAdapter ) _requestAdapter: IRequestAdapter
    ){
        this._requestAdapter = _requestAdapter;
    }


    async format(request:any){

        let formattedRequest:FormatRequestEntity = {
            pathParmeters : {},
            queryStringParameters : {},
            headers : {},
            body: {},
        }

        formattedRequest.pathParmeters = this._requestAdapter.setPathParmeters(request)
        formattedRequest.queryStringParameters = this._requestAdapter.setQueryStringParameters(request)
        formattedRequest.headers = this._requestAdapter.setHeaders(request)
        formattedRequest.body = this._requestAdapter.setBody(request)

        return formattedRequest;
    }

}