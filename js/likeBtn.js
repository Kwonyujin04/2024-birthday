export function clickLike() {
    const likeCount = localStorage.getItem("likeCount");

    if (likeCount === "false") {
        localStorage.setItem("likeCount", "true"); // 좋아요 설정
        console.log("좋아요가 왔습니다."); // 좋아요가 처음 눌린 경우
        changeLink();
    } else if (likeCount === "true") {
        console.log("좋아요가 있습니다. "); // 이미 좋아요가 눌린 경우
    }
}

function changeLink() {
    const Link = document.getElementById("random_link");

    if (Link) { // 링크 요소가 존재하는지 확인
        const likeCount = localStorage.getItem("likeCount");
        if (likeCount === "true") {
            // 좋아요가 눌린 상태일 때 링크 설정
            Link.href = "/BDB_random.html";
            console.log(Link.href);
        }
        else {
            // 기본 링크로 설정
            Link.href = "/BDB_random_hint.html";
        }
    } else {
        console.error("menu_detail 클래스를 가진 링크 요소를 찾을 수 없습니다.");
    }
}

window.addEventListener("load", () => {
    // 로컬 스토리지에 likeCount가 없으면 기본값 false로 설정
    if (localStorage.getItem("likeCount") === null) {
        localStorage.setItem("likeCount", "false");
    }
    else {
        localStorage.setItem("likeCount", "false");
    }
    changeLink(); // 페이지 로드 시 링크 설정
});