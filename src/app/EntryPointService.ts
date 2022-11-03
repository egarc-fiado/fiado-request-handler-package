import {RequestManager} from '../core/domain/RequestManager'
import { Container, Service, } from 'typedi';
import {AWS_REQUESTS} from './AWSRequests'

@Service()
export default class EntryPointService {
    constructor(  ) {}

    async format(){
        for (const request of AWS_REQUESTS) {
            const requestManager:any = Container.get(RequestManager);
            let resp = await requestManager.handler(request)
            console.log(resp)
        }
    }
}