function getRandom(max, win) {
    const getComp = localStorage.getItem("getComp");

    if (getComp === "true") {
        alert("이미 참여하셨습니다. ");
        return;
    }

    const rd = Math.floor(Math.random() * max) + 1;
    const top = max - win;

    if (rd >= top) {
        alert("끼끼의 선물 당첨입니다! 설명을 참고하시고 메일을 보내면 선물을 드립니다. ");
    }
    else {
        alert("다음 기회에! ");
    }

    localStorage.setItem("likeCount", "false");
    localStorage.setItem("getComp", "true");
}

window.addEventListener("load", () => {
    localStorage.setItem("getComp", "false");
});