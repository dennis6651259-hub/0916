# 個人品牌與履歷作品集網站 (7115064172-王鼎昌)

🔗 **線上即時預覽網址 (GitHub Pages)**: [https://dennis6651259-hub.github.io/0916/](https://dennis6651259-hub.github.io/0916/)  
🐾 **可愛動物即時時鐘專區**: [https://dennis6651259-hub.github.io/0916/clock.html](https://dennis6651259-hub.github.io/0916/clock.html)

<img width="1328" height="719" alt="image" src="https://github.com/user-attachments/assets/459ee7f7-9f17-451f-9610-813a796600e4" />

---

專為**電機工程學系 · 王鼎昌**打造的五合一精緻個人網站。整體視覺以**清爽淺藍色（Soft Sky / Ice Blue）**為主色調，結合可愛動物互動夥伴與現代活潑排版。

---

## 🌟 五大核心亮點（一頁式整合）

1. **自我介紹**：電機系 - 王鼎昌（學號 7115064172），呈現軟硬體底層運算與軟體開發熱情。
2. **Skill 技能**：精選 **Python** 與 **C 語言** 專業能力卡片與技術特點。
3. **Project 專案**：可互動切換與執行的 `Hello World` 模擬終端機（支援 C 語言與 Python 一鍵運行輸出，觸發動物喝采）。
4. **即時時鐘 (JavaScript)**：動態每秒跳動的「**時 (HH) : 分 (MM) : 秒 (SS)**」，附秒數進度流動條與 12/24 小時制切換。
5. **風格視覺**：清爽淺藍主題 (Light Blue Theme) + 活潑圓潤字體 (`Fredoka` & `Quicksand`) + 豐富可愛動物伴侶（貓咪、柴犬、兔子、熊貓互動摸摸反饋與時段問候）。

---

## 專案目錄結構

```
0916/
├── index.html              # 個人履歷主網站 (HTML5, SEO Meta)
├── clock.html              # 可愛動物即時時鐘網站
├── css/
│   ├── style.css           # 主站淺藍色設計系統
│   └── clock.css           # 可愛動物時鐘專屬樣式
├── js/
│   ├── main.js             # 主站互動邏輯
│   └── clock.js            # 即時時鐘、程式執行模擬與動物互動
├── assets/
│   └── images/             # 形象照與作品預覽圖片
├── .gitignore
└── README.md
```

---

## 本地運行方式

直接雙擊開啟 `index.html` 或 `clock.html`，或使用任何靜態網頁伺服器：

```bash
# 使用 Python 內建伺服器
python -m http.server 8080

# 或使用 Node.js npx serve
npx serve
```

接著在瀏覽器打開 `http://localhost:8080` 或 `http://localhost:8080/clock.html` 即可預覽。
