export function updateTimer(timer: number) {
  const timerDecrementor = 2.5;
  const timerThreshold = 40;

  if (timer <= timerThreshold) {
    return timerThreshold;
  }

  return timer - timerDecrementor;
}
