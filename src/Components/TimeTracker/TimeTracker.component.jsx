import { useEffect, useState } from 'react';
let timeOnPage = 0;
let timer = null;

const runTimer = () => {
	return setInterval(() => {
		++timeOnPage;
	}, 1000);
};

const clearWrapper = (runner) => {
	clearInterval(runner);
	return false;
};

const startTimerOnPage = () => {
	// Initial setup
	timer = runTimer();

	// Event listeners
	window.onfocus = (e) => {
		// Conditional execution are for cross browser compatibility on focus event
		timer = timer ? timer : runTimer();
	};

	window.onblur = (e) => {
		timer = clearWrapper(timer);
	};
};

const getTimeOnPage = () => {
	return timeOnPage;
};

const clearTimerOnPage = () => {
	if (timer) {
		timer = clearWrapper(timer);
	}
};

const TimeTracker = () => {
  const [timeOnPage, setTimeOnPage] = useState(0);

  useEffect(() => {
    startTimerOnPage();

    const interval = setInterval(() => {
      const activeTime = getTimeOnPage();
      setTimeOnPage(activeTime);
    }, 1000);

    return () => {
      clearTimerOnPage();
      clearInterval(interval);
    };
  }, []);

  const formatTime = (milliseconds) => {
    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);

    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes % 60).padStart(2, '0');
    const formattedSeconds = String(seconds % 60).padStart(2, '0');

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  };

  return (
    <div>
      <h2>Time on Page</h2>
      <p>{formatTime(timeOnPage)}</p>
      {console.log(timeOnPage)}
    </div>
  );
};

export default TimeTracker;