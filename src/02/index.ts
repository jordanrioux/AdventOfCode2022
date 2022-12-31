import BaseSolver from "../BaseSolver";

// The way the problem is presented, we don't need any additional data and we can hardcore everything directly within the map
// to get the result points which is calculated for the RoundResult(Lose|Draw|Win) + SuggestedMove against the opponent and
// prevent the multiple conditions. Although, the code might not be as obvious at first with this approach.
// See interface-example.ts for example of using an interface to hold more data if required.
const PointsBasedOnMoveAndEndingMap = new Map<string, number>([
    ["AX", 0 + 3],
    ["AY", 3 + 1],
    ["AZ", 6 + 2],
    ["BX", 0 + 1],
    ["BY", 3 + 2],
    ["BZ", 6 + 3],
    ["CX", 0 + 2],
    ["CY", 3 + 3],
    ["CZ", 6 + 1],
]);

class Solver extends BaseSolver {
    private total = 0;      

    process = (line: string) => {
        const [opponentMove, suggestedEnding] = line.split(" ");
        this.total += PointsBasedOnMoveAndEndingMap.get(`${opponentMove}${suggestedEnding}`) ?? 0;
    }

    getResult = () => this.total;  
}

new Solver().run();