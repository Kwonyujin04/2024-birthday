const today = new Date();
const todayDateElement = document.getElementById("to-day");

if (todayDateElement) {
    todayDateElement.textContent = `${today.getMonth() + 1}월 ${today.getDate()}일 생 여러분 생일 축하드립니다.`;
}

const birthdayMonth = 9;
const birthdayDay = 12;

let birthday = new Date(today.getFullYear(), birthdayMonth - 1, birthdayDay);

if (today > birthday) {
    birthday.setFullYear(today.getFullYear() + 1);
}

// 생일까지 남은 일수 계산
const differenceInTime = birthday.getTime() - today.getTime();
const differenceInDays = Math.ceil(differenceInTime / (1000 * 60 * 60 * 24));

// 생일까지 남은 D-Day 출력
const birthdayDDayElement = document.getElementById("d-day");
birthdayDDayElement.textContent = differenceInDays === 0 ? "오늘이 생일입니다!" : `D - ${differenceInDays}`;