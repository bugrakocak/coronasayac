const formatDateKey = (date: string, isFullYear = false) => {
  const [month, day, year] = date.split('/');
  const formattedDay = day.length === 1 ? `0${day}` : day;
  const formattedMonth = month.length === 1 ? `0${month}` : month;
  const formattedYear = isFullYear ? `20${year}` : year;
  return `${formattedDay}/${formattedMonth}/${formattedYear}`;
};

export default formatDateKey;
