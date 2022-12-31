import BaseSolver from "../BaseSolver";

const toNumber = (caloryAsString: string) => parseInt(caloryAsString, 10);
const sum = (total: number, currentValue: number) => total + currentValue;

class Solver extends BaseSolver {
    private sums: number[] = [];

    constructor() {
        super("\n\n");        
    }

    process = (line: string) => {
        const caloriesSum = line.split("\n").map(toNumber).reduce(sum);        
        this.sums.push(caloriesSum);
    }        
    
    getResult = () => {
        this.sums.sort((a, b) => b - a);
        return this.sums.splice(0, 3).reduce(sum);
    }
}

new Solver().run();