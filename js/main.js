/**
 * 電機系 - 王鼎昌 (7115064172)
 * 五合一整合專屬網頁邏輯腳本
 * 包含：即時跳動時鐘 (時分秒)、動物伴侶互動、Hello World 代碼編譯執行模擬
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. 初始化 Lucide 圖標
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // 2. 即時時鐘邏輯 (時、分、秒)
  const hoursEl = document.getElementById('clock-hours');
  const minutesEl = document.getElementById('clock-minutes');
  const secondsEl = document.getElementById('clock-seconds');
  const ampmEl = document.getElementById('clock-ampm');
  const dateStrEl = document.getElementById('clock-date-str');
  const weekdayEl = document.getElementById('clock-weekday');
  const secondsBarFill = document.getElementById('seconds-bar-fill');
  const animalStatusMsg = document.getElementById('animal-status-msg');
  const toggleFormatBtn = document.getElementById('toggle-format-btn');

  let is24HourFormat = true;
  const weekdays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];

  // 根據時段產生可愛動物狀態問候
  function getAnimalMoodGreeting(hours) {
    if (hours >= 5 && hours < 11) {
      return '☀️ 早安！小貓咪正在窗邊伸懶腰曬太陽，王鼎昌正精神飽滿地寫程式！🐾';
    } else if (hours >= 11 && hours < 14) {
      return '🍱 午安！小柴犬開心地啃著骨頭，補足電力準備迎接下午的挑戰！🦴';
    } else if (hours >= 14 && hours < 18) {
      return '🌤️ 下午好！大熊貓正抱著竹子調試 C 語言單晶片程式碼～💻✨';
    } else if (hours >= 18 && hours < 22) {
      return '🌙 晚安時光！兔子蹦蹦跳跳，王鼎昌今日的 Python 演算法測試全部通過！🎉';
    } else {
      return '💤 夜深了！小動物們都已進入夢鄉，親愛的工程師記得早點休息保養肝臟喔～🌌';
    }
  }

  // 更新時鐘核心函式
  function updateClock() {
    const now = new Date();
    const rawHours = now.getHours();
    const rawMinutes = now.getMinutes();
    const rawSeconds = now.getSeconds();

    // 處理 12 / 24 小時制
    let displayHours = rawHours;
    let ampmText = '';

    if (!is24HourFormat) {
      ampmText = rawHours >= 12 ? 'PM' : 'AM';
      displayHours = rawHours % 12 || 12;
      ampmEl.style.display = 'inline-block';
      ampmEl.textContent = ampmText;
    } else {
      ampmEl.style.display = 'none';
    }

    // 補零輸出時、分、秒
    if (hoursEl) hoursEl.textContent = String(displayHours).padStart(2, '0');
    if (minutesEl) minutesEl.textContent = String(rawMinutes).padStart(2, '0');
    if (secondsEl) secondsEl.textContent = String(rawSeconds).padStart(2, '0');

    // 日期與星期
    if (dateStrEl) {
      const year = now.getFullYear();
      const month = now.getMonth() + 1;
      const date = now.getDate();
      const day = now.getDay();
      dateStrEl.textContent = `${year} 年 ${month} 月 ${date} 日`;
      if (weekdayEl) weekdayEl.textContent = weekdays[day];
    }

    // 秒數進度條平滑流動 (0% - 100%)
    if (secondsBarFill) {
      const secondsPercent = ((rawSeconds + 1) / 60) * 100;
      secondsBarFill.style.width = `${secondsPercent}%`;
    }

    // 動物心情更新
    if (animalStatusMsg && !animalStatusMsg.dataset.custom) {
      animalStatusMsg.textContent = getAnimalMoodGreeting(rawHours);
    }
  }

  // 綁定時制切換按鈕
  if (toggleFormatBtn) {
    toggleFormatBtn.addEventListener('click', () => {
      is24HourFormat = !is24HourFormat;
      toggleFormatBtn.textContent = is24HourFormat ? '切換 12 小時制' : '切換 24 小時制';
      updateClock();
    });
  }

  // 立即啟動時鐘並每秒精準刷新
  updateClock();
  setInterval(updateClock, 1000);

  // 3. 可愛動物摸摸互動反應
  const peekers = document.querySelectorAll('.peeker-animal, .pet-btn');
  const cuteQuotes = {
    'cat': ['喵嗚～🐾 王鼎昌寫的程式碼絕對沒有 Bug！', '呼嚕呼嚕～小貓咪蹭蹭你的手心！🐱', '喵！今天也是電力充沛的一天！'],
    'shiba': ['汪汪！柴犬搖著螺旋槳尾巴飛奔過來討摸！🐕', '汪！電機系王鼎昌好棒！🐾', '柴柴送你一朵小向日葵 🌻'],
    'bunny': ['咕嚕咕嚕～兔子開心地在軟綿綿雲朵裡蹦跳！🐰', '兔兔抖動長耳朵，接收到滿滿的好運！✨', '撲通！兔子跳進懷裡蹭蹭！'],
    'panda': ['熊貓抱著大竹子在草地上打滾～🐼', '熊貓打瞌睡中... zzz... 🐾', '熊貓送你一個毛茸茸的溫暖大擁抱！']
  };

  peekers.forEach(el => {
    el.addEventListener('click', () => {
      const type = el.getAttribute('data-animal') || 'cat';
      const quotes = cuteQuotes[type] || cuteQuotes['cat'];
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

      if (animalStatusMsg) {
        animalStatusMsg.dataset.custom = 'true';
        animalStatusMsg.style.transform = 'scale(1.1)';
        animalStatusMsg.textContent = randomQuote;

        setTimeout(() => {
          animalStatusMsg.style.transform = 'scale(1)';
        }, 250);

        // 5 秒後恢復為時間問候
        setTimeout(() => {
          delete animalStatusMsg.dataset.custom;
          updateClock();
        }, 5000);
      }
    });
  });

  // 4. Hello World 互動程式終端機
  const codeTabC = document.getElementById('tab-c');
  const codeTabPy = document.getElementById('tab-py');
  const codeArea = document.getElementById('code-display');
  const runBtn = document.getElementById('run-code-btn');
  const termOutput = document.getElementById('terminal-output');

  let currentLang = 'c';

  const codeSnippets = {
    'c': `<span class="code-cmt">// C 語言 - 電機系 王鼎昌 (7115064172)</span>
<span class="code-kw">#include</span> <span class="code-str">&lt;stdio.h&gt;</span>

<span class="code-kw">int</span> <span class="code-fn">main</span>() {
    <span class="code-fn">printf</span>(<span class="code-str">"Hello, World! 🚀\\n"</span>);
    <span class="code-fn">printf</span>(<span class="code-str">"電機工程學系 · 王鼎昌 (7115064172) 向世界問好！🐾\\n"</span>);
    <span class="code-kw">return</span> <span class="code-fn">0</span>;
}`,
    'py': `<span class="code-cmt"># Python 3 - 電機系 王鼎昌 (7115064172)</span>
<span class="code-kw">def</span> <span class="code-fn">main</span>():
    <span class="code-fn">print</span>(<span class="code-str">"Hello, World! 🚀"</span>)
    <span class="code-fn">print</span>(<span class="code-str">"電機工程學系 · 王鼎昌 (7115064172) 向世界問好！🐾"</span>)

<span class="code-kw">if</span> __name__ == <span class="code-str">"__main__"</span>:
    <span class="code-fn">main</span>()`
  };

  if (codeTabC && codeTabPy) {
    codeTabC.addEventListener('click', () => {
      currentLang = 'c';
      codeTabC.classList.add('active');
      codeTabPy.classList.remove('active');
      codeArea.innerHTML = `<pre><code>${codeSnippets['c']}</code></pre>`;
      termOutput.innerHTML = `<div class="output-line" style="color: #64748b;">// 點擊上方綠色按鈕執行 hello.c ...</div>`;
    });

    codeTabPy.addEventListener('click', () => {
      currentLang = 'py';
      codeTabPy.classList.add('active');
      codeTabC.classList.remove('active');
      codeArea.innerHTML = `<pre><code>${codeSnippets['py']}</code></pre>`;
      termOutput.innerHTML = `<div class="output-line" style="color: #64748b;"># 點擊上方綠色按鈕執行 hello.py ...</div>`;
    });
  }

  // 點擊執行按鈕
  if (runBtn) {
    runBtn.addEventListener('click', () => {
      runBtn.disabled = true;
      runBtn.innerHTML = `<span>⚙️ 編譯執行中...</span>`;

      termOutput.innerHTML = `
        <div class="output-line" style="color: #94a3b8;">&gt; ${currentLang === 'c' ? 'gcc hello.c -o hello && ./hello' : 'python3 hello.py'}</div>
        <div class="output-line" style="color: #fbbf24;">⚡ 連接電機系運算節點環境中...</div>
      `;

      setTimeout(() => {
        runBtn.disabled = false;
        runBtn.innerHTML = `<span>▶ 執行程式 (Run Code)</span>`;

        termOutput.innerHTML = `
          <div class="output-line" style="color: #94a3b8;">&gt; ${currentLang === 'c' ? 'gcc hello.c -o hello && ./hello' : 'python3 hello.py'}</div>
          <div class="output-line success">🎉 Hello, World! 🚀</div>
          <div class="output-line" style="color: #38bdf8; font-weight: 600;">🐾 電機工程學系 · 王鼎昌 (學號: 7115064172) 向世界問好！</div>
          <div class="output-line" style="color: #a7f3d0; font-size: 0.84rem; margin-top: 4px;">✔ 程式退出狀態碼: 0 (耗時: 0.002s) · 動物小夥伴們熱烈鼓掌喝采！✨</div>
        `;

        // 觸發動物慶祝
        if (animalStatusMsg) {
          animalStatusMsg.style.transform = 'scale(1.12)';
          animalStatusMsg.textContent = '🎉 哇！Hello World 執行大成功！小動物們開心地跳起慶祝舞！🐾✨';
          setTimeout(() => {
            animalStatusMsg.style.transform = 'scale(1)';
          }, 300);
        }
      }, 550);
    });
  }

  // 5. 滾動監聽導覽列高亮
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 140;
    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');
      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });
});
