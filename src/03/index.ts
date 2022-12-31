import BaseSolver from "../BaseSolver";
import { isLowerCase } from "../common";

function calculateScore(item: string) {
    if (isLowerCase(item)) {
        return item.charCodeAt(0) - 96;
    } 
    return item.charCodeAt(0) - 38;
}

class Solver extends BaseSolver {
    private sum = 0;
    private lines: string[] = [];

    process = (line: string) => {
        // The lines array is a patch as my process was originally done for reading line by line and not multiple lines at once...
        this.lines.push(line);
        if (this.lines.length !== 3) {
            return;
        }        
        const [firstElf, secondElf, thirdElf] = this.lines.splice(0); // Splice removes all elements from the array and return deleted elements as new array
        for (const item of firstElf) {
            if (secondElf.includes(item) && thirdElf.includes(item)) {
                this.sum += calculateScore(item);
                break;
            }
        }        
        
    }

    getResult = () => this.sum;
}

new Solver().run();