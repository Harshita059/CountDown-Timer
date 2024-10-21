// Set the date for the launch (e.g., December 31, 2024, 00:00:00)
const launchDate = new Date("Dec 31, 2024 00:00:00").getTime();

const countdown = () => {
  const now = new Date().getTime();
  const timeRemaining = launchDate - now;

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Display the result in the corresponding elements
  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;

  // If the countdown is over, display some text
  if (timeRemaining < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "<h2>Launched!</h2>";
  }
};

// Update the countdown every second
const x = setInterval(countdown, 1000);
