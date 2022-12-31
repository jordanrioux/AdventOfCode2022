/** 
 * @interface RoundInformation
 * @field {result} points given for the round result (0 for Lose, 3 for Draw, 6 for Win)
 * @field {move} points given for using the correct suggested move against the opponent
 */
interface RoundInformation {
    result: number;
    move: number;
}

const RoundInformationBasedOnMoveAndEndingMap = new Map<string, RoundInformation>([
    ["AX", { result: 0, move: 3 }],
    ["AY", { result: 3, move: 1 }],
    ["AZ", { result: 6, move: 2 }],
    ["BX", { result: 0, move: 1 }],
    ["BY", { result: 3, move: 2 }],
    ["BZ", { result: 6, move: 3 }],
    ["CX", { result: 0, move: 2 }],
    ["CY", { result: 3, move: 3 }],
    ["CZ", { result: 6, move: 1 }],
]);