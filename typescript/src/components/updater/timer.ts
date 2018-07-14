export function updateTimer(timer: number) {
  let timerDecrementor = 2.5;
  let timerThreshold = 40;

  if (timer <= timerThreshold) return timerThreshold;

  return timer - timerDecrementor;
}
