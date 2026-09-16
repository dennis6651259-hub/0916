/**
 * Cute Animal Real-Time Clock & Interactive Profile
 * 電機系 - 王鼎昌 (Dennis Wang)
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Clock Elements
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

  // Weekday mapping in Traditional Chinese
  const weekdays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];

  // Time-of-day Animal Greetings
  function getAnimalMoodGreeting(hours) {
    if (hours >= 5 && hours < 11) {
      return '☀️ 早安！貓咪正在窗邊伸懶腰曬太陽，電力 100%！🐾';
    } else if (hours >= 11 && hours < 14) {
      return '🍱 午安！柴犬開心地咬著小骨頭，王鼎昌正在享受午餐時光！🦴';
    } else if (hours >= 14 && hours < 18) {
      return '🌤️ 下午好！小熊貓正一邊抱著竹子一邊調試 C 語言程式碼～💻';
    } else if (hours >= 18 && hours < 22) {
      return '🌙 晚安時光！兔子蹦蹦跳跳，大家今天都辛苦了！✨';
    } else {
      return '💤 夜深了！小動物們都已蓋上被被進入夢鄉，工程師也要早點睡喔～🌌';
    }
  }

  // Update Clock Function
  function updateClock() {
    const now = new Date();
    const rawHours = now.getHours();
    const rawMinutes = now.getMinutes();
    const rawSeconds = now.getSeconds();

    // Format Hours based on 12/24 mode
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

    // Set Text with 2-digit padding
    hoursEl.textContent = String(displayHours).padStart(2, '0');
    minutesEl.textContent = String(rawMinutes).padStart(2, '0');
    secondsEl.textContent = String(rawSeconds).padStart(2, '0');

    // Date & Weekday
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const date = now.getDate();
    const day = now.getDay();

    dateStrEl.textContent = `${year} 年 ${month} 月 ${date} 日`;
    weekdayEl.textContent = weekdays[day];

    // Smooth Seconds Progress (0 - 59 to percentage)
    const secondsPercent = ((rawSeconds + 1) / 60) * 100;
    secondsBarFill.style.width = `${secondsPercent}%`;

    // Dynamic Animal Status Message
    animalStatusMsg.textContent = getAnimalMoodGreeting(rawHours);
  }

  // Toggle 12h / 24h
  if (toggleFormatBtn) {
    toggleFormatBtn.addEventListener('click', () => {
      is24HourFormat = !is24HourFormat;
      toggleFormatBtn.textContent = is24HourFormat ? '切換 12 小時制' : '切換 24 小時制';
      updateClock();
    });
  }

  // Start Clock immediately and tick every second
  updateClock();
  setInterval(updateClock, 1000);

  // 2. Interactive Animal Mascot Clicking Reactions
  const peekers = document.querySelectorAll('.peeker-animal, .pet-btn');
  const cuteQuotes = {
    'cat': ['喵嗚～🐾 王鼎昌的程式碼沒有 Bug！', '呼嚕呼嚕～貓咪蹭蹭你的手！🐱', '喵！今天也是充滿活力的一天！'],
    'shiba': ['汪汪！柴犬搖著螺旋槳尾巴飛奔過來！🐕', '汪！電機系王鼎昌好棒！🐾', '柴柴送你一朵小花花 🌸'],
    'bunny': ['咕嚕咕嚕～兔子開心地蹦蹦跳！🐰', '兔兔抖動長耳朵，接收到滿滿的好運！✨', '撲通！兔子跳進軟綿綿的雲朵裡！'],
    'panda': ['熊貓抱著大竹子滾了一圈！🐼', '熊貓打瞌睡中... zzz... 🐾', '熊貓送你一個毛茸茸的溫暖抱抱！']
  };

  peekers.forEach(el => {
    el.addEventListener('click', () => {
      const type = el.getAttribute('data-animal') || 'cat';
      const quotes = cuteQuotes[type] || cuteQuotes['cat'];
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      
      // Update bubble with animated pop
      animalStatusMsg.style.transform = 'scale(1.15)';
      animalStatusMsg.textContent = randomQuote;
      setTimeout(() => {
        animalStatusMsg.style.transform = 'scale(1)';
      }, 300);
    });
  });

  // 3. Hello World Project - Interactive Code Switcher & Runner
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
      termOutput.innerHTML = `<div class="output-line" style="color: #64748b;">// 點擊下方綠色按鈕執行 hello.c ...</div>`;
    });

    codeTabPy.addEventListener('click', () => {
      currentLang = 'py';
      codeTabPy.classList.add('active');
      codeTabC.classList.remove('active');
      codeArea.innerHTML = `<pre><code>${codeSnippets['py']}</code></pre>`;
      termOutput.innerHTML = `<div class="output-line" style="color: #64748b;"># 點擊下方綠色按鈕執行 hello.py ...</div>`;
    });
  }

  // Run Code Simulation
  if (runBtn) {
    runBtn.addEventListener('click', () => {
      runBtn.disabled = true;
      runBtn.innerHTML = `<span>⚙️ 編譯執行中...</span>`;

      termOutput.innerHTML = `
        <div class="output-line" style="color: #94a3b8;">&gt; ${currentLang === 'c' ? 'gcc hello.c -o hello && ./hello' : 'python3 hello.py'}</div>
        <div class="output-line" style="color: #fbbf24;">⚡ 連接電機系嵌入式運算環境中...</div>
      `;

      setTimeout(() => {
        runBtn.disabled = false;
        runBtn.innerHTML = `<span>▶ 執行程式 (Run Code)</span>`;

        termOutput.innerHTML = `
          <div class="output-line" style="color: #94a3b8;">&gt; ${currentLang === 'c' ? 'gcc hello.c -o hello && ./hello' : 'python3 hello.py'}</div>
          <div class="output-line success">🎉 Hello, World! 🚀</div>
          <div class="output-line" style="color: #38bdf8; font-weight: 600;">🐾 電機工程學系 · 王鼎昌 (學號: 7115064172) 向世界問好！</div>
          <div class="output-line" style="color: #a7f3d0; font-size: 0.82rem; margin-top: 4px;">✔ 程式退出狀態碼: 0 (執行耗時: 0.003s) 🌟 動物小夥伴們為您熱烈喝采！</div>
        `;

        // Also trigger cute animal status celebration
        animalStatusMsg.textContent = '🎉 哇！Hello World 執行大成功！貓咪與柴犬開心地跳起慶祝舞！🐾✨';
      }, 600);
    });
  }
});
