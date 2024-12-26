import { clickLike } from "../../js/likeBtn.js";

const postDummy = [
    {
        id: 1,
        to_name: '권유진',
        from_name: '박수정',
        postContent: `생일 정말 축하해! 
        오늘 하루는 무엇보다도 너의 특별함을 위해 존재하는 날이니까, 세상에서 가장 행복한 시간을 보내길 바라. 
        너의 존재 덕분에 많은 사람들이 미소 짓고 있단 걸 꼭 기억해줘. 
        올해도 멋지고 아름다운 순간들이 너에게 찾아오길 기도할게!`,
        date: '2024-11-04',
        img: "../../img/id1_img.jpg",
        back_color: '#CBF3FE'
    },
    {
        id: 2,
        to_name: '강은서',
        from_name: '',
        postContent: `한 해 동안 정말 고생 많았어! 
        오늘은 그런 너의 노력과 마음을 다독여주는 날이 되길 바래. 
        생일 축하하고, 앞으로 다가올 모든 시간들이 너에게 기쁨과 행복으로 채워지기를 진심으로 기원할게. 
        네가 그토록 원하는 모든 일들이 다 이루어지길!`,
        date: '2024-11-03',
        img: '',
        back_color: '#FFE6EE'
    },
    {
        id: 3,
        to_name: '최선아',
        from_name: '김가영',
        postContent: `생일 축하해! 지금까지의 여정이 결코 쉬운 길만은 아니었지만, 그 속에서 너는 많은 사람에게 소중한 존재가 되어줬어. 
        너의 생일을 맞아 그동안의 모든 수고가 보상받고, 앞으로의 시간이 너에게 더 큰 축복으로 다가오기를 진심으로 바랄게!`,
        date: '2024-11-04',
        img: "",
        back_color: '#FFFACC'
    },
    {
        id: 4,
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
        id: 5,
        to_name: '모든 사람들',
        from_name: '끼끼',
        postContent: `오늘 여러분을 만나게되어 정말 행운이에요! 
        이제 곧 2025년이 시작되네요. 
        지난 한 해 동안 노력해온 모든 일들이 빛나길 바라며, 새롭게 시작될 또 다른 멋진 한 해가 행복과 성공으로 가득 차길 응원할게요.
        당신이 꿈꾸는 모든 것들이 이루어지기를 바라며! `,
        date: '2024-11-03',
        img: '../../img/kkikki_old.png',
        back_color: '#FFE6EE'
    },
    {
        id: 6,
        to_name: '원나연',
        from_name: '주댕치',
        postContent: `생일 축하해! 너라는 존재가 세상에 얼마나 빛나는지, 너 자신이 충분히 알았으면 좋겠어. 
        항상 힘이 되어주는 너에게 감사하고, 너의 생일을 진심으로 축하해. 
        오늘 하루는 누구보다도 행복하고 특별한 시간으로 가득 채우길. `,
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

        const likeBtn = document.createElement('span');
        likeBtn.className = 'like_btn';
        likeBtn.innerText = '♡';
        likeBtn.addEventListener('click', () => {
            likeBtn.innerText = likeBtn.innerText === '♡' ? '♥' : '♡'; // 좋아요 토글
            clickLike();
        });
        rightElement.appendChild(likeBtn);

        // 게시물 요소를 컨테이너에 추가
        postElement.appendChild(rightElement);
        postDisplay.appendChild(postElement);
        postContainer.appendChild(postDisplay);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    displayPosts(postDummy);
});