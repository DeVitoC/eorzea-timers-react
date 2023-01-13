const UpdateTime = ()=> {
  // const eorzeaMultiplier = 3600/175;

  const { hour, minute, second } = getEorzeaHourAndMinute();
  let date = new Date();
  date.setHours(hour, minute, second);
  // let time = date.toLocaleTimeString('en-US', { hour12: true });
  let time = `${hour <= 12 ? hour : (hour - 12)}:${minute > 9 ? minute : "0" + minute} ${hour < 12 ? "AM" : "PM"}`
  console.log(time);
  return time;
}

const getEorzeaHourAndMinute = ()=> {
  const eorzeaMultiplier = 3600/175;

  let date = new Date();
  let timeSince1970 = date.getTime() / 1000;
  let timeSinceFF1970 = timeSince1970 * eorzeaMultiplier;

  let secondsElapsedTodayFF = timeSinceFF1970 % 86400;
  let currentHour = Math.floor(secondsElapsedTodayFF / 3600);

  let secondsInCurrentHour = secondsElapsedTodayFF % 3600;
  let currentMinute = Math.floor(secondsInCurrentHour / 60);

  let secondsInCurrentMinute = secondsInCurrentHour % 60;
  let currentSecond = Math.floor(secondsInCurrentMinute);

  return {hour: currentHour, minute: currentMinute, second: currentSecond };
}

export default UpdateTime;