const grid = [];
for (let x = 0; x < 200; x++) {
  for (let y = 0; x < 200; x++) {
    grid[x] = Array.isArray(grid[x]) ? grid[x] : [];
    grid[x][y] = { x, y };
  }
}
console.log(grid);
