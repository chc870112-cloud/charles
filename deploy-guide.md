# 小小理财官网部署指南

## 🚀 快速部署

### 方式一：阿里云 OSS 静态网站托管（推荐）

#### 1. 准备工作
- 阿里云账号
- 已备案的域名（可选，也可以使用OSS提供的域名）

#### 2. 创建OSS存储桶
1. 登录[阿里云控制台](https://oss.console.aliyun.com/)
2. 点击"创建Bucket"
3. 填写Bucket名称（如：xiaoxiao-finance-website）
4. 选择地域（建议选择离用户最近的地域）
5. 存储类型选择"标准存储"
6. 读写权限选择"公共读"
7. 点击"确定"创建

#### 3. 上传文件
1. 进入创建的Bucket
2. 点击"文件管理" -> "上传文件"
3. 选择所有网站文件（index.html, styles.css, script.js, images文件夹等）
4. 点击"开始上传"

#### 4. 配置静态网站托管
1. 在Bucket概览页面，点击"基础设置" -> "静态页面"
2. 开启"静态页面"
3. 设置默认首页为：`index.html`
4. 设置默认404页为：`index.html`（可选）
5. 点击"保存"

#### 5. 获取访问地址
1. 在静态页面设置中，复制"访问域名"
2. 格式类似：`http://xiaoxiao-finance-website.oss-cn-hangzhou.aliyuncs.com`

#### 6. 自定义域名（可选）
1. 在"传输管理" -> "域名管理"中添加自定义域名
2. 需要域名已备案
3. 配置CNAME记录指向OSS域名

### 方式二：Coding Pages

#### 1. 准备工作
- Coding账号
- 已准备网站文件

#### 2. 创建代码仓库
1. 登录[Coding平台](https://coding.net/)
2. 点击"创建项目"
3. 选择"代码托管"
4. 填写项目名称：`xiaoxiao-finance-website`
5. 选择"公开"或"私有"
6. 点击"创建项目"

#### 3. 上传代码
1. 在项目页面点击"代码" -> "上传文件"
2. 选择所有网站文件
3. 填写提交信息
4. 点击"提交"

#### 4. 开启Pages服务
1. 在项目页面点击"Pages"
2. 点击"立即发布"
3. 选择部署分支（通常是main）
4. 选择部署目录（根目录）
5. 点击"发布"

#### 5. 获取访问地址
1. 等待部署完成
2. 复制提供的访问地址
3. 格式类似：`https://your-username.coding.net/p/xiaoxiao-finance-website`

### 方式三：GitHub Pages

#### 1. 准备工作
- GitHub账号
- Git客户端

#### 2. 创建仓库
1. 登录[GitHub](https://github.com/)
2. 点击"New repository"
3. 填写仓库名：`xiaoxiao-finance-website`
4. 选择"Public"
5. 勾选"Add a README file"
6. 点击"Create repository"

#### 3. 上传文件
```bash
# 克隆仓库
git clone https://github.com/your-username/xiaoxiao-finance-website.git
cd xiaoxiao-finance-website

# 复制网站文件到仓库目录
cp -r /path/to/website/files/* .

# 提交更改
git add .
git commit -m "Initial website deployment"
git push origin main
```

#### 4. 开启GitHub Pages
1. 在仓库页面点击"Settings"
2. 滚动到"Pages"部分
3. 在"Source"下选择"Deploy from a branch"
4. 选择分支"main"
5. 选择文件夹"/ (root)"
6. 点击"Save"

#### 5. 获取访问地址
1. 等待部署完成（通常需要几分钟）
2. 在Pages设置页面查看访问地址
3. 格式类似：`https://your-username.github.io/xiaoxiao-finance-website`

## 📸 图片资源准备

### 必需图片文件
请准备以下图片并放置在`images/`目录下：

1. **app-icon.png** (512x512px)
   - 应用图标
   - 用于网站logo和分享图片

2. **homepage-screenshot.png**
   - 首页截图
   - 建议尺寸：375x812px（iPhone尺寸）

3. **record-screenshot.png**
   - 记账页面截图
   - 建议尺寸：375x812px

4. **statistics-screenshot.png**
   - 统计页面截图
   - 建议尺寸：375x812px

5. **details-screenshot.png**
   - 明细页面截图
   - 建议尺寸：375x812px

6. **profile-screenshot.png**
   - 个人中心截图
   - 建议尺寸：375x812px

7. **harmonyos-logo.png** (64x64px)
   - HarmonyOS Logo
   - 用于下载按钮

8. **favicon.ico** (32x32px)
   - 网站图标
   - 显示在浏览器标签页

### 图片优化建议
- 使用PNG格式（支持透明背景）
- 压缩图片大小（建议单张图片不超过500KB）
- 使用WebP格式可进一步减小文件大小
- 确保图片清晰度

## 🔧 部署前检查清单

- [ ] 所有图片文件已准备完毕
- [ ] 联系信息已更新为：chc_cz0112@163.com
- [ ] 分享信息已配置正确
- [ ] 下载链接已设置（如果有应用下载地址）
- [ ] 网站标题和描述已确认
- [ ] 所有链接测试正常
- [ ] 移动端显示正常
- [ ] 微信分享预览正常

## 📱 微信分享测试

### 测试步骤
1. 部署完成后，在微信中打开网站链接
2. 点击右上角"..."分享按钮
3. 检查分享标题、描述和图片是否正确显示
4. 发送给好友测试分享效果

### 常见问题
- **分享图片不显示**：检查图片路径和大小
- **分享标题不正确**：检查Open Graph标签
- **分享描述不显示**：检查meta description标签

## 🚀 性能优化建议

### 部署后优化
1. **启用HTTPS**：使用SSL证书
2. **压缩文件**：启用Gzip压缩
3. **缓存设置**：配置适当的缓存策略
4. **CDN加速**：使用CDN服务加速访问

### 监控和维护
1. **访问统计**：添加Google Analytics或百度统计
2. **错误监控**：监控网站错误和性能
3. **定期更新**：定期更新内容和图片
4. **备份数据**：定期备份网站文件

## 📞 技术支持

如果在部署过程中遇到问题，请联系：

- **邮箱**：chc_cz0112@163.com
- **说明**：请详细描述遇到的问题和错误信息

## 🎯 部署完成后的工作

1. **测试网站**：在不同设备和浏览器上测试
2. **SEO优化**：提交到搜索引擎
3. **社交媒体**：在相关平台分享网站链接
4. **用户反馈**：收集用户反馈并持续改进

---

**注意**：部署前请确保所有文件完整，特别是图片资源，否则网站可能显示异常。
