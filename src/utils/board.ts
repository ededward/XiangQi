import { COLS } from "../data/boardConstants";

export function positionToRowCol(position:number) {
    const index = position - 1;

    return {
        row: Math.floor(index / COLS),
        col: index % COLS
    };
}

export function rowColToPosition(row:number, col:number) {
    return row * COLS + col + 1;
}