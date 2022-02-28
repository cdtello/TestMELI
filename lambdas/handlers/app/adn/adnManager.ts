/**
* @author Carlos Tello
* @file adnManager.ts
* @description adnManager, save and get DynamoDB
*/

const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();

export type adnDTO = {
    adnId: string,
    adnString: string[],
    isMutant?: boolean
};

/**
* Save ADN
* @param { params } adn - ADN to Save in DynamoDB
* @return { True } result
*/
export const saveAdn = adn =>{
    const params = {
        TableName: process.env.MUTANT_ADN_TABLE_DYNAMO,
        Item: adn
    };
    return dynamo.put(params).promise();
};

/**
* Get All ADNs
* @param { } () params
* @return { Items[] } result
*/
export const getAdn = () =>{
    const params = {
        TableName: process.env.MUTANT_ADN_TABLE_DYNAMO,
    };
    return dynamo.scan(params).promise();
};