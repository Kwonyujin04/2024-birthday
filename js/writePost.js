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

    const newPost = {
        id: myPost.length + 1,
        to_name: toName,
        from_name: '권유진',
        postContent: content,
        date: writeDate.value,
        back_color: backColor
    };

    myPost.push(newPost);
    alert("작성이 완료되었습니다. 메시지는 마이페이지에서 확인할 수 있습니다. ");
    console.log(myPost);
});