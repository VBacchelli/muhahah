const decFirstDate = (currentTime) => {
  let xmasDate = new Date(currentTime.getFullYear() + "-12-01T00:00:00");
  /*if (currentTime.getTime() > xmasDate.getTime()) {
    let nextYear = currentTime.getFullYear() + 1;
    xmasDate = new Date(nextYear + "-12-01T00:00:00");
  }*/
  return xmasDate;
};

document.addEventListener("DOMContentLoaded", () => {
  // Unix timestamp (in seconds) to count down to
  let deadline = decFirstDate(new Date()).getTime() / 1000;
  const btn = document.querySelector('.appear-button');
  const fd = document.querySelector('.flipdown')
      
  // Set up FlipDown
  let flipdown = new FlipDown(deadline)

    // Start the countdown
    .start()

    // Do something when the countdown ends
    .ifEnded(() => {
      console.log("The countdown has ended!");
      btn.style.display='unset';
      fd.style.display='none';
    });
});

setTimeout(() => {
    const message = document.querySelector('.message');
    if (message) {
        message.style.display = 'none';
    }
}, 5000); // Matches the animation duration
