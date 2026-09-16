/**
 * Personal Portfolio & Resume Website
 * Script for Alex Chen (陳子揚)
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // 2. Navigation & Header Scroll State
  const header = document.getElementById('header');
  const backToTopBtn = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    if (scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    if (scrollY > 350) {
      backToTopBtn.classList.add('active');
    } else {
      backToTopBtn.classList.remove('active');
    }

    updateActiveNavLink();
  });

  // 3. Mobile Navigation Menu Toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileToggle.classList.toggle('open');
      navMenu.classList.toggle('open');
    });

    // Close menu when clicking nav links
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileToggle.classList.remove('open');
        navMenu.classList.remove('open');
      });
    });
  }

  // 4. Scrollspy: Highlight Active Nav Link
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function updateActiveNavLink() {
    const scrollPosition = window.scrollY + 160;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  // 5. Portfolio Filtering
  const filterBtns = document.querySelectorAll('.portfolio-tabs .tab-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active from all buttons
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          card.style.animation = 'fadeInCard 0.4s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 6. Project Details Data & Modal Logic
  const projectsData = {
    'project-1': {
      title: 'OmniCloud 企業級巨量數據即時監控儀表板',
      category: 'Web 應用系統 · SaaS 儀表板',
      image: 'assets/images/project-1.jpg',
      desc: 'OmniCloud 專為超大型微服務叢集與跨國混合雲環境研發。透過即時 WebWorker 多執行緒運算與自適應數據壓縮技術，達成十萬量級指標秒級繪製與即時告警通知。在實際落地測試中，為企業維運團隊縮短 60% 的問題定位時間。',
      features: [
        '即時百萬級數據流 WebSocket 串流推播與局部 DOM 優化渲染',
        '自定義圖表畫布與多維度指標篩選器（支援熱力圖、拓撲拓元圖、柱流圖）',
        '整合 RBAC 細部權限模型與審計日誌追蹤，通過金融級資安架構評估',
        '響應式暗/淺雙色模式智能適配，提升長時間監看舒適度'
      ],
      tags: ['React 18', 'TypeScript', 'ECharts', 'WebSocket', 'TailwindCSS', 'Vite']
    },
    'project-2': {
      title: 'PulsePay 次世代虛擬資產與智慧錢包 App',
      category: '行動介面 · FinTech 金融',
      image: 'assets/images/project-2.jpg',
      desc: 'PulsePay 以流暢的人機交互體驗重塑去中心化資產管理。設計導入無感密鑰備份、FaceID / 指紋極速認證，並具備即時法幣/加密貨幣智能匯率換算機制，讓初學者也能在 3 秒內完成安全轉帳與資產配置。',
      features: [
        '整合生物辨識（Biometrics）與安全晶片隔離儲存機制',
        '多鏈資產整合視圖，即時鏈上 gas 費率預估與滑點提醒',
        '流暢 60fps 原生手勢互動動畫，極致操作回饋感',
        '多語言在地化支持（繁中、英語、日語）與暗光金融儀表盤'
      ],
      tags: ['React Native', 'Flutter', 'Figma', 'Web3.js', 'Ethers.js', 'Tailwind']
    },
    'project-3': {
      title: 'Aether AI 靈感生成協同畫布工作台',
      category: 'Web 應用系統 · AI 智能工作流',
      image: 'assets/images/project-3.jpg',
      desc: 'Aether AI 打造了專為數位創作者量身定制的無限節點式畫布。結合多模態大型語言模型（LLM）與即時 Diffusion 生圖引擎，使用者可透過拖曳連接詞彙、參考圖與語氣節點，一鍵批次生成高保真設計提案與文案。',
      features: [
        '無限向量畫布（Infinite Canvas）與平滑縮放渲染引擎',
        '多模態提示詞即時語意擴展與視覺關聯建議',
        'WebSocket 多人即時游標同屏在線協同編輯',
        'Python FastAPI 後端非同步處理高負載生圖任務佇列'
      ],
      tags: ['Next.js 14', 'Python FastAPI', 'Canvas API', 'Redis Queue', 'Docker']
    },
    'project-4': {
      title: 'Boutique 極簡美學精品電商官網與互動設計',
      category: '介面設計 · 奢華電商體驗',
      image: 'assets/images/project-4.jpg',
      desc: '為巴黎獨立高端時尚設計師品牌打造的全球官方購物平台。設計理念強調「Less is More」，利用大面積留白、柔和冷灰色調與細膩的捲動視差動畫，傳遞品牌優雅內斂的奢華質感，全站轉化率提升 34%。',
      features: [
        '微互動視差捲動與平滑錨點磁吸轉場（GSAP ScrollTrigger）',
        '360 度產品多視角 3D 預覽與材質光影細節檢視',
        '秒級一鍵結帳流程（整合 Apple Pay / Google Pay / Stripe）',
        '完全無障礙標準 WCAG 2.1 AA 規範合規認證'
      ],
      tags: ['UI/UX Research', 'Figma', 'Vue 3', 'GSAP', 'Stripe API', 'SCSS']
    }
  };

  const modal = document.getElementById('project-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalImg = document.getElementById('modal-img');
  const modalCategory = document.getElementById('modal-category');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');
  const modalFeatures = document.getElementById('modal-features');
  const modalTechTags = document.getElementById('modal-tech-tags');

  function openProjectModal(projectId) {
    const data = projectsData[projectId];
    if (!data) return;

    modalImg.src = data.image;
    modalImg.alt = data.title;
    modalCategory.textContent = data.category;
    modalTitle.textContent = data.title;
    modalDesc.textContent = data.desc;

    // Render Features
    modalFeatures.innerHTML = data.features.map(feat => `
      <li>
        <span class="bullet">✦</span>
        <span>${feat}</span>
      </li>
    `).join('');

    // Render Tech tags
    modalTechTags.innerHTML = data.tags.map(tag => `
      <span class="tech-tag">${tag}</span>
    `).join('');

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  function closeProjectModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Bind modal open triggers
  document.querySelectorAll('.view-modal-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const id = btn.getAttribute('data-id');
      openProjectModal(id);
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeProjectModal);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeProjectModal();
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeProjectModal();
    }
  });

  // 7. Toast Notification Utility
  window.toast = function(message) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <span class="toast-icon">✨</span>
      <span>${message}</span>
    `;
    container.appendChild(toast);

    // Trigger animation
    setTimeout(() => {
      toast.classList.add('show');
    }, 10);

    // Auto remove after 3.5s
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        toast.remove();
      }, 400);
    }, 3500);
  };

  // 8. Contact Form Handling
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('user-name').value.trim();
      const email = document.getElementById('user-email').value.trim();

      const submitBtn = document.getElementById('submit-btn');
      const originalText = submitBtn.innerHTML;

      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span>發送處理中...</span>`;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        if (window.lucide) window.lucide.createIcons();

        window.toast(`🎉 感謝您，${name}！訊息已順利送出，我將盡快回覆至 ${email}`);
        contactForm.reset();
      }, 700);
    });
  }

  // 9. Back to Top Smooth Scroll
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});

// CSS Animation Inject for Filter Fade
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  @keyframes fadeInCard {
    from {
      opacity: 0;
      transform: translateY(12px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
document.head.appendChild(styleSheet);
