const today = new Date();
const todayDate = document.getElementById("to-day");
const writeDate = document.getElementById("write_date");

if (writeDate) {
    writeDate.value = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate() + 1}`;
    writeDate.min = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate() + 1}`;
}

if (todayDate) {
    todayDate.textContent = `${today.getMonth() + 1}월 ${today.getDate()}일생 여러분 생일 축하드립니다🥳`;
}

const birthdayMonth = 7;
const birthdayDay = 7;

let birthday = new Date(today.getFullYear(), birthdayMonth - 1, birthdayDay);

if (today > birthday) {
    birthday.setFullYear(today.getFullYear() + 1);
}

// 생일까지 남은 일수 계산
const differenceTime = birthday.getTime() - today.getTime();
const differenceDays = Math.ceil(differenceTime / (1000 * 60 * 60 * 24));

// 생일까지 남은 D-Day 출력
const DDay = document.getElementById("d-day");
if (DDay) {
    DDay.textContent = differenceDays === 0 ? "오늘 생일!" : `D - ${differenceDays}`;
}

const DDayInfo = document.getElementById("d-day_info");
if (DDayInfo) {
    DDayInfo.textContent = differenceDays === 0 ? "오늘이 생일입니다. " : `생일까지 ${differenceDays}일 남았습니다. `
}