import { Direction, Matrix } from ".";

const NumSequence:number = 4;
export const analyzeRowsOrColumns = (matrix: Matrix, type:Direction): number => {
    const maxDeep = matrix.length;
    let resultColumns = 0;
    let sum: number = 1;
    let prev:string = '';
    let current: string = '';
    for (let x = 0; x < maxDeep; x++) {
        sum = 1;
        prev = '';
        current = '';
        for(let y = 0; y < maxDeep; y++){
            current = matrix[type===1?x:y][type===1?y:x];
            current === prev? sum++ : sum=1;
            if (sum == NumSequence) {
                console.log('Secuencia ->',current);
                resultColumns++;
            }
            prev = current            
        }
     }
    return resultColumns;
}
const analizeRow = (row:string[]): number => {
    const maxDeep = row.length;
    let resultColumns = 0;
    let sum: number = 1;
    let prev:string = '';
    let current: string = '';
    for(let y = 0; y < maxDeep; y++){
        current = row[y];
        current === prev? sum++ : sum=1;
        if (sum == NumSequence) {
            console.log('Secuencia ->',current);
            resultColumns++;
        }
        prev = current            
    }
    return resultColumns;
}

export const analyzeDiagonals = (matrix: Matrix): number => {
    let finalResult = 0;
    const maxDeep = matrix.length;
    const maxDiag = maxDeep - NumSequence;
    let matDiags: Matrix = [];
    let x1:number = 0;
    let y1:number = 0;
    let diagsLeft:string[] = [];
    let diagsRigth:string[] = [];
    
    
    for (let x = 0; x <= maxDiag; x++) {
        diagsLeft=[];
        diagsRigth=[];
        x1 = x;
        y1 = x;
        //Diagonal \-->
        for (let y = 0; y < maxDeep; y++) {
            if(x1 < maxDeep){
                diagsLeft=[...diagsLeft, matrix[x1][y]];
                if(y!==x1){
                    diagsRigth=[...diagsRigth, matrix[y][x1]];
                }
                
            }
            x1++;
        }
        if(diagsLeft.length){
            matDiags = [...matDiags,diagsLeft];
            finalResult += analizeRow(diagsLeft);
        }
        if(diagsRigth.length){
            matDiags = [...matDiags,diagsRigth];
            finalResult += analizeRow(diagsRigth);
        } 
        diagsLeft=[];
        diagsRigth=[];
        //Diagonal /-->
        console.log('**** Diag ****');
        for (let z = maxDeep-1; z > 0-1; z--) {
            if(y1 < maxDeep){
                diagsLeft=[...diagsLeft, matrix[y1][z]];
                if(z+y1 !== maxDeep-1){
                    diagsRigth=[...diagsRigth, matrix[z][y1]];
                }
                
            }
            y1++;
        }
        if(diagsLeft.length){
            matDiags = [...matDiags,diagsLeft];
            finalResult += analizeRow(diagsLeft);
        }
        if(diagsRigth.length){
            matDiags = [...matDiags,diagsRigth];
            finalResult += analizeRow(diagsRigth);
        }     
        
     }
     return finalResult;
}
