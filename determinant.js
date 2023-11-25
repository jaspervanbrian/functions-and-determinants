const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const determinant = (matrix) => {
  // Base case: if the matrix is 1x1, return the single element
  if (matrix.length === 1 && matrix[0].length === 1) {
    return matrix[0][0];
  }

  // Base case: if the matrix is 2x2, calculate the determinant directly
  if (matrix.length === 2 && matrix[0].length === 2) {
    return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
  }

  let det = 0;

  // Iterate through the first row to expand the determinant
  for (let i = 0; i < matrix[0].length; i++) {
    // Calculate the cofactor for each element in the first row
    const cofactor = matrix[0][i] * determinant(getSubmatrix(matrix, 0, i));

    // Add or subtract the cofactor based on the position in the first row
    det += (i % 2 === 0 ? 1 : -1) * cofactor;
  }

  return det;
}

// Helper function to get the submatrix excluding the specified row and column
const getSubmatrix = (matrix, rowToRemove, colToRemove) => {
  return matrix
    .filter((row, rowIndex) => rowIndex !== rowToRemove)
    .map((row) => row.filter((_, colIndex) => colIndex !== colToRemove));
}

// Testing function
const test = () => {
  // Get the user input
  rl.question('Enter a matrix to find the determinant: ', (input) => {
    if (!input || input.trim() === "") return rl.close()

    const matrix = JSON.parse(input)
    const result = determinant(matrix)
    console.log(`Determinant of the matrix:`);
    console.log(result);
  });
};

// Example usage:
const example = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const det = determinant(example);
console.log('Example matrix: ', example)
console.log(`Determinant of the example matrix:`);
console.log(det);

test()
