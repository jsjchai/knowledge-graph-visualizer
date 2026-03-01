# 📚 图形化知识库可视化系统

**knowledge-graph-visualizer** - 将 `study-notes` 项目转化为交互式知识图谱

## 🎯 项目状态

✅ **已完成** - 完整展示2018-2025年技术学习历程的图形化知识库

## 🚀 在线访问

- **主页面**: https://jsjchai.github.io/knowledge-graph-visualizer/
- **测试页面**: https://jsjchai.github.io/knowledge-graph-visualizer/test-separation.html

## 🏗️ 项目结构（重构后）

```
knowledge-graph-visualizer/
├── index.html              # 主知识库首页（重构版）
├── 2020.html               # 2020年知识图谱
├── 2021.html               # 2021年知识图谱
├── 2022.html               # 2022年知识图谱
├── 2023.html               # 2023年知识图谱
├── 2024.html               # 2024年知识图谱
├── 2025.html               # 2025年知识图谱
├── styles.css              # 主样式文件（6.5KB）
├── year-styles.css         # 年份页面样式（7.2KB）
├── script.js               # 交互脚本（3.8KB）
├── test-separation.html    # 代码分离测试页面
└── README.md               # 项目说明
```

## 📊 内容覆盖

### **完整学习历程（2018-2025）**
1. **早期项目（2018-2019）** - GitHub原始笔记链接
   - 2019年：19个技术分类（Kubernetes、Java、Spring、分布式等）
   - 2018年：2个技术分类（Docker、FFmpeg）

2. **知识图谱（2020-2025）** - 图形化展示
   - 2020年：9个专题知识库
   - 2021年：3个分类（书籍、机器学习、问题与思考）
   - 2022年：深度学习专项
   - 2023年：系统架构深化
   - 2024年：数据仓库技术
   - 2025年：AI技术融合

## 🎨 设计特点

### **视觉区分**
- **早期项目**：灰色系主题（`#94a3b8` → `#64748b`）
- **年份项目**：蓝色系主题（`#2563eb` → `#7c3aed`）

### **功能区分**
- **早期项目**：链接到GitHub原始笔记目录
- **年份项目**：链接到本地图形化知识图谱

### **技术架构**
- **现代化代码结构**：HTML、CSS、JS分离
- **响应式设计**：完美适配各种设备
- **性能优化**：外部资源可缓存
- **可维护性**：代码结构清晰，易于扩展

## 🛠️ 技术栈

- **前端**: HTML5, CSS3, JavaScript (ES6+)
- **样式**: 纯CSS动画 + Flexbox/Grid布局
- **图标**: Font Awesome 6.4.0
- **部署**: GitHub Pages
- **版本控制**: Git

## 🔧 开发历程

### **重构亮点**
1. **代码分离**：将内联CSS和JS分离到外部文件
2. **关注点分离**：HTML管结构，CSS管样式，JS管交互
3. **可维护性**：独立文件，易于修改和调试
4. **性能优化**：浏览器可以缓存CSS和JS文件

### **解决的问题**
1. ✅ 早期项目显示问题（CSS格式修复）
2. ✅ 代码维护困难（分离到外部文件）
3. ✅ 调试困难（添加测试验证文件）

## 🧪 测试验证

### **测试页面**
- `test-separation.html` - 验证代码分离效果
- 实时检测CSS/JS加载状态
- 验证早期项目卡片显示
- 测试所有交互功能

### **测试内容**
- ✅ CSS文件是否正确加载
- ✅ JS文件是否正常工作
- ✅ 早期项目卡片是否显示
- ✅ 所有交互功能是否正常

## 📱 响应式设计

### **设备适配**
- **桌面端**：完整网格布局，丰富动画
- **平板端**：自适应网格，优化间距
- **手机端**：单列布局，触摸优化

### **浏览器支持**
- Chrome 90+ ✅
- Firefox 88+ ✅
- Safari 14+ ✅
- Edge 90+ ✅

## 🔗 数据来源

本项目基于 [study-notes](https://github.com/jsjchai/study-notes) 仓库，包含：
- **8年学习记录** (2018-2025)
- **200+技术文档**
- **完整的技术成长轨迹**
- **持续更新的知识体系**

## 🚀 快速开始

### **在线访问**
直接访问：https://jsjchai.github.io/knowledge-graph-visualizer/

### **本地开发**
```bash
# 克隆仓库
git clone https://github.com/jsjchai/knowledge-graph-visualizer.git
cd knowledge-graph-visualizer

# 使用本地服务器（Python）
python3 -m http.server 8000

# 访问
open http://localhost:8000
```

## 📈 项目特点

### **1. 完整的学习历程**
覆盖2018-2025年共8年的技术学习记录

### **2. 可视化展示**
将文本笔记转化为图形化知识图谱

### **3. 规范化代码**
符合HTML5标准，代码结构清晰

### **4. 响应式设计**
适配各种设备访问

### **5. 易于维护**
结构清晰，便于后续扩展

## 🤝 贡献指南

欢迎贡献代码、设计或文档！

1. **Fork 仓库**
2. **创建功能分支** (`git checkout -b feature/AmazingFeature`)
3. **提交更改** (`git commit -m 'Add some AmazingFeature'`)
4. **推送到分支** (`git push origin feature/AmazingFeature`)
5. **开启 Pull Request**

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🙏 致谢

- 感谢 [study-notes](https://github.com/jsjchai/study-notes) 提供原始数据
- 感谢所有开源项目的贡献者
- 特别感谢持续学习和记录的习惯

## 📞 联系

- **GitHub**: [@jsjchai](https://github.com/jsjchai)
- **项目地址**: https://github.com/jsjchai/knowledge-graph-visualizer
- **在线演示**: https://jsjchai.github.io/knowledge-graph-visualizer/

---

*"知识需要可视化，学习需要系统化"*  
*— 图形化知识库可视化系统*

*最后更新: 2026年3月1日*