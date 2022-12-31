import { readFile } from 'fs';

function readInputFile(filePath: string) {
    return new Promise<string>((resolve, reject) => {
        readFile(filePath, 'utf-8', (err, data) => {
            if (err) {
                reject(err);
            }
            resolve(data);
        });
    });
}

export default abstract class BaseSolver {
    private delimiter: string;

    constructor(delimiter: string = "\n") {
        this.delimiter = delimiter
    }

    abstract process(line: string): void;
    abstract getResult(): any;

    async run(inputFilePath: string = "input.data") {
        (await readInputFile(inputFilePath))
            .split(this.delimiter)
            .forEach(this.process);

        console.log(this.getResult());
    }
}

