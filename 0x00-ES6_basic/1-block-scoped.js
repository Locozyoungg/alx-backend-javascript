export default function taskBlock(trueOrFalse) {
  let task = false;  // Initialize task as false using let
  const task2 = true;  // Initialize task2 as true using const

  if (trueOrFalse) {
    let task = true;  // Define task again within the block scope using let
    const task2 = false;  // Define task2 again within the block scope using const
    return [task, task2];  // Return the block-scoped variables
  }

  return [task, task2];  // Return the original variables
}

