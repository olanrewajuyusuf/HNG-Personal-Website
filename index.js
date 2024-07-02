window.onload = function () {
  // ===> Display current UTC time
  function updateTime() {
    const currentTimeUTC = document.querySelector(
      '[data-testid="currentTimeUTC"]'
    );
    const now = new Date();
    currentTimeUTC.textContent = now.toUTCString();
  }
  updateTime();
  setInterval(updateTime, 1000);

  // ===> Display current day of the week
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDay = document.querySelector('[data-testid="currentDay"]');
  const now = new Date();
  currentDay.textContent = days[now.getUTCDay()];
};
