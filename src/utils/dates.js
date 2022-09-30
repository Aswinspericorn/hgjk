/* eslint-disable radix */
/* eslint-disable no-array-constructor */
export const currentDate = () => {
  var objToday = new Date(),
    weekday = new Array(
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ),
    dayOfWeek = weekday[objToday.getDay()],
    dayOfMonth = objToday.getDate(),
    months = new Array(
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ),
    curMonth = months[objToday.getMonth()],
    curYear = objToday.getFullYear();
  var curHour =
    objToday.getHours() > 12
      ? objToday.getHours() > 16
        ? 'Good Evening'
        : 'Good Afternoon'
      : 'Good Morning';
  var today = dayOfWeek + ', ' + curMonth + ' ' + dayOfMonth + ', ' + curYear;

  return {date: today, time: curHour};
};

function dobFormat(value) {
  // if (value.type === "set") {
  value = new Date(value.nativeEvent.timestamp);
  var date = new Date(value).getDate() + 1;
  var month = new Date(value).getMonth() + 1;
  var year = new Date(value).getFullYear().toString().slice(-2);
  value =
    ('0' + date).slice(-2) +
    ('0' + month).slice(-2) +
    '/' +
    ('0' + year).slice(-2);
  // }

  return value;
}
export default dobFormat;
