export const AWS_REQUESTS = [
    {
        resource: '/{cardId}',
        path: '/cards/4111111111111111',
        httpMethod: 'GET',
        headers: {
          Accept: '*/*',
          'Accept-Encoding': 'gzip, deflate, br',
          Authorization: 'Bearer eyJraWQiOiJySU5CYVdrWDU5UllMWG04Q08rMmIzejREYWVKenVZK2dnVEZET0U1eEpnPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIwMWY2YzFkYi0xODc0LTRjNzEtOTJkZC0zNjFiYWI5MWViMGUiLCJreWNTdGF0dXMiOiJQRU5ESU5HIiwiY3VzdG9tOnR5cGVPZkRpcmVjdG9yeUlkIjoiVVNFUiIsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX3dDVjJ6ZjkxRCIsInBob25lX251bWJlcl92ZXJpZmllZCI6ZmFsc2UsImNvZ25pdG86dXNlcm5hbWUiOiIwMWY2YzFkYi0xODc0LTRjNzEtOTJkZC0zNjFiYWI5MWViMGUiLCJ0eXBlT2ZEaXJlY3RvcnlJZCI6IlVTRVIiLCJyb2xlc0FwcCI6IkNIRUNLT1VUX0JBTktBQ0NPVU5ULFJFUVVFU1RfRklBRE8iLCJvcmlnaW5fanRpIjoiMDBhYWUzNjctNmYyYi00MjFmLWJiYzgtN2ZmZjJjOTI2YmQxIiwiYXVkIjoiNTU2aWdicG1oa3VkaHV0MTltMmh1cmRtdTQiLCJwaG9uZU51bWJlciI6Iis1NzMwMTQyOTgyNDAiLCJldmVudF9pZCI6Ijg2NTg1NTExLWQ2OTYtNGYwOS1iN2MwLWVlZTgyZGI0YjlmMyIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjU3ODUwMTEyLCJkaXJlY3RvcnlJZCI6ImE5YTg0M2M2LWVjYzQtNGZhNC05ODA1LTNlMGZjZjdjYmYwYyIsImN1c3RvbTpkaXJlY3RvcnlJZCI6ImQ2ZmRiZTRiLWRlMjEtNGIzNC1hYjczLWJmZjlkZGRlZTE5MiIsInBob25lX251bWJlciI6Iis1NzMwMTQyOTgyNDAiLCJwcmVmZXJyZWROYW1lIjoiY2FsaWNoZSAiLCJleHAiOjE2NTc4NTM3MTIsImlhdCI6MTY1Nzg1MDExMiwianRpIjoiYmM2MDI5MWUtZjFhNi00YTZiLThkMDAtYzI1MWE4YWMyZGIzIn0.BDxhh7Pgj4IPTt2WD8Tk4mC_4VcfHy4aN2QYgwS-0X239BKxkqd028-ZgegVeriXXnOh7nmwT6kju1fV77fgyHSBKZ_MQsIspokoAqWtboCE6_7jAruiOpk8cZTJYfWz5LLwhpx4B5u7l7WZp25AwThzmbuHTz3S3VRgvksmMuLOk_Ca729AUkH7yasDmOf2NKg8K5VmbAHv_PINeq_Ejkwwt_xGF_NBYYXYCb-uTA7uMlvW8Yw4gX0Rawcb9AA6YCxw3kGy2GaFoKOvPQ70faTuj30kDTs8TQFqhYYne0y_p-ez7Xq0l6A4cYH35ffFRAqBr37q0xyxXyb7iqzCNg',
          'Cache-Control': 'no-cache',
          Host: 'api-dev.tufiado.com',
          'Postman-Token': '5b29ae01-3edb-4257-a037-69f36542acb3',
          'User-Agent': 'PostmanRuntime/7.29.0',
          'X-Amzn-Trace-Id': 'Root=1-62d0cb93-1795477b250cd1e113591444',
          'X-Forwarded-For': '191.92.232.43',
          'X-Forwarded-Port': '443',
          'X-Forwarded-Proto': 'https'
        },
        multiValueHeaders: {
          Accept: [ '*/*' ],
          'Accept-Encoding': [ 'gzip, deflate, br' ],
          Authorization: [
            'Bearer eyJraWQiOiJySU5CYVdrWDU5UllMWG04Q08rMmIzejREYWVKenVZK2dnVEZET0U1eEpnPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIwMWY2YzFkYi0xODc0LTRjNzEtOTJkZC0zNjFiYWI5MWViMGUiLCJreWNTdGF0dXMiOiJQRU5ESU5HIiwiY3VzdG9tOnR5cGVPZkRpcmVjdG9yeUlkIjoiVVNFUiIsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX3dDVjJ6ZjkxRCIsInBob25lX251bWJlcl92ZXJpZmllZCI6ZmFsc2UsImNvZ25pdG86dXNlcm5hbWUiOiIwMWY2YzFkYi0xODc0LTRjNzEtOTJkZC0zNjFiYWI5MWViMGUiLCJ0eXBlT2ZEaXJlY3RvcnlJZCI6IlVTRVIiLCJyb2xlc0FwcCI6IkNIRUNLT1VUX0JBTktBQ0NPVU5ULFJFUVVFU1RfRklBRE8iLCJvcmlnaW5fanRpIjoiMDBhYWUzNjctNmYyYi00MjFmLWJiYzgtN2ZmZjJjOTI2YmQxIiwiYXVkIjoiNTU2aWdicG1oa3VkaHV0MTltMmh1cmRtdTQiLCJwaG9uZU51bWJlciI6Iis1NzMwMTQyOTgyNDAiLCJldmVudF9pZCI6Ijg2NTg1NTExLWQ2OTYtNGYwOS1iN2MwLWVlZTgyZGI0YjlmMyIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjU3ODUwMTEyLCJkaXJlY3RvcnlJZCI6ImE5YTg0M2M2LWVjYzQtNGZhNC05ODA1LTNlMGZjZjdjYmYwYyIsImN1c3RvbTpkaXJlY3RvcnlJZCI6ImQ2ZmRiZTRiLWRlMjEtNGIzNC1hYjczLWJmZjlkZGRlZTE5MiIsInBob25lX251bWJlciI6Iis1NzMwMTQyOTgyNDAiLCJwcmVmZXJyZWROYW1lIjoiY2FsaWNoZSAiLCJleHAiOjE2NTc4NTM3MTIsImlhdCI6MTY1Nzg1MDExMiwianRpIjoiYmM2MDI5MWUtZjFhNi00YTZiLThkMDAtYzI1MWE4YWMyZGIzIn0.BDxhh7Pgj4IPTt2WD8Tk4mC_4VcfHy4aN2QYgwS-0X239BKxkqd028-ZgegVeriXXnOh7nmwT6kju1fV77fgyHSBKZ_MQsIspokoAqWtboCE6_7jAruiOpk8cZTJYfWz5LLwhpx4B5u7l7WZp25AwThzmbuHTz3S3VRgvksmMuLOk_Ca729AUkH7yasDmOf2NKg8K5VmbAHv_PINeq_Ejkwwt_xGF_NBYYXYCb-uTA7uMlvW8Yw4gX0Rawcb9AA6YCxw3kGy2GaFoKOvPQ70faTuj30kDTs8TQFqhYYne0y_p-ez7Xq0l6A4cYH35ffFRAqBr37q0xyxXyb7iqzCNg'
          ],
          'Cache-Control': [ 'no-cache' ],
          Host: [ 'api-dev.tufiado.com' ],
          'Postman-Token': [ '5b29ae01-3edb-4257-a037-69f36542acb3' ],
          'User-Agent': [ 'PostmanRuntime/7.29.0' ],
          'X-Amzn-Trace-Id': [ 'Root=1-62d0cb93-1795477b250cd1e113591444' ],
          'X-Forwarded-For': [ '191.92.232.43' ],
          'X-Forwarded-Port': [ '443' ],
          'X-Forwarded-Proto': [ 'https' ]
        },
        queryStringParameters: null,
        multiValueQueryStringParameters: null,
        pathParameters: { cardId: '4111111111111111' },
        stageVariables: null,
        requestContext: {
          resourceId: '73x7j9',
          resourcePath: '/{cardId}',
          operationName: 'getCard',
          httpMethod: 'GET',
          extendedRequestId: 'VSS_EHPQIAMFW4Q=',
          requestTime: '15/Jul/2022:02:06:11 +0000',
          path: '/cards/4111111111111111',
          accountId: '950166505146',
          protocol: 'HTTP/1.1',
          stage: 'v1',
          domainPrefix: 'api-dev',
          requestTimeEpoch: 1657850771464,
          requestId: 'afd062ce-68fb-4357-b67f-edf4da456f8b',
          identity: {
            cognitoIdentityPoolId: null,
            accountId: null,
            cognitoIdentityId: null,
            caller: null,
            sourceIp: '191.92.232.43',
            principalOrgId: null,
            accessKey: null,
            cognitoAuthenticationType: null,
            cognitoAuthenticationProvider: null,
            userArn: null,
            userAgent: 'PostmanRuntime/7.29.0',
            user: null
          },
          domainName: 'api-dev.tufiado.com',
          apiId: 'lujdi6bd08'
        },
        body: null,
        isBase64Encoded: false
      }
] 