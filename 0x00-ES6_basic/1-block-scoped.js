export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    let task = true;  // New task variable scoped to this block
    let task2 = false; // New task2 variable scoped to this block
  }

  return [task, task2];
}
