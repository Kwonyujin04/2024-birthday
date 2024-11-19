const postDummy = [
    {
        id: 1,
        to_name: '주댕치',
        from_name: '권유진',
        postContent: `Happy Birthday! 언제나 주변을 따뜻하게 만들어주는 너에게 오늘 하루가 진정한 축복과도 같기를 바래. 
        네가 항상 사랑과 행복을 느낄 수 있도록 옆에서 응원할게. 
        이번 생일이 너의 인생에 새로운 활력을 불어넣는 특별한 날이 되었으면 좋겠어!`,
        date: '2024-11-03',
        img: '../../img/id2_img.jpg',
        back_color: '#CEFDD3'
    },
    {
        id: 2,
        to_name: '원나연',
        from_name: '고양이',
        postContent: `생일 축하해! 너라는 존재가 세상에 얼마나 빛나는지, 너 자신이 충분히 알았으면 좋겠어. 
        항상 힘이 되어주는 너에게 감사하고, 너의 생일을 진심으로 축하해. 
        오늘 하루는 누구보다도 행복하고 특별한 시간으로 가득 채우길!`,
        date: '2024-11-03',
        img: '',
        back_color: '#E1E5FE'
    }
];

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
        toNameDiv.innerText = `${post.to_name}에게` || "";
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

        const rightElement = document.createElement('div');
        rightElement.className = 'right_content';

        const fromNameDiv = document.createElement('div');
        fromNameDiv.className = 'from_name';
        fromNameDiv.innerText = post.from_name || '익명';
        rightElement.appendChild(fromNameDiv);

        // 게시물 요소를 컨테이너에 추가
        postElement.appendChild(rightElement);
        postDisplay.appendChild(postElement);
        postContainer.appendChild(postDisplay);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    displayPosts(postDummy);
});