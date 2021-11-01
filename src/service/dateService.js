const timeStampDisplay = rawDate => {
  if (!rawDate) return 'pls input date';
  const dateObj = new Date(rawDate);
  const formattedDate = new Intl.DateTimeFormat('en-GB', {
    dateStyle: 'short',
    timeStyle: 'short',
    hour12: true,
  }).format(dateObj);
  return formattedDate.toUpperCase();
};

const dateOnly = rawDate => {
  if (!rawDate) return 'pls input date';
  const dateObj = new Date(rawDate);
  const formattedDate = new Intl.DateTimeFormat('en-GB', {
    dateStyle: 'short',
    hour12: true,
    timeZone: 'Asia/Bangkok',
  }).format(dateObj);
  return formattedDate.toUpperCase();
};

export { timeStampDisplay, dateOnly };
