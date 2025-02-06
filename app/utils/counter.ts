export function countElapsedTime(): {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
} {
  const startDate = new Date("2023-10-06T03:20:00Z").getTime();

  const now = Date.now();
  const diff = Math.floor((now - startDate) / 1000);

  const days = Math.floor(diff / (24 * 3600));
  const hours = Math.floor((diff % (24 * 3600)) / 3600);
  const minutes = Math.floor((diff % 3600) / 60);
  const seconds = diff % 60;

  return { days, hours, minutes, seconds };
}
