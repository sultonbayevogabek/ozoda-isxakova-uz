function startCountdown(durationInSeconds) {
  let remaining = durationInSeconds;
  const minutesElement = document.querySelector('[data-minutes]');
  const secondsElement = document.querySelector('[data-seconds]');

  const interval = setInterval(() => {
    const minutes = Math.floor(remaining / 60);
    const seconds = remaining % 60;

    minutesElement.textContent = String(minutes).padStart(2, "0");
    secondsElement.textContent = String(seconds).padStart(2, "0");

    if (remaining <= 0) {
      clearInterval(interval);
    }

    remaining--;
  }, 1000);
}

startCountdown(119);
