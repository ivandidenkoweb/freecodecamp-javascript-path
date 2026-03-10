function getAverage(arr) {
  let sum = 0;

  for (let num of arr) {
    sum += num;
  }

  return sum / arr.length;
}

function getGrade(grade) {
  let message =
    grade == 100
      ? "A+"
      : grade <= 99 && grade >= 90
        ? "A"
        : grade <= 89 && grade >= 80
          ? "B"
          : grade <= 79 && grade >= 70
            ? "C"
            : grade <= 69 && grade >= 60
              ? "D"
              : "F";
  return message;
}

function hasPassingGrade(x) {
  if (getGrade(x) !== "F") {
    return true;
  } else {
    return false;
  }
}

function studentMsg(arr, grade) {
  console.log(hasPassingGrade(grade));
  let msg;

  if (hasPassingGrade(grade)) {
    msg = `Class average: ${getAverage(arr)}. Your grade: ${getGrade(grade)}. You passed the course.`;
  } else {
    msg = `Class average: ${getAverage(arr)}. Your grade: ${getGrade(grade)}. You failed the course.`;
  }

  return msg;
}
