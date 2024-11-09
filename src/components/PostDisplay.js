import { postDummy } from "../postDummy.js";

function displayPosts(posts) {
    const postContainer = document.getElementById('post_container'); // 게시물 추가할 요소 선택
    postContainer.innerHTML = ''; // 기존 내용을 지웁니다.

    posts.forEach(post => {
        // 각 게시물에 대한 HTML 요소 생성
        const postDisplay = document.createElement('div');
        postDisplay.className = 'post_sizer';

        const postElement = document.createElement('div');
        postElement.className = 'post';
        postElement.style.backgroundColor = `${post.back_color}`; // 배경 색 설정

        const toNameDiv = document.createElement('div');
        toNameDiv.className = 'to_name';
        toNameDiv.innerText = `${post.to_name}에게`;
        postElement.appendChild(toNameDiv);

        if (post.img) {
            const imgDiv = document.createElement('img');
            imgDiv.className = 'post_img';
            imgDiv.src = post.img;
            imgDiv.alt = `${post.to_name}에게 주는 이미지`;
            postElement.appendChild(imgDiv); // 게시물 요소에 이미지 추가
        }

        // 게시물 내용 div 생성
        const contentDiv = document.createElement('div');
        contentDiv.className = 'post_content';
        contentDiv.innerText = post.postContent; // 게시물 내용 설정
        postElement.appendChild(contentDiv); // 게시물 요소에 게시물 내용 div 추가

        const fromNameDiv = document.createElement('div');
        fromNameDiv.className = 'from_name';
        fromNameDiv.innerText = post.from_name;
        postElement.appendChild(fromNameDiv);

        // // 날짜 div 생성
        // const dateDiv = document.createElement('div');
        // dateDiv.className = 'post_date';
        // dateDiv.innerText = `날짜: ${post.date || '날짜 없음'}`; // 날짜 설정
        // postElement.appendChild(dateDiv); // 게시물 요소에 날짜 div 추가

        // 게시물 요소를 컨테이너에 추가
        postDisplay.appendChild(postElement);
        postContainer.appendChild(postDisplay);
    });
}

// 게시물 표시 함수 호출
document.addEventListener('DOMContentLoaded', () => {
    displayPosts(postDummy);
});