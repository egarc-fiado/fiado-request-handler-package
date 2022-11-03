export default interface IRequestAdapter {
    setPathParmeters(request:any): Promise<any>;
    setQueryStringParameters(request:any): Promise<any>;
    setHeaders(request:any): Promise<any>;
    setBody(request:any): Promise<any>;
}