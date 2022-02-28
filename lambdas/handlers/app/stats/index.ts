/**
* @author Carlos Tello
* @file stats/index.ts
* @description adnManager, save and get DynamoDB
*/

import { errorApi, generalResult } from "../../../../layers/common/apiResponses";
import { getAdn } from "../adn/adnManager";
import { getStats } from "./index.service";


/**
* Principal Function
* @param { event }  - eventProcess
* @return { return } Json Result.
*/
export const handler = async event => {
    try {
        const result = await getAdn();
        const stats = getStats(result.Items);
        return generalResult(stats);  
    } catch (error) {
        return errorApi(error)
    }
      
};