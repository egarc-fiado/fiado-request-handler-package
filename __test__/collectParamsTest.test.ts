
import {AWS_REQUESTS} from '../src/app/AWSRequests'
import { Container, Service, } from 'typedi';
import {RequestManager} from '../src/core/domain/RequestManager'
import EntryPointService from '../src/app/EntryPointService'

describe("Request Handler", () => {
    test("Collect params", async () => {

        //TRY AWS REQUESTS
        const entryPoint:any = Container.get(EntryPointService);
        await entryPoint.format()
    });
});

    
