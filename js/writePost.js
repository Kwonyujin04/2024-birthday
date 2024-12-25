const myPost = JSON.parse(localStorage.getItem("myPost")) || [];
const buttons = document.querySelectorAll(".color_button");
const box = document.getElementById("post_content");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const color = button.getAttribute("data-color");
        box.style.backgroundColor = color;
    });
});

document.getElementById("register").addEventListener("click", () => {
    const toName = document.getElementById("to_name").value.trim();
    const content = document.getElementById("content").value.trim();
    const backColor = box.style.backgroundColor;

    // 입력값 검증 (빈 값 확인)
    if (!toName || !content) {
        alert("입력하지 않은 내용이 있습니다. ");
        return;
    }

    // 새로운 게시글 객체 생성
    const newPost = {
        id: myPost.length + 1,
        to_name: toName,
        from_name: '권유진',
        postContent: content,
        date: writeDate.value,
        back_color: backColor || "#CBF3FE"
    };

    // myPost 배열에 추가
    myPost.push(newPost);

    // 로컬스토리지에 저장
    localStorage.setItem("myPost", JSON.stringify(myPost));

    alert("작성이 완료되었습니다. 메시지는 마이페이지에서 확인할 수 있습니다.");
    console.log(newPost);

    // 입력 필드 초기화
    document.getElementById("to_name").value = "";
    document.getElementById("content").value = "";
});

// 페이지 로드 시 기존 데이터를 불러와 확인
window.addEventListener("DOMContentLoaded", () => {
    if (myPost.length > 0) {
        console.log("저장된 게시글 목록:", myPost);
    } else {
        console.log("저장된 게시글이 없습니다.");
    }
});
