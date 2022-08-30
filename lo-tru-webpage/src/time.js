import dayjs from 'dayjs';

var now = dayjs();
var birthday = dayjs('1999-04-30');

export default now.diff(birthday, 'year');
