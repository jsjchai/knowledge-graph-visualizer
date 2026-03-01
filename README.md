# 📚 图形化知识库可视化系统

**knowledge-graph-visualizer** - 将 `study-notes` 项目转化为交互式知识图谱

## 🎯 项目目标

将传统的文本笔记 (`study-notes`) 转化为现代化的图形化知识库，提供：
- **可视化导航**：图形化界面展示知识结构
- **交互式探索**：点击、搜索、过滤功能
- **时间线视图**：按年份展示学习轨迹
- **技术图谱**：技能关联和分类展示
- **响应式设计**：支持各种设备访问

## 🏗️ 项目结构

```
knowledge-graph-visualizer/
├── index.html              # 主知识库首页
├── 2020.html               # 2020年知识图谱
├── 2021.html               # 2021年知识图谱 (待创建)
├── 2022.html               # 2022年知识图谱 (待创建)
├── 2023.html               # 2023年知识图谱 (待创建)
├── 2024.html               # 2024年知识图谱 (待创建)
├── 2025.html               # 2025年知识图谱 (待创建)
├── assets/                 # 静态资源
│   ├── css/               # 样式文件
│   │   ├── main.css       # 主样式
│   │   ├── timeline.css   # 时间线样式
│   │   └── graph.css      # 图谱样式
│   ├── js/                # JavaScript文件
│   │   ├── main.js        # 主逻辑
│   │   ├── graph.js       # 图谱渲染
│   │   └── search.js      # 搜索功能
│   └── images/            # 图片资源
│       ├── icons/         # 图标
│       └── screenshots/   # 截图
├── data/                  # 数据文件
│   ├── 2020.json          # 2020年数据
│   ├── 2021.json          # 2021年数据
│   └── knowledge-graph.json # 完整知识图谱
└── README.md              # 项目说明
```

## 🚀 快速开始

### 在线访问
- **主页面**: https://jsjchai.github.io/knowledge-graph-visualizer/
- **2020年图谱**: https://jsjchai.github.io/knowledge-graph-visualizer/2020.html

### 本地开发
```bash
# 克隆仓库
git clone https://github.com/jsjchai/knowledge-graph-visualizer.git
cd knowledge-graph-visualizer

# 使用本地服务器（Python）
python3 -m http.server 8000

# 或使用Node.js
npx serve .
```

访问 http://localhost:8000 查看效果。

## 📊 功能特性

### 已完成
- ✅ **2020年知识图谱**：完整可视化展示
- ✅ **响应式设计**：支持手机、平板、桌面
- ✅ **交互式卡片**：悬停效果、动画过渡
- ✅ **时间线视图**：学习轨迹展示
- ✅ **GitHub集成**：链接到原始笔记

### 计划中
- 🔄 **其他年份图谱**：2021-2025年
- 🔄 **全局搜索**：全文检索功能
- 🔄 **知识图谱**：技能关联可视化
- 🔄 **数据导出**：JSON/PDF导出
- 🔄 **统计分析**：学习数据可视化

## 🎨 设计理念

### 1. 可视化优先
- 图形化展示代替纯文本
- 颜色编码分类
- 图标辅助识别

### 2. 交互体验
- 平滑动画过渡
- 悬停提示信息
- 点击展开详情

### 3. 数据驱动
- 基于 `study-notes` 真实数据
- 结构化JSON存储
- 动态内容加载

## 🔗 数据来源

本项目基于 [study-notes](https://github.com/jsjchai/study-notes) 仓库，包含：
- **8年学习记录** (2018-2025)
- **200+技术文档**
- **9个技术分类**
- **持续更新的知识体系**

## 🛠️ 技术栈

- **前端**: HTML5, CSS3, JavaScript (ES6+)
- **可视化**: 纯CSS动画 + 自定义图表
- **部署**: GitHub Pages
- **数据**: JSON格式，Git版本控制

## 📈 开发路线图

### 第一阶段：基础框架 ✅
- [x] 创建项目结构
- [x] 设计响应式布局
- [x] 实现2020年图谱

### 第二阶段：完整年份
- [ ] 创建2021-2025年图谱
- [ ] 实现年份间导航
- [ ] 添加搜索功能

### 第三阶段：高级功能
- [ ] 知识图谱可视化
- [ ] 学习数据统计
- [ ] 移动端优化
- [ ] 离线支持

### 第四阶段：扩展功能
- [ ] 用户交互（收藏、笔记）
- [ ] 社交分享
- [ ] API接口
- [ ] 多语言支持

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