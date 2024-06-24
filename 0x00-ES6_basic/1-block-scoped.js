export default function taskBlock(trueOrFalse) {
  let task = false;  // Use let instead of var for mutable variable
  const task2 = true;  // Use const instead of var for constant variable

  if (trueOrFalse) {
    task = true; 
    // task2 = false; // Uncommenting this line would cause an error since task2 is declared as const
  }

  return [task, task2];
}

