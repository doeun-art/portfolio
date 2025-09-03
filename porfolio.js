// 프로필 슬라이드
const track = document.getElementById('profile-carousel-track');
const cards = track.querySelectorAll('.profile-card');
let idx = 0;

function moveTo(idx, animate = true) {
  const viewport = document.querySelector('.profile-carousel-viewport');
  const cardWidth = viewport.offsetWidth;
  if (animate) {
    track.style.transition = "transform 0.5s cubic-bezier(.7,-0.05,.39,1.13)";
  } else {
    track.style.transition = "none";
  }
  const moveX = -idx * cardWidth;
  track.style.transform = `translateX(${moveX}px)`;
}

document.getElementById('profile-arrow-left').onclick = function() {
  idx = (idx - 1 + cards.length) % cards.length;
  moveTo(idx);
};
document.getElementById('profile-arrow-right').onclick = function() {
  idx = (idx + 1) % cards.length;
  moveTo(idx);
};

window.addEventListener('load', () => moveTo(idx, false));
window.addEventListener('resize', () => moveTo(idx, false));

// 작업물 데이터
const worksData = [
  {
    img: "./img/Fitxel.png",
    title: "작업물 제목 1",
    description: "이 작업물은 포스터 디자인으로 깔끔하고 현대적인 느낌을 담았습니다."
  },
  {
    img: "./img/HCN_.png",
    title: "작업물 제목 2",
    description: "이 작업물은 로고 디자인으로 심플하면서도 기억에 남는 스타일입니다."
  },
  {
    img: "./img/Iksan.png",
    title: "작업물 제목 3",
    description: "웹 배너 디자인으로 시각적 임팩트를 주는 컬러와 레이아웃을 사용했습니다."
  },
  {
    img: "./img/3D.png",
    title: "작업물 제목 4",
    description: "카드뉴스 및 홍보용 디자인 작업물입니다."
  },
  {
    img: "work5.jpg",
    title: "작업물 제목 5",
    description: "섬세한 패키지 디자인 작업물입니다."
  },
  {
    img: "work6.jpg",
    title: "작업물 제목 6",
    description: "모바일 UI/UX 기획 및 디자인 작업물입니다."
  },
];

const workItems = document.querySelectorAll('.work-item');
const modal = document.getElementById('modal');
const modalImage = modal.querySelector('.modal-image');
const modalTitle = modal.querySelector('.modal-title');
const modalDesc = modal.querySelector('.modal-desc');
const modalClose = modal.querySelector('.modal-close');

workItems.forEach(item => {
  item.addEventListener('click', () => {
    const index = parseInt(item.getAttribute('data-index'));
    const work = worksData[index];
    modalImage.src = work.img;
    modalTitle.textContent = work.title;
    modalDesc.textContent = work.description;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
});

modalClose.addEventListener('click', () => {
  modal.classList.remove('active');
  document.body.style.overflow = '';
});
modal.addEventListener('click', e => {
  if (e.target === modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // 폼 필드 값 가져오기
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name && email && phone && message) {
    alert('메시지가 성공적으로 전송되었습니다!');
    document.getElementById('contactForm').reset();
    // 실제 이메일 전송을 원하면 EmailJS 등 외부 연동 코드로 교체
    // 예시: emailjs.sendForm(...)
  } else {
    alert('필수 항목을 모두 입력해 주세요.');
  }
});
