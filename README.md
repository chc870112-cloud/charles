# 小喵记账 - 应用官网

https://chc870112-cloud.github.io/charles/index.html

这是小喵记账应用的官方网站，用于展示应用功能、特色和下载信息。

## 📱 应用介绍

小喵记账是一款专业的个人财务管理应用，帮助用户轻松管理收支、记录账单、分析财务状况，让理财变得简单高效。

## 🌟 主要功能

- **智能记账** - 快速记录收支，支持多种分类
- **统计分析** - 直观的图表展示，分析收支情况
- **交易明细** - 详细的交易记录，支持搜索筛选
- **个人中心** - 个性化设置，数据管理

## 🎨 网站特色

- **响应式设计** - 完美适配各种设备
- **现代化UI** - 简洁美观的界面设计
- **微信分享优化** - 针对微信分享平台优化
- **SEO友好** - 搜索引擎优化
- **快速加载** - 性能优化，快速访问

## 📁 文件结构

```
xiaoxiao-finance-website/
├── index.html          # 主页面
├── styles.css          # 样式文件
├── script.js           # 交互脚本
├── images/             # 图片资源
│   ├── app-icon.png    # 应用图标
│   ├── homepage-screenshot.png
│   ├── record-screenshot.png
│   ├── statistics-screenshot.png
│   ├── details-screenshot.png
│   ├── profile-screenshot.png
│   ├── harmonyos-logo.png
│   └── favicon.ico
└── README.md           # 说明文档
```

## 🚀 部署方式

### 方式一：阿里云 OSS 静态网站托管

1. **创建OSS存储桶**
   - 登录阿里云控制台
   - 创建OSS存储桶
   - 设置存储桶为公共读权限

2. **上传文件**
   - 将所有文件上传到OSS存储桶
   - 设置index.html为默认首页

3. **配置静态网站托管**
   - 在OSS控制台开启静态网站托管
   - 设置默认首页为index.html
   - 获取访问域名

### 方式二：Coding Pages

1. **创建代码仓库**
   - 在Coding平台创建新仓库
   - 上传所有文件到仓库

2. **开启Pages服务**
   - 在仓库设置中开启Pages服务
   - 选择部署分支（通常是main或master）
   - 等待部署完成

3. **自定义域名（可选）**
   - 绑定自定义域名
   - 配置DNS解析

### 方式三：GitHub Pages

1. **创建GitHub仓库**
   - 在GitHub创建新仓库
   - 上传所有文件

2. **开启GitHub Pages**
   - 在仓库设置中开启Pages
   - 选择部署分支
   - 获取访问地址

## 📸 所需图片资源

请准备以下图片文件并放置在`images/`目录下：

- `app-icon.png` - 应用图标 (建议尺寸: 512x512px)
- `homepage-screenshot.png` - 首页截图
- `record-screenshot.png` - 记账页面截图
- `statistics-screenshot.png` - 统计页面截图
- `details-screenshot.png` - 明细页面截图
- `profile-screenshot.png` - 个人中心截图
- `harmonyos-logo.png` - HarmonyOS Logo
- `favicon.ico` - 网站图标

## 🔧 自定义配置

### 修改联系信息

在`index.html`中找到联系信息部分，修改邮箱地址：

```html
<div class="contact-item">
    <span class="contact-icon">📧</span>
    <span>邮箱：chc_cz0112@163.com</span>
</div>
```

### 修改分享信息

在`index.html`的`<head>`部分修改Open Graph标签：

```html
<meta property="og:title" content="小喵记账 - 个人财务管理专家">
<meta property="og:description" content="专业的个人财务管理应用，轻松管理收支、记录账单、分析财务状况">
<meta property="og:image" content="./images/app-icon.png">
<meta property="og:url" content="https://your-domain.com">
```

### 修改下载链接

在下载部分修改应用下载链接：

```html
<a href="your-app-download-link" class="download-btn">
    <img src="./images/harmonyos-logo.png" alt="HarmonyOS">
    <div>
        <span>下载应用</span>
        <small>HarmonyOS</small>
    </div>
</a>
```

## 📱 微信分享优化

网站已针对微信分享进行了优化：

- 添加了微信专用的meta标签
- 优化了分享标题和描述
- 设置了合适的分享图片
- 支持微信内置浏览器

## 🎯 SEO优化

- 语义化HTML结构
- 合理的标题层级
- Meta标签优化
- 图片alt属性
- 结构化数据

## 📊 性能优化

- 图片懒加载
- CSS和JS压缩
- 资源预加载
- 缓存策略
- 响应式图片

## 🔒 安全考虑

- HTTPS部署
- 内容安全策略
- XSS防护
- 安全的链接

## 📞 技术支持

如有任何问题，请联系：

- 邮箱：chc_cz0112@163.com
- 欢迎反馈使用体验

## 📄 许可证

© 2024 小喵记账. 让理财变得简单高效.

---

**注意：** 部署前请确保所有图片资源已准备完毕，并根据实际情况修改联系信息和下载链接。

