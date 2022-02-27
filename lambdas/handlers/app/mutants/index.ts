import { generalError, generalResult } from "../../../../layers/common/apiResponses";
import { analyzeRowsOrColumns, analyzeDiagonals} from "./index.service";
export enum Direction {
    Rows = 1,
    Columns = 2,
  }


export type Matrix = string[][];
export const handler = async event => {
    let sumSecuences = 0;
    let DNA: Matrix = [];
    const {body} = event;
    
    const array: string[] = JSON.parse(body)?.dna;
    array.map(item => {
        DNA = [...DNA, Array.from(item)];
    });
    console.log('MATRIX DNA ->',DNA);
    sumSecuences += analyzeRowsOrColumns(DNA,Direction.Rows);
    sumSecuences += analyzeRowsOrColumns(DNA,Direction.Columns);
    sumSecuences += analyzeDiagonals(DNA);

    if (sumSecuences > 1){
        return generalResult('Mutante');
    } return generalError('No-Mutante');
    
};

