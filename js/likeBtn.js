export function clickLike() {
    const likeCount = localStorage.getItem("likeCount");
    const kkikki = document.getElementById("kkikki_mini");

    if (likeCount === "false" || likeCount === null) {
        localStorage.setItem("likeCount", "true"); // 좋아요 설정
        kkikki.classList.add('active');
        alert("메뉴창에 끼끼가 놀러왔어요! 선물받기를 눌러볼까요? ")
        changeLink();
    } else if (likeCount === "true") {
        kkikki.classList.add('active');
    }
}

function changeLink() {
    const Link = document.getElementById("random_link");

    if (Link) { // 링크 요소가 존재하는지 확인
        const likeCount = localStorage.getItem("likeCount");
        if (likeCount === "true") {
            // 좋아요가 눌린 상태일 때 링크 설정
            Link.href = "BDB_random.html";
        }
        else {
            // 기본 링크로 설정
            Link.href = "BDB_random_hint.html";
        }
    } else {
        console.error("menu_detail 클래스를 가진 링크 요소를 찾을 수 없습니다.");
    }
}

function apKkikki() {
    const kkikki = document.getElementById("kkikki_mini");
    const likeCount = localStorage.getItem("likeCount");
    if (likeCount === "true") {
        kkikki.classList.add('active');
    }
    else {
        kkikki.classList.remove('active');
    }
}

window.addEventListener("load", () => {
    if (localStorage.getItem("likeCount") === null) {
        localStorage.setItem("likeCount", "false");
    }
    changeLink();
    apKkikki();
});