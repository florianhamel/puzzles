export function finalValueAfterOperations(operations: string[]): number {
  let count = 0;
  for (const operation of operations) {
    count = operation.includes('+') ? count + 1 : count - 1;
  }
  return count;  
};