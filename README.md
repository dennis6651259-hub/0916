# 個人品牌與履歷作品集網站 (Alex Chen Portfolio)

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

## 專案目錄結構

```
0916/
├── index.html              # 主要頁面結構 (HTML5, SEO Meta)
├── css/
│   └── style.css           # 淺藍色設計系統、CSS 變數、響應式排版
├── js/
│   └── main.js             # 導航滾動、作品分類篩選、彈窗檢視、Toast 通知
├── assets/
│   └── images/             # 個人形象照與作品預覽圖片
├── .gitignore
└── README.md
```

---

## 本地運行方式

直接雙擊開啟 `index.html`，或使用任何靜態網頁伺服器：

```bash
# 使用 Python 內建伺服器
python -m http.server 8080

# 或使用 Node.js npx serve
npx serve
```

接著在瀏覽器打開 `http://localhost:8080` 即可預覽。
