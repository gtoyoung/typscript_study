// 구형 번호
const oldPhoneNums = ["011", "016", "017", "018", "019"];

// 모든 - 을 하트로 변경하는 함수
const replaceSpaceToHeart = (str: string): string =>
  str.replaceAll(/[-]/g, "♥");

// 숫자가 아닌경우에는 빈값으로 치환
const replaceFilterNum = (str: string): string => str.replaceAll(/[^0-9]/g, "");

// 폰번호 형식으로 변경
const formatToPhone = (str: string): string => {
  const target = str.replace(/\D/g, "").substring(0, 11);
  const first = target.substring(0, 3);
  let second = target.substring(3, 7);
  let third = target.substring(7, 11);

  // 구형 번호일 경우
  if (oldPhoneNums.includes(first)) {
    second = target.substring(3, 6);
    third = target.substring(6, 10);
    if (target.length > 6) {
      return `${first}-${second}-${third}`;
    } else if (target.length > 3) {
      return `${first}-${second}`;
    } else {
      return `${first}`;
    }
  } else {
    if (target.length > 7) {
      return `${first}-${second}-${third}`;
    } else if (target.length > 3) {
      return `${first}-${second}`;
    } else {
      return `${first}`;
    }
  }
};

// 함수연결
const compose =
  (...fns: Function[]) =>
  (arg: string) =>
    fns.reduce((composed, f) => f(composed), arg);

export const phoneNum = compose(
  replaceFilterNum,
  formatToPhone,
  replaceSpaceToHeart
);
