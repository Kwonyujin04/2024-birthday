let myPost = JSON.parse(localStorage.getItem("myPost"));
const backColor = box.style.backgroundColor;

document.getElementById("register").addEventListener("click", function () {
    const toName = document.getElementById("to_name").value.trim();
    const content = document.getElementById("content").value.trim();

    // 입력값 검증 (빈 값 확인)
    if (!toName || !content) {
        alert("모든 필드를 입력해 주세요!");
        return;
    }

    const newPost = {
        id: myPost.length + 1,
        to_name: toName,
        from_name: '권유진',
        postContent: content,
        date: writeDate.value,
        back_color: backColor || '#CBF3FE'
    };

    myPost.push(newPost);
    alert("작성이 완료됐습니다. ");
    localStorage.setItem("myPost", JSON.stringify(myPost));
});