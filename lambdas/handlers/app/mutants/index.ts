/**
* @author Carlos Tello
* @file mutants/index.ts
* @description adnManager, save and get DynamoDB
*/

import { errorApi, generalError, generalResult } from "../../../../layers/common/apiResponses";
import { analyzeRowsOrColumns, analyzeDiagonals} from "./index.service";
import { v1 as uuidv1 } from 'uuid';
import { adnDTO, saveAdn } from "../adn/adnManager";
export enum Direction {
    Rows = 1,
    Columns = 2,
  }

export type Matrix = string[][];


/**
* Principal Function
* @param { event }  - eventProcess
* @return { return } Json Result.
*/
export const handler = async event => {
    try {
        let sumSecuences = 0;
        let DNA: Matrix = [];
        const {body} = event;        
        const array: string[] = JSON.parse(body)?.dna;
        array.map(item => {
            DNA = [...DNA, Array.from(item)];
        });
        sumSecuences += analyzeRowsOrColumns(DNA,Direction.Rows);
        sumSecuences += analyzeRowsOrColumns(DNA,Direction.Columns);
        sumSecuences += analyzeDiagonals(DNA);

        const adn: adnDTO = {
            adnId: uuidv1(),
            adnString: array,
        }
        if (sumSecuences > 1){
            adn.isMutant = true;
            await saveAdn(adn)
            return generalResult('Mutante');
        }else{
            adn.isMutant = false;
            await saveAdn(adn)
            return generalError('No-Mutante');
        } 
    } catch (error) {
        return errorApi(error);
    }
};

