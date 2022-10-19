/* eslint-disable radix */
/* eslint-disable no-array-constructor */
export const currentDate = lan => {
  if (lan === 'Malayalam') {
    weekday = new Array(
      'ഞായറാഴ്ച',
      'തിങ്കളാഴ്ച',
      'ചൊവ്വാഴ്ച',
      'ബുധനാഴ്ച',
      'വ്യാഴാഴ്ച',
      'വെള്ളിയാഴ്ച',
      'ശനിയാഴ്ച',
    );
  } else {
    weekday = new Array(
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    );
  }

  var objToday = new Date(),
    weekday,
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

  if (lan === 'Malayalam') {
    curHour =
      objToday.getHours() > 12
        ? objToday.getHours() > 16
          ? 'ഗുഡ് ഈവനിംഗ്'
          : 'ഗുഡ് ആഫ്റ്റർനൂൺ'
        : 'സുപ്രഭാതം';
  }

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
