const thai = {
  name: 'thai',
  startYear: 1,
  yearLength: 365,
  epoch: 1721424,
  century: 20,
  weekStartDayIndex: 1,
  getMonthLengths(isLeap) {
    return [31, isLeap ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  },
  isLeap(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  },
  getLeaps(currentYear) {
    const leaps = [];
    if (currentYear === 0) return leaps;

    let year = currentYear > 0 ? 1 : -1;

    const condition = () =>
      currentYear > 0 ? year <= currentYear : currentYear <= year;
    const increase = () => (currentYear > 0 ? year++ : year--);

    while (condition()) {
      if (this.isLeap(year)) leaps.push(year);

      increase();
    }

    return leaps;
  },
  getDayOfYear({ year, month, day }) {
    let monthLengths = this.getMonthLengths(this.isLeap(year));

    for (let i = 0; i < month.index; i++) {
      day += monthLengths[i];
    }

    return day;
  },
  getAllDays(date) {
    const { year } = date;

    return (
      this.yearLength * (year - 1) +
      this.leapsLength(year) +
      this.getDayOfYear(date)
    );
  },
  leapsLength(year) {
    return (
      (((year - 1) / 4) | 0) +
      (-((year - 1) / 100) | 0) +
      (((year - 1) / 400) | 0)
    );
  },
  guessYear(days, currentYear) {
    let year = ~~(days / 365.24);

    return year + (currentYear > 0 ? 1 : -1);
  },
};

export default thai;

export const thai_th = {
  name: 'thai_th',
  months: [
    ['1_월', '1월'],
    ['2_월', '2월'],
    ['3_월', '3월'],
    ['4_월', '4월'],
    ['5_월', '5월'],
    ['6_월', '6월'],
    ['7_월', '7월'],
    ['8_월', '8월'],
    ['9_월', '9월'],
    ['10_월', '10월'],
    ['11_월', '11월'],
    ['12_월', '12월'],
  ],
  weekDays: [
    ['월요일', '월'],
    ['화요일', '화'],
    ['수요일', '수'],
    ['목요일', '목'],
    ['금요일', '금'],
    ['토요일', '토'],
    ['일요일', '일'],
  ],
  digits: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
  meridiems: [
    ['오전', 'AM'],
    ['오후', 'PM'],
  ],
};
