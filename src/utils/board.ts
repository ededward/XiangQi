export function positionToRowCol(position:number) {
    const index = position - 1;

    return {
        row: Math.floor(index / 9),
        col: index % 9
    };
}

export function rowColToPosition(row:number, col:number) {
    return row * 9 + col + 1;
}