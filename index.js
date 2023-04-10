const refs = {
  daysEl: document.querySelector('span[data-value="days"]'),
  hoursEl: document.querySelector('span[data-value="hours"]'),
  minsEl: document.querySelector('span[data-value="mins"]'),
  secsEl: document.querySelector('span[data-value="secs"]'),
};

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;

    this.start();
  }

  start() {
    setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = this.targetDate - currentTime;
      this.updateClockFace(this.getTimeComponents(deltaTime));
    }, 1000);
  }

  getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }

  updateClockFace({ days, hours, mins, secs }) {
    refs.daysEl.textContent = days;
    refs.hoursEl.textContent = hours;
    refs.minsEl.textContent = mins;
    refs.secsEl.textContent = secs;
  }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Apr 9, 2024'),
});
