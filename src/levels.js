import Brick from "/src/brick";

export function buildLevel(game, level) {
  let bricks = [];

  level.forEach((row, rowIdx) => {
    row.forEach((brick, brickIdx) => {
      if (brick === 1) {
        bricks.push(new Brick(game, { x: 80 * brickIdx, y: 75 + 24 * rowIdx }));
      }
    });
  });
  return bricks;
}

export const level1 = [[0, 0, 0, 0, 0, 0, 0, 1, 0, 0]];

export const level2 = [
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];
