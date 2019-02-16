export const checkGame = grid => {;
  return(checkWinner(grid));
};

const checkWinner = (grid) => (
  // Horizontal checks
  grid[0][0] === grid[0][1] && grid[0][1] === grid[0][2] ||
  grid[1][0] === grid[1][1] && grid[1][1] === grid[1][2] ||
  grid[2][0] === grid[2][1] && grid[2][1] === grid[2][2] ||
  
  // Vertical checks
  grid[0][0] === grid[1][0] && grid[1][0] === grid[2][0] ||
  grid[0][1] === grid[1][1] && grid[1][1] === grid[2][1] ||
  grid[0][2] === grid[1][2] && grid[1][2] === grid[2][2] ||
  
  // Diagonal checks
  grid[0][0] === grid[1][1] && grid[1][1] === grid[2][2] ||
  grid[2][0] === grid[1][1] && grid[1][1] === grid[0][2]
);