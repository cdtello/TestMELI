/**
* @author Carlos Tello
* @file stats/service.ts
* @description adnManager, save and get DynamoDB
*/

import { adnDTO } from "../adn/adnManager";

export type resultStats = {
    count_mutant_dna: number,
    count_human_dna: number,
    ratio: number
}


/**
* Analyze all DynamoDB Items
* @param { adnDTO[] }  - ADN-array to Process
* @return { resultStats } Json Result.
*/
export const getStats = (adns: adnDTO[]): resultStats => {
    const mutant = adns.filter(adn => adn.isMutant === true)
    const human = adns.filter(adn => adn.isMutant === false)
    const ratio = (mutant.length / human.length)
    const result = {
        count_mutant_dna: mutant.length,
        count_human_dna: human.length,
        ratio: ratio
    }
    return result;
}