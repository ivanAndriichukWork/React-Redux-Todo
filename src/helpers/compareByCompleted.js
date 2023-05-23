// Custom comparison function
export const compareByCompleted = (taskA, taskB) =>
  taskA.completed && !taskB.completed
    ? 1 // taskA comes after taskB
    : !taskA.completed && taskB.completed
    ? -1 // taskA comes before taskB
    : 0 // no change in ordering
