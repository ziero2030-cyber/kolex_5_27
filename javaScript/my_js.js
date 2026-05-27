document.addEventListener('DOMContentLoaded', function () {

  // 상단텍스트광고 슬라이드
  const topBannerSwiper = new Swiper('.top-banner .swiper', {
        // 좌우 무한 루프 롤링 활성화
        direction: 'vertical',
        loop: true,
        // 3초마다 자동으로 롤링되도록 설정
        autoplay: {
            delay: 3000, // 3000ms = 3초
            disableOnInteraction: false, // 사용자가 마우스로 만져도 자동 롤링이 멈추지 않도록 설정
        },

       
    });





  const heroSwiper = new Swiper('.hero-swiper', {
    // 기본 설정
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true, // 무한 루프 활성화
    
    // 부드러운 전환 효과 (원하시면 'fade'로 변경 가능합니다)
    effect: 'slide', 
    speed: 600,

    // 자동 재생 설정
    autoplay: {
      delay: 4000, // 4초마다 전환
      disableOnInteraction: false, // 유저가 만져도 자동재생 유지
    },

    // 하단 페이지네이션 (밑에 있는 불) 설정
    pagination: {
      el: '.swiper-pagination',
      clickable: true, // 점을 클릭했을 때 해당 슬라이드로 이동
    },
  });


// 프로세스 자바 시작


  
  // 1. 특정 패널 안의 요소들을 순차적으로 모아주는 함수 정의
  function triggerPanelAnimation(panelId) {
    const activePanel = document.querySelector(panelId);
    if (!activePanel) return;

    // 해당 패널 안에 있는 애니메이션 대상들 수집
    const animItems = activePanel.querySelectorAll('.js-animate');
    
    animItems.forEach((item, index) => {
      // 기존에 묻어있던 모션 클래스 초기화 (재구동 목적)
      item.classList.remove('motion-active');
      
      // 순차적으로 모여들도록 시간차 타임아웃 계산 부여 (스텝당 150ms 갭)
      setTimeout(() => {
        item.classList.add('motion-active');
      }, index * 150);
    });
  }

  // 2. 초기 첫 화면 로드 시 (일본 직접구매 패널) 애니메이션 바로 기동
  triggerPanelAnimation('#direct-panel');

  // 3. 부트스트랩 탭 클릭 이벤트 리스너 바인딩
  const tabElements = document.querySelectorAll('button[data-bs-toggle="tab"]');
  tabElements.forEach(tab => {
    tab.addEventListener('shown.bs.tab', function (event) {
      // event.target 은 현재 클릭되어 켜진 탭 요소입니다.
      const targetPanelId = event.target.getAttribute('data-bs-target');
      
      // 전환된 패널 애니메이션 기동
      triggerPanelAnimation(targetPanelId);
      
      // 열리지 않은 반대편 패널의 애니메이션 상태는 부드럽게 초기화
      const hiddenPanelId = event.relatedTarget ? event.relatedTarget.getAttribute('data-bs-target') : null;
      if(hiddenPanelId) {
        const hiddenItems = document.querySelectorAll(`${hiddenPanelId} .js-animate`);
        hiddenItems.forEach(item => item.classList.remove('motion-active'));
      }
    });
  });

});

// 프로세스 자바 끝 


// 벚꽃 커서 스크립 시작

    
        // const cursor = document.getElementById('sakuraCursor');

        // // 1. 마우스 움직임에 따라 커서 위치 동기화
        // document.addEventListener('mousemove', (e) => {
        //     cursor.style.left = e.clientX + 'px';
        //     cursor.style.top = e.clientY + 'px';
        // });

        // // 2. 클릭 시 꾹 누르는 시각 효과 피드백
        // document.addEventListener('mousedown', () => {
        //     cursor.classList.add('click-active');
        // });
        // document.addEventListener('mouseup', () => {
        //     cursor.classList.remove('click-active');
        // });

        // // 3. 버튼 클릭 시 상황(테마)에 맞춰 커서 색상 변경하기
        // const buttons = document.querySelectorAll('.theme-btn');
        
        // buttons.forEach(button => {
        //     button.addEventListener('click', (e) => {
        //         // 기존 커서 색상 클래스 모두 제거
        //         cursor.className = 'custom-cursor';
                
        //         // 버튼에 지정된 data-color 값 가져와서 추가
        //         const targetColor = e.target.getAttribute('data-color');
        //         cursor.classList.add(targetColor);
        //     });
        // });
   

  // 벚꽃 커서 끝 