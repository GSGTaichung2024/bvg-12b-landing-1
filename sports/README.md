# 12BET 賭場 Landing 頁面

## 功能特色

### 🎰 頁面特色
- **滿版GIF背景**: 點擊可跳轉至主網站
- **響應式設計**: 完美適配手機和桌面設備
- **泰文優惠跑馬燈**: 包含首儲120%和12%反水優惠
- **動畫特效**: 多種CSS動畫和互動效果
- **GA事件追蹤**: 完整的用戶行為分析

### 📱 手機優化
- 觸摸友好的界面設計
- 振動反饋支援
- 手勢識別（向上滑動高亮CTA）
- 自適應字體和元素大小

### 📊 分析追蹤
- 頁面載入追蹤
- 點擊事件追蹤
- 停留時間統計
- 性能監控
- 錯誤追蹤

## 使用方法

### 1. 設定 Google Analytics
在 `index.html` 中將 `GA_MEASUREMENT_ID` 替換為您的實際 GA 追蹤 ID：

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID"></script>
<script>
    gtag('config', 'YOUR_GA_ID');
</script>
```

### 2. 啟動本地服務器
```bash
# 使用 Python
python3 -m http.server 8000

# 或使用 Node.js
npx serve .

# 或使用 PHP
php -S localhost:8000
```

### 3. 訪問頁面
在瀏覽器中打開 `http://localhost:8000`

## 自定義設定

### 更換圖片素材
- 替換 `https://via.placeholder.com/...` 網址為實際圖片
- 建議使用 CDN 或本地圖片資源
- GIF 建議大小：800x600px 或更高解析度

### 修改跳轉連結
在 `script.js` 中修改目標網址：
```javascript
const targetUrl = 'https://nova88link.com/nvbvg88-2/';
```

### 調整優惠文字
在 `index.html` 中修改跑馬燈內容：
```html
<span class="promo-item">🎉 เพิ่มเงิน 120% สูงสุด 3,000 บาท! 🎉</span>
<span class="promo-item">💎 โบนัสรายวันแบล็คเทอร์เทิส 12% 💎</span>
```

## 文件結構
```
├── index.html          # 主頁面
├── style.css           # 樣式文件
├── script.js           # JavaScript 功能
└── README.md           # 說明文件
```

## 瀏覽器支援
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+
- 移動端瀏覽器

## 性能優化建議
1. 壓縮圖片資源
2. 使用 WebP 格式圖片
3. 啟用 Gzip 壓縮
4. 使用 CDN 加速
5. 預載入關鍵資源

## 安全注意事項
- 確保所有外部連結使用 HTTPS
- 定期更新依賴項
- 驗證用戶輸入（如有表單）
- 實施 CSP 政策

## 聯絡資訊
如有問題或需要技術支援，請聯絡開發團隊。