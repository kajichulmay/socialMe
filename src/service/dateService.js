const timeStampDisplay = (rawDate) => {
  if (!rawDate) return 'pls input date';
  const dateObj = new Date(rawDate);
  const formattedDate = new Intl.DateTimeFormat('en-GB',
    {
      dateStyle: 'short',
      timeStyle: 'short',
      hour12: true,
    }
  ).format(dateObj);
  return formattedDate.toUpperCase();
};

export { timeStampDisplay };