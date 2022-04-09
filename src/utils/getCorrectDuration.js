export const getCorrectDuration = (number) => {
  if (number > 10 && number < 20) {
    return `${number} минут`;
  } else if (number % 10 === 1) {
    return `${number} минута`;
  } else if (number % 10 > 1 && number % 10 < 5) {
    return `${number} минуты`;
  } else {
    return `${number} минут`;
  }
};
