function bouncingBall(h: number, bounce: number, window: number): number {
  if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) {
    return -1;
  }

  let count = 1; // Initial fall
  let currentHeight = h * bounce;

  while (currentHeight > window) {
    count += 2; // Count the bounce up and the bounce down
    currentHeight *= bounce;
  }

  return count;
}

//! Pending to checka