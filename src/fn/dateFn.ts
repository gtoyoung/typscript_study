type ClockTime = {
  date: Date;
  ampm: string;
};

// 단순 Date 객체를 넘겨주는 함수
const createClockTime = (date: Date): Date => date;

// 넘겨진 Date 객체로 새로운 ClockTime 객체를 생성
const appendAMPM = (date: Date): ClockTime => ({
  date,
  ampm: date?.getHours() >= 12 ? "PM" : "AM",
});

// 시간 속성을 추가하는 함수
const civilianHours = (clockTime: ClockTime) => {
  const hours = clockTime.date.getHours();
  return {
    ...clockTime,
    hours: hours > 12 ? hours - 12 : hours,
  };
};

// Date 속성을 제거하는 함수
const removeDate = (clockTime: ClockTime) => {
  let newTime = { ...clockTime };
  // delete는 객체에서 특정 프로퍼티를 삭제하는 명령어
  // 삭제하고 나면 true를 반환
  delete newTime.date;
  return newTime;
};

// 함수들을 연결하는 함수
const compose =
  (...fns: Function[]): any =>
  (arg: Date) =>
    fns.reduce((composed, f) => f(composed), arg);

export const clockTime = compose(
  createClockTime,
  appendAMPM,
  civilianHours,
  removeDate
)(new Date());
