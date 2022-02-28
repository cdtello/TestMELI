/**
* @author Carlos Tello
* @file layers/common/apiResponses.ts
* @description adnManager, save and get DynamoDB
*/


/**
* return status 200 OK
* @param { data }  - data to response
* @return { status } Json Result.
*/
export const generalResult = (data?: unknown) => ({
    statusCode: 200,
    body: JSON.stringify(data)
})



/**
* return status 403 Forbidden
* @param { data }  - data to response
* @return { status } Json Result.
*/
export const generalError = (data?: unknown) => ({
    statusCode: 403,
    body: JSON.stringify(data)
})



/**
* return status 404 Error
* @param { data }  - data to response
* @return { status } Json Result.
*/
export const errorApi = (data?: unknown) => ({
    statusCode: 404,
    body: JSON.stringify(data)
})