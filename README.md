# 個人品牌與履歷作品集網站 (7115064172-王鼎昌)

🔗 **線上即時預覽網址 (GitHub Pages)**: [https://dennis6651259-hub.github.io/0916/](https://dennis6651259-hub.github.io/0916/)  
🐾 **可愛動物即時時鐘專區**: [https://dennis6651259-hub.github.io/0916/clock.html](https://dennis6651259-hub.github.io/0916/clock.html)

<img width="1328" height="719" alt="image" src="https://github.com/user-attachments/assets/459ee7f7-9f17-451f-9610-813a796600e4" />

---

專為資深全端工程師與 UI/UX 設計師打造的個人品牌網站。整體視覺以**清爽淺藍色（Soft Sky / Ice Blue）**為主色調，結合毛玻璃微質感（Glassmorphism）、微動畫及響應式適配。

---

## 視覺與特色

- **清爽淺藍主題**：冰藍色漸層、動態環境微光暈、毛玻璃半透明卡片。
- **個人形象展示**：高品質肖像照片、動態光暈邊框、實戰經歷徽章。
- **個人履歷時程**：清晰的工作經歷與學歷認證時程軸（Timeline）。
- **技能矩陣**：前端工程、後端架構、UI/UX 設計三大分類與進度視覺化。
- **作品集分類**：支援即時分類篩選（Web 應用、行動介面、設計）與互動詳情彈窗（Modal）。
- **聯絡表單**：表單驗證、載入狀態與即時彈出式 Toast 回饋。

---

## 網站內容

專案內包含兩個特色網站：
1. **個人品牌與履歷主站 (`index.html`)**：
   - 清爽淺藍主題，結合毛玻璃微質感、個人形象照、工作履歷時程、技能矩陣與 4 大作品集彈窗。
2. **可愛動物即時時鐘專區 (`clock.html`)**：
   - **自我介紹**：電機系 - 王鼎昌（學號 7115064172）。
   - **專業技能**：Python 與 C 語言底層與自動化能力。
   - **專案展示**：可互動切換與執行的 `Hello World` 模擬終端機（支援 C 與 Python 一鍵運行輸出）。
   - **即時時鐘**：JavaScript 驅動的大型「時、分、秒」動態跳動時鐘，附秒數進度條與 12/24 小時制切換。
   - **可愛動物伴侶**：眨眼貓咪、搖耳柴犬、長耳兔子與熊貓互動微動畫，隨時段變換問候語。

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
