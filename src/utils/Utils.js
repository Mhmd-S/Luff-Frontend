export const convertDateShort = (date) => {
    const dateObj = new Date(date);
    const now = new Date(); // Get the current date and time

    let dateStr;
    let timeStr = dateObj.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
  });

    // Check if the date is today, then display the time
    if (
        dateObj.getDate() === now.getDate() &&
        dateObj.getMonth() === now.getMonth() &&
        dateObj.getFullYear() === now.getFullYear()
    ) {
        dateStr = '';
    } else if (Math.abs(now - dateObj) < 7 * 24 * 60 * 60 * 1000) {
        // Check if the date is within the last 7 days (604800000 milliseconds)
        dateStr = dateObj.toLocaleDateString('en-US', { weekday: 'short' });
    } else {
        dateStr = dateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    }
    return `${dateStr} ${timeStr}`.trim();
  };

 export const convertDateLong = (date) => {
    const dateObj = new Date(date);
    const now = new Date(); // Get the current date and time

    let dateStr;
    let timeStr;

    // Check if the date is today, then display the time
    if (
        dateObj.getDate() === now.getDate() &&
        dateObj.getMonth() === now.getMonth() &&
        dateObj.getFullYear() === now.getFullYear()
    ) {
        dateStr = '';
        timeStr = dateObj.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        });
    } else if ( Math.abs(now - dateObj) < 2 * 24 * 60 * 60 * 1000 ){ // Check if the date was yesterday
        dateStr = 'Yesterday';
        timeStr = '';
    } else if (Math.abs(now - dateObj) < 7 * 24 * 60 * 60 * 1000) {
        // Check if the date is within the last 7 days (604800000 milliseconds)
        dateStr = dateObj.toLocaleDateString('en-US', { weekday: 'short' });
        timeStr = '';
    } else {
        dateStr = dateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        timeStr = '';
    }

    return `${dateStr} ${timeStr}`.trim();
};

