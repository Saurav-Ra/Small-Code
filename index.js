// Change 12 Hours to 24 Hours Time
// 12:05 AM -> 00:05
function convertTime(t) {
  const [time, modifier] = t.split(' ');
  let [hours, minutes] = time.split(':');
  hours = parseInt(hours);
  minutes = parseInt(minutes);

  if (modifier === 'PM' && hours !== 12) {
    hours += 12;
  } else if (modifier === 'AM' && hours === 12) {
    hours = 0;
  }
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(
    2,
    '0'
  )}`;
}
function convertTime2(t) {
  const [time, modifier] = t.split(' ');
  let [hours, minutes] = time.split(':');
  if (hours === '12') hours = '00';

  if (modifier === 'PM') hours = parseInt(hours) + 12;
  return `${hours}:${minutes}`;
}
console.log(convertTime('12:05 AM'));
console.log(convertTime2('12:05 PM'));
