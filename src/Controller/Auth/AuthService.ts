import jwt, { Jwt, JwtPayload } from 'jsonwebtoken';


export class AuthService {


    constructor() {}

    getAuthInfo(token:string) 
    {
        try 
        {
            token = token.replace("Bearer ", "");
            var decoded:any = jwt.decode(token, { complete: true });

            return this.getPayload(decoded.payload);
        }
        catch (e)
        {
            return null;
        }
    }

    getToken(token:string) 
    {
        try 
        {
            return token = token.replace("Bearer ", "");
        } 
        catch (e) 
        {
            return null;
        }
    }

    getPayload(payload:any)
    {
        var response = 
        {
            "directoryId": payload.directoryId,
            "typeOfDirectoryId": payload.typeOfDirectoryId,
            "sub": payload.sub,
            "app": payload.app,
            "issuer": payload.issuer,
            "roles": payload.role,
            "status": payload.status,
            "kycStatus": payload.kycStatus
        };
        return response;
    }

    getRoles(token:any)
    {
        if(token)
        {
            var response:any = 
            {
                "Role": token.Role
            };
        }

        return response;
    }
}


