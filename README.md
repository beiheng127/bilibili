# 🎬 Bilibili 网页克隆 - 个人项目

![License](https://img.shields.io/badge/License-MIT-brightgreen.svg)
![HTML5](https://img.shields.io/badge/HTML5-Latest-orange.svg)
![CSS3](https://img.shields.io/badge/CSS3-Latest-blue.svg)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg)
![Status](https://img.shields.io/badge/Status-Active-success.svg)

## 📋 项目简介

**Bilibili 网页克隆** 是一个仿造 Bilibili（哔哩哔哩）视频平台网页界面的个人项目。通过纯 HTML、CSS 和 JavaScript 实现，包含了视频平台常见的交互功能和美观的界面设计，是学习前端基础知识和实践 Web 开发的理想项目。

### ✨ 项目特色

- 🎨 **精美的 UI 设计** - 还原 Bilibili 官方设计语言，细节雕琢到位
- ⚡ **流畅的交互效果** - 下拉菜单、轮播图、响应式布局等基础功能完整实现
- 📱 **响应式设计** - 适配不同屏幕尺寸，提供一致的用户体验
- 🎯 **模块化结构** - 清晰的目录组织，易于维护和扩展
- 💻 **纯前端实现** - 无后端依赖，开箱即用
- 🎓 **教学价值** - 适合初学者学习 HTML、CSS、JavaScript

---

## 📖 目录

- [项目简介](#项目简介)
- [屏幕截图](#屏幕截图)
- [功能特性](#功能特性)
- [项目结构](#项目结构)
- [技术栈](#技术栈)
- [快速开始](#快速开始)
- [功能说明](#功能说明)
- [代码示例](#代码示例)
- [学习资源](#学习资源)

---

## 🖼️ 屏幕截图

### 主页面
![主页示例](https://github.com/user-attachments/assets/ccd5a7e7-0f74-4d6d-b992-7abd27d05d3e)

主页展示了 Bilibili 的核心布局：
- 顶部导航栏（包含搜索框、用户菜单）
- 左侧频道菜单（可收缩）
- 中间视频流（推荐视频列表）
- 右侧推荐区域
- 响应式网格布局

### 个人空间页面
![个人空间示例](https://github.com/user-attachments/assets/6c039b72-5b48-4c25-b93f-ca3ba9b949bf)

个人空间展示了用户相关功能：
- 用户头像和基本信息
- 用户统计数据（粉丝、关注、浏览历史等）
- 用户上传的视频列表
- 用户的播放列表和收藏夹
- 个性化推荐内容

---

## ✨ 功能特性

### 🎯 核心功能

| 功能 | 说明 | 实现方式 |
|------|------|---------|
| **顶部导航菜单** | 可展开/收起的频道选择菜单 | JavaScript 事件监听 |
| **轮播图** | 自动播放和手动切换的视频轮播 | 定时器 + 过渡动画 |
| **下拉菜单** | 用户菜单、频道菜单等下拉功能 | 点击事件 + DOM 操作 |
| **响应式布局** | 不同屏幕尺寸的自适应显示 | CSS Media Query |
| **搜索功能** | 搜索框输入和搜索建议显示 | 实时搜索提示 |
| **视频卡片** | 视频预览卡片，悬停显示详情 | CSS Hover 效果 |
| **用户交互** | 点赞、评论、分享等交互提示 | 按钮交互反馈 |
| **页面切换** | 主页、个人空间等页面导航 | Hash 路由 / 动态加载 |

### 📊 页面模块

#### 主页面 (`index.html`)
```
┌─────────────────────────────────────────┐
│          顶部导航栏（Header）             │
├──┬──────────────────────────────────────┤
│  │                                      │
│频│    中间内容区域                       │
│道│                                      │
│菜│  - 轮播图（Featured Videos）         │
│单│  - 视频推荐网格                       │
│  │  - 分类标签切换                       │
│  │                                      │
├──┴──────────────────────────────────────┤
│         底部页脚（Footer）               │
└─────────────────────────────────────────┘
```

#### 个人空间页面 (`user-profile.html`)
```
┌─────────────────────────────────────────┐
│          顶部导航栏（Header）             │
├─────────────────────────────────────────┤
│                                         │
│  用户信息区域                            │
│  - 用户头像、名称、签名                   │
│  - 关注/粉丝/观看量统计                  │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  标签页导航（Tabs）                      │
│  - 我的视频、我的收藏、推荐内容           │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  内容显示区域                            │
│  - 根据选择的标签显示对应内容             │
│  - 视频列表、播放列表等                   │
│                                         │
└─────────────────────────────────────────┘
```

---

## 🛠️ 技术栈

| 技术 | 版本 | 用途 |
|------|------|------|
| **HTML5** | Latest | 页面结构与语义化标签 |
| **CSS3** | Latest | 样式设计与响应式布局 |
| **JavaScript** | ES6+ | 交互功能与动态效果 |
| **Font Awesome** | 6.0+ | 图标库（可选） |

### 核心技术特点

#### HTML5
- 语义化标签（`<header>`, `<nav>`, `<section>`, `<article>` 等）
- 无障碍设计（ARIA 属性）
- 表单元素与验证

#### CSS3
- Flexbox 布局
- Grid 网格布局
- Media Query 响应式设计
- CSS 动画和过渡
- CSS Variables 变量
- Gradient 渐变背景

#### JavaScript
- DOM 操作（选择、修改、删除元素）
- 事件处理（点击、悬停、滚动等）
- 定时器（轮播图自动播放）
- 防抖和节流（搜索建议）
- 本地存储（localStorage/sessionStorage）

---

## 📁 项目结构

```
bilibili-clone/
├── index.html                    # 主页面
├── user-profile.html             # 个人空间页面
├── css/
│   ├── style.css                 # 主样式文件
│   ├── responsive.css            # 响应式样式
│   ├── components/               # 组件样式
│   │   ├── header.css            # 顶部导航样式
│   │   ├── sidebar.css           # 侧边栏样式
│   │   ├── carousel.css          # 轮播图样式
│   │   ├── video-card.css        # 视频卡片样式
│   │   └── user-profile.css      # 个人资料样式
│   └── variables.css             # CSS 变量定义
├── js/
│   ├── main.js                   # 主入口脚本
│   ├── carousel.js               # 轮播图功能
│   ├── menu.js                   # 菜单功能
│   ├── search.js                 # 搜索功能
│   ├── user-profile.js           # 个人空间功能
│   └── utils.js                  # 工具函数
├── images/                       # 图片资源
│   ├── logo.png                  # Logo
│   ├── avatars/                  # 用户头像
│   ├── thumbnails/               # 视频缩略图
│   └── banners/                  # 轮播图
├── data/
│   └── videos.json               # 视频数据（本地 JSON）
└── README.md                     # 项目文档
```

---

## 🚀 快速开始

### 📋 前置要求

- 现代浏览器（Chrome、Firefox、Safari 或 Edge）
- 代码编辑器（VS Code 推荐）
- 本地 Web 服务器（可选，用于避免 CORS 问题）

### 💻 安装与运行

#### 方式 1：直接打开（简单方式）

```bash
# 1. 克隆或下载项目
git clone https://github.com/yourusername/bilibili-clone.git
cd bilibili-clone

# 2. 直接在浏览器中打开
# Windows: 双击 index.html
# macOS/Linux: 在浏览器中拖拽 index.html 或使用以下命令
open index.html
```

#### 方式 2：使用本地 Web 服务器（推荐）

**Python 3**:
```bash
python -m http.server 8000

# 然后在浏览器打开：http://localhost:8000
```

**Node.js (使用 http-server)**:
```bash
# 全局安装 http-server
npm install -g http-server

# 启动服务器
http-server

# 访问：http://localhost:8080
```

**VS Code Live Server 扩展**:
```bash
# 1. 在 VS Code 中安装 "Live Server" 扩展
# 2. 右键点击 index.html
# 3. 选择 "Open with Live Server"
```

---

## 🎯 功能说明

### 1. 轮播图（Carousel）

**文件**: `js/carousel.js`, `css/components/carousel.css`

**功能描述**:
- 自动播放视频轮播
- 手动切换（上一个/下一个按钮）
- 指示点导航
- 平滑过渡动画

**使用示例**:
```html
<div class="carousel">
  <div class="carousel-container">
    <img src="images/banner1.jpg" alt="Banner 1">
    <img src="images/banner2.jpg" alt="Banner 2">
    <img src="images/banner3.jpg" alt="Banner 3">
  </div>
  <button class="carousel-btn prev">❮</button>
  <button class="carousel-btn next">❯</button>
  <div class="carousel-indicators">
    <span class="indicator active"></span>
    <span class="indicator"></span>
    <span class="indicator"></span>
  </div>
</div>
```

**JavaScript 实现**:
```javascript
class Carousel {
  constructor(selector) {
    this.carousel = document.querySelector(selector);
    this.slides = this.carousel.querySelectorAll('img');
    this.currentIndex = 0;
    this.autoPlayInterval = null;
    this.init();
  }

  init() {
    this.autoPlay();
    this.attachEventListeners();
  }

  autoPlay() {
    this.autoPlayInterval = setInterval(() => {
      this.next();
    }, 5000);  // 5 秒切换一次
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    this.updateCarousel();
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    this.updateCarousel();
  }

  updateCarousel() {
    const offset = -this.currentIndex * 100;
    this.carousel.querySelector('.carousel-container').style.transform = `translateX(${offset}%)`;
    
    // 更新指示点
    document.querySelectorAll('.indicator').forEach((dot, index) => {
      dot.classList.toggle('active', index === this.currentIndex);
    });
  }

  attachEventListeners() {
    document.querySelector('.carousel-btn.next').addEventListener('click', () => this.next());
    document.querySelector('.carousel-btn.prev').addEventListener('click', () => this.prev());
  }
}

// 使用
const carousel = new Carousel('.carousel');
```

### 2. 下拉菜单（Dropdown Menu）

**文件**: `js/menu.js`, `css/components/header.css`

**功能描述**:
- 点击打开/关闭菜单
- 点击外部自动关闭
- 键盘支持（ESC 关闭）

**HTML 结构**:
```html
<div class="dropdown">
  <button class="dropdown-trigger">菜单 ▼</button>
  <ul class="dropdown-menu">
    <li><a href="#home">主页</a></li>
    <li><a href="#trending">热门</a></li>
    <li><a href="#subscriptions">订阅</a></li>
    <li><hr></li>
    <li><a href="#library">我的库</a></li>
  </ul>
</div>
```

**JavaScript 实现**:
```javascript
class DropdownMenu {
  constructor(selector) {
    this.dropdown = document.querySelector(selector);
    this.trigger = this.dropdown.querySelector('.dropdown-trigger');
    this.menu = this.dropdown.querySelector('.dropdown-menu');
    this.init();
  }

  init() {
    // 点击触发器打开/关闭菜单
    this.trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      this.toggle();
    });

    // 点击菜单项关闭菜单
    this.menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => this.close());
    });

    // 点击外部关闭菜单
    document.addEventListener('click', (e) => {
      if (!this.dropdown.contains(e.target)) {
        this.close();
      }
    });

    // ESC 键关闭菜单
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.close();
      }
    });
  }

  toggle() {
    this.menu.classList.toggle('active');
  }

  open() {
    this.menu.classList.add('active');
  }

  close() {
    this.menu.classList.remove('active');
  }
}

// 使用
new DropdownMenu('.dropdown');
```

### 3. 响应式布局

**文件**: `css/responsive.css`

**实现方式**:
```css
/* 桌面设备 (1200px 以上) */
@media (min-width: 1200px) {
  .container {
    max-width: 1200px;
    display: grid;
    grid-template-columns: 250px 1fr;
  }
  
  .sidebar {
    display: block;
    width: 250px;
  }
  
  .content {
    margin-left: 20px;
  }
}

/* 平板设备 (768px - 1199px) */
@media (min-width: 768px) and (max-width: 1199px) {
  .container {
    grid-template-columns: 200px 1fr;
  }
  
  .video-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* 移动设备 (小于 768px) */
@media (max-width: 767px) {
  .sidebar {
    display: none;
  }
  
  .video-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .header {
    padding: 10px;
  }
  
  .search-box {
    display: none;
  }
}

/* 超小屏幕 (小于 480px) */
@media (max-width: 479px) {
  .video-grid {
    grid-template-columns: 1fr;
  }
  
  .header {
    flex-direction: column;
  }
}
```

### 4. 搜索功能

**文件**: `js/search.js`

**功能描述**:
- 实时搜索建议
- 防抖优化
- 搜索历史保存

**JavaScript 实现**:
```javascript
class SearchBox {
  constructor(selector) {
    this.input = document.querySelector(selector);
    this.suggestionsContainer = null;
    this.searchHistory = this.loadHistory();
    this.debounceTimer = null;
    this.init();
  }

  init() {
    this.input.addEventListener('input', (e) => {
      this.onInput(e.target.value);
    });

    this.input.addEventListener('focus', () => {
      this.showHistory();
    });
  }

  onInput(value) {
    // 防抖：300ms 后执行搜索
    clearTimeout(this.debounceTimer);
    this.debounceTimer = setTimeout(() => {
      if (value.length > 0) {
        this.fetchSuggestions(value);
      } else {
        this.showHistory();
      }
    }, 300);
  }

  fetchSuggestions(query) {
    // 模拟搜索建议（实际应调用 API）
    const suggestions = this.mockData.filter(item =>
      item.toLowerCase().includes(query.toLowerCase())
    );
    this.showSuggestions(suggestions);
  }

  showSuggestions(suggestions) {
    if (!this.suggestionsContainer) {
      this.suggestionsContainer = document.createElement('div');
      this.suggestionsContainer.className = 'search-suggestions';
      this.input.parentNode.appendChild(this.suggestionsContainer);
    }

    this.suggestionsContainer.innerHTML = suggestions
      .map(s => `<div class="suggestion-item">${s}</div>`)
      .join('');
  }

  loadHistory() {
    return JSON.parse(localStorage.getItem('searchHistory')) || [];
  }

  saveToHistory(query) {
    if (!this.searchHistory.includes(query)) {
      this.searchHistory.unshift(query);
      this.searchHistory = this.searchHistory.slice(0, 10); // 只保留 10 条
      localStorage.setItem('searchHistory', JSON.stringify(this.searchHistory));
    }
  }

  showHistory() {
    this.showSuggestions(this.searchHistory);
  }

  get mockData() {
    return [
      '编程教程',
      '前端开发',
      'JavaScript 进阶',
      'React 教程',
      'CSS 动画',
      'Web 设计',
      '游戏推荐'
    ];
  }
}

// 使用
new SearchBox('.search-input');
```

### 5. 个人空间标签页

**文件**: `js/user-profile.js`, `css/components/user-profile.css`

**功能描述**:
- 标签页切换
- 动态加载内容
- 用户信息显示

**JavaScript 实现**:
```javascript
class UserProfile {
  constructor() {
    this.tabs = document.querySelectorAll('.profile-tab');
    this.contents = document.querySelectorAll('.tab-content');
    this.init();
  }

  init() {
    this.tabs.forEach(tab => {
      tab.addEventListener('click', (e) => {
        this.switchTab(e.target.dataset.tab);
      });
    });
  }

  switchTab(tabName) {
    // 移除所有 active 类
    this.tabs.forEach(tab => tab.classList.remove('active'));
    this.contents.forEach(content => content.classList.remove('active'));

    // 添加 active 类到当前标签和内容
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
    document.querySelector(`[data-content="${tabName}"]`).classList.add('active');
  }
}

// 使用
new UserProfile();
```

---

## 💻 代码示例

### 完整的轮播图实现

**HTML**:
```html
<div class="carousel-wrapper">
  <div class="carousel">
    <div class="carousel-container">
      <img src="images/banner1.jpg" alt="Banner 1" class="carousel-slide">
      <img src="images/banner2.jpg" alt="Banner 2" class="carousel-slide">
      <img src="images/banner3.jpg" alt="Banner 3" class="carousel-slide">
    </div>
    <button class="carousel-btn prev" aria-label="Previous slide">❮</button>
    <button class="carousel-btn next" aria-label="Next slide">❯</button>
  </div>
  <div class="carousel-indicators">
    <span class="indicator active" data-slide="0"></span>
    <span class="indicator" data-slide="1"></span>
    <span class="indicator" data-slide="2"></span>
  </div>
</div>
```

**CSS**:
```css
.carousel-wrapper {
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 8px;
}

.carousel {
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
  background-color: #000;
}

.carousel-container {
  display: flex;
  width: 100%;
  height: 100%;
  transition: transform 0.5s ease-in-out;
}

.carousel-slide {
  min-width: 100%;
  height: 100%;
  object-fit: cover;
}

.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 12px 16px;
  font-size: 24px;
  cursor: pointer;
  z-index: 10;
  transition: background-color 0.3s ease;
}

.carousel-btn:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

.carousel-btn.prev {
  left: 20px;
}

.carousel-btn.next {
  right: 20px;
}

.carousel-indicators {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 10;
}

.indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.indicator.active {
  background-color: #fff;
}
```

**JavaScript**:
```javascript
class Carousel {
  constructor(containerSelector = '.carousel-container') {
    this.container = document.querySelector(containerSelector);
    this.slides = this.container.querySelectorAll('.carousel-slide');
    this.indicators = document.querySelectorAll('.indicator');
    this.currentIndex = 0;
    this.autoPlayInterval = null;
    this.autoPlayDelay = 5000; // 5 秒

    this.init();
  }

  init() {
    this.attachEventListeners();
    this.startAutoPlay();
  }

  attachEventListeners() {
    // 上一个按钮
    document.querySelector('.carousel-btn.prev')?.addEventListener('click', () => {
      this.prev();
      this.resetAutoPlay();
    });

    // 下一个按钮
    document.querySelector('.carousel-btn.next')?.addEventListener('click', () => {
      this.next();
      this.resetAutoPlay();
    });

    // 指示点
    this.indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => {
        this.goToSlide(index);
        this.resetAutoPlay();
      });
    });

    // 鼠标悬停时暂停自动播放
    this.container.parentElement.addEventListener('mouseenter', () => {
      this.stopAutoPlay();
    });

    this.container.parentElement.addEventListener('mouseleave', () => {
      this.startAutoPlay();
    });
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    this.updateCarousel();
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    this.updateCarousel();
  }

  goToSlide(index) {
    this.currentIndex = index;
    this.updateCarousel();
  }

  updateCarousel() {
    // 更新容器位置
    const offset = -this.currentIndex * 100;
    this.container.style.transform = `translateX(${offset}%)`;

    // 更新指示点
    this.indicators.forEach((indicator, index) => {
      indicator.classList.toggle('active', index === this.currentIndex);
    });
  }

  startAutoPlay() {
    this.autoPlayInterval = setInterval(() => {
      this.next();
    }, this.autoPlayDelay);
  }

  stopAutoPlay() {
    clearInterval(this.autoPlayInterval);
  }

  resetAutoPlay() {
    this.stopAutoPlay();
    this.startAutoPlay();
  }
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
  new Carousel();
});
```

---

## 📚 学习资源

### 推荐阅读

#### HTML5 & 语义化
- [MDN: HTML 元素参考](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
- [HTML5 语义化标签](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_HTML_to_solve_common_problems)

#### CSS3 & 布局
- [MDN: CSS 布局](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout)
- [Flexbox 完全指南](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Grid 完全指南](https://css-tricks.com/snippets/css/complete-guide-grid/)

#### JavaScript
- [MDN: JavaScript 指南](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [You Don't Know JS Yet](https://github.com/getify/You-Dont-Know-JS)
- [JavaScript 设计模式](https://www.patterns.dev/posts/classic-design-patterns/)

### 实用工具

- **代码编辑器**: [VS Code](https://code.visualstudio.com/)
- **浏览器开发者工具**: 内置于 Chrome、Firefox、Safari
- **版本控制**: [Git & GitHub](https://github.com/)
- **UI 设计**: [Figma](https://www.figma.com/)
- **性能测试**: [Lighthouse](https://developers.google.com/web/tools/lighthouse)

---

## 🎨 CSS 美化要点

### 1. 视觉层次
```css
/* 使用字体大小、颜色、间距创建层次感 */
h1 { font-size: 32px; color: #000; }
h2 { font-size: 24px; color: #333; }
p { font-size: 16px; color: #666; }
```

### 2. 颜色搭配
```css
/* Bilibili 官方配色方案 */
:root {
  --primary-color: #00a1d6;    /* 蓝色 */
  --secondary-color: #fb7299;  /* 粉红色 */
  --text-primary: #222;        /* 深灰 */
  --text-secondary: #666;      /* 浅灰 */
  --background: #fff;          /* 白色 */
  --border-color: #e5e7eb;     /* 浅灰边框 */
}
```

### 3. 阴影效果
```css
/* 微妙的阴影提升设计感 */
.video-card {
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
}

.video-card:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}
```

### 4. 动画过渡
```css
/* 流畅的动画提升交互体验 */
.button {
  transition: all 0.3s ease;
}

.button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}
```

---

## 🔧 扩展建议

### 短期改进
- [ ] 添加视频播放器功能
- [ ] 实现评论系统
- [ ] 增加点赞和分享功能
- [ ] 优化移动端适配
- [ ] 添加暗黑模式

### 中期改进
- [ ] 集成后端 API
- [ ] 用户登录/注册系统
- [ ] 个人数据持久化
- [ ] 视频上传功能
- [ ] 推荐算法实现

### 长期规划
- [ ] 使用 Vue.js / React 重构
- [ ] 添加实时通知功能
- [ ] 视频转码和流媒体处理
- [ ] 社交互动功能（直播、弹幕）
- [ ] 移动应用开发

---

## 🤝 贡献指南

欢迎提交改进建议和代码贡献！

### 开发工作流
1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交变更 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

---

## 📄 开源协议

本项目采用 **MIT License** 开源协议。详见 [LICENSE](LICENSE) 文件。

---

## 📞 联系方式

- GitHub: [@beiheng127](https://github.com/beiheng127)
- Issues: [提交问题](https://github.com/beiheng127/bilibili-clone/issues)

---

## 🙏 致谢

感谢以下资源的支持：

- [Bilibili 官方网站](https://www.bilibili.com/) - 设计参考
- [MDN Web 文档](https://developer.mozilla.org/) - 技术文档
- [CSS-Tricks](https://css-tricks.com/) - CSS 最佳实践

---

## 📊 项目统计

- 📄 **HTML 文件**: 2 个
- 🎨 **CSS 文件**: 5+ 个
- 💻 **JavaScript 文件**: 6+ 个
- 📁 **资源文件**: 图片、数据文件等
- ✨ **核心功能**: 轮播图、菜单、搜索、响应式设计

---

<div align="center">

**⭐ 如果觉得有帮助，请给个 Star 支持一下！**

Made with ❤️ by [Beiheng](https://github.com/beiheng127)

</div>

---

## 快速参考

### 常用 CSS 类名
```
.header              - 顶部导航栏
.sidebar             - 左侧菜单栏
.main-content        - 主内容区域
.video-grid          - 视频网格布局
.video-card          - 视频卡片
.carousel            - 轮播图容器
.dropdown            - 下拉菜单
.user-profile        - 个人资料页面
```

### 常用 JavaScript 函数
```javascript
// 轮播图初始化
new Carousel();

// 菜单初始化
new DropdownMenu('.dropdown');

// 搜索功能初始化
new SearchBox('.search-input');

// 用户资料初始化
new UserProfile();
```

### 快捷键支持
- `ESC` - 关闭菜单和弹窗
- `Enter` - 提交搜索
- `Space` - 播放/暂停视频（如实现）

---

## 故障排除

### 问题：轮播图不能自动播放
**解决方案**: 检查 `js/carousel.js` 中的初始化代码是否正确执行

### 问题：菜单不能正常打开/关闭
**解决方案**: 确保 DOM 元素的选择器与 HTML 中的 class/id 一致

### 问题：样式不能正确加载
**解决方案**: 检查 CSS 文件路径，确保 `<link>` 标签的 `href` 属性正确

### 问题：响应式布局在移动设备上不生效
**解决方案**: 确保 HTML `<head>` 中包含 viewport meta 标签：
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
