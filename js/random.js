function getRandom(max, win) {
    const getComp = localStorage.getItem("getComp");

    if (getComp === "true") {
        alert("이미 참여하셨습니다. ");
        return;
    }

    const rd = Math.floor(Math.random() * max) + 1;
    const top = max - win;

    if (rd >= top) {
        alert("끼끼의 수제선물 당첨입니다. ");
    }
    else {
        alert("초콜릿 당첨입니다. ");
    }

    localStorage.setItem("getComp", "true");
}

window.addEventListener("load", () => {
    localStorage.setItem("getComp", "false");
});