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
  // curHour =
  //   objToday.getHours() > 12
  //     ? objToday.getHours() - 12
  //     : objToday.getHours() < 10
  //     ? '0' + objToday.getHours()
  //     : objToday.getHours(),
  // curMinute =
  //   objToday.getMinutes() < 10
  //     ? '0' + objToday.getMinutes()
  //     : objToday.getMinutes(),
  // curSeconds =
  //   objToday.getSeconds() < 10
  //     ? '0' + objToday.getSeconds()
  //     : objToday.getSeconds(),
  // curMeridiem = objToday.getHours() > 12 ? 'PM' : 'AM';
  var today = dayOfWeek + ', ' + curMonth + ' ' + dayOfMonth + ', ' + curYear;
  return today;
};
