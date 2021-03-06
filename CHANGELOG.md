# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [3.2.3] - 2019-06-11
### Changed
- `slack bot`忽略自己产生的message
- 增加每隔10min reindex一次的功能

## [3.2.1] - 2019-06-10
### Changed
- 增加和`slack outgoging hook`交互的slack bot模块

## [3.1.0] - 2019-06-09
### Changed
- 调整ui
- 修复保存不更新对应的view
- 增加图片类型
- 修复编辑器剪贴板
- 搜索｀今天｀自动转换成当天日期字符串
- docker镜像用东八区

## [3.0.0] - 2019-06-07
### Changed
- 处理graceful quit
- 修复title
- 搜索大小写不敏感
- 修复编辑器剪贴板

## [3.0.0-beta] - 2019-05-18
### Changed
- 重新设计

## [2.3.3] - 2019-04-02
### Changed
- use tcl-based broker

## [2.3.2] - 2019-04-01
### Changed
- 修复了给插件增加链接的结构没有保存url的重大bug

## [2.3.1] - 2019-03-28
### Changed
- 修复给常见提供接口部分模块的错误

## [2.3.0] - 2019-03-27
### Changed
- 关闭窗口触发数据同步
- 数据同步间隔可配置
- 暂时关闭canvas
- 编辑区未保存的输入在，在编辑其他资源之前，会暂存
- 放弃层级式tag方案

## [2.2.1] - 2019-03-26
### Changed
- 重构代码, 使用context-api和mobx-react-lite
- 修复编辑一个pagex, 退出， 点击右上角, 还是这个pagex(应该是一个新建的snippet)
- 修复了删除崩溃的问题
- 修复了保存不更新列表中对应项的问题
- 新增的pagex, 放在列表首位

## [2.2.0] - 2019-03-25
### Changed
- 重构代码
- 重新启用NSFW

## [2.1.0] - 2019-03-24
### Changed
- 修复无法导致无法打包相关问题， 
- 真正产出可以不依赖开发环境，可以独立运行的包

## [2.0.0] - 2019-03-24
### Changed
- 将数据存储转移到main进程


## [1.24.2] - 2019-03-22
### Fixed
- 禁用了snippet第一行留给标签的逻辑

## [1.24.1] - 2019-03-21
### Fixed
- 修复了pagex组件不能解析thermal break的问题

## [1.24.0] - 2019-03-17
### Change
- snippet增加删除和编辑功能

## [1.23.0] - 2019-03-17
### Change
- 重构了binding

## [1.22.0] - 2019-03-17
### Change
- snippet有接受store的提供的输入
- 重构了preivew部分
- 增加binding目录
- 调整插件加载机制

## [1.21.1] - 2019-03-03
### Fixed
- 重构binding组件
- 使用broker
- 尝试打包

## [1.21.0] - 2019-1-19
### Added
- 增加快捷键
- 增加snippet相关ui


## [1.20.5] - 2019-1-16
### Refactory
- 使用slate editor

## [1.20.4] - 2019-1-13
### Refactory
- 引入react hook
- 所有组件用react hook重构
- 引入新的material ui style 系统
- 引入luis


## [1.20.3] - 2018-11-7
### Fixed
- 修复了一些样式问题
- 修复了一些package-lock里的不安全依赖

## [1.20.2] - 2018-10-29
### Fixed
- 解决了ReousrceList高度的问题

## [1.20.1] - 2018-10-29
### Changed
- 消除对glamor的依赖
- 移除了无用的组件

## [1.20.0] - 2018-10-27
### Added
- ArticleEditor称为更加全面的编辑器
### Fixed
- EditTagModal完全使用material的系统

## [1.19.0] - 2018-10-26
### Added
- 添加了备份恢复面板
### Changed
- 将DeleteAlert重构为更通用的ConfirmAlert

## [1.18.0] - 2018-10-24
### Added
- 增加了本地设置

## [1.17.0] - 2018-10-23
### Added
- 增加了web平台
### Changed
- 更改了项目名称

## [1.16.0] - 2018-10-21
### Added
- 增加了BlogView

## [1.15.1] - 2018-10-19
### Changed
- 用withStyle重构了部分组件
### Fixed
- 修复了部分组件字体上部被截断的问题

## [1.15.0] - 2018-10-18
### Added
- 增加了删除功能
- 增加了notify功能
### Changed
- 用material ui组件重构AddCommentModal
- 用material ui组件重构EditTagModal
### Fixed
- 压制了material ui的deprecate warning

## [1.14.0] - 2018-10-17
### Added
- 增加了不指定关键字时, 使用随机搜索的功能
- 增加了开屏随机搜索

## [1.13.0] - 2018-10-17
### Added
- pagex增加对table的支持
- pageX组件增加设置高度的接口
### Changed
- Modal背景改用不透明material标准灰配色
- 优化了ArticleView的显示

## [1.12.1] - 2018-10-17
### Fixed
- 修复了标签标注功能失效的问题

## [1.12.0] - 2018-10-17
### Added
- preview显示标签, 点击标签会在query中添加对应的内容
### Fixed
- 修复了不使用body scroll之后， scrollToBottom无法触发的情况

## [1.11.0] - 2018-10-17
### Added
- 使用了自己写的pagex parser
- pagex增加了对数学公式的支持
- pagex增加了对图标的支持
- pagex增加了对绘图的支持
### Changed
- 更改Preview的接口
### Fixed
- 能够选择文本
- 增大编辑区域
- 修复了modal中滚动条到头会触发body滚动的问题
- 修复了重构bindings之后, mobx数据改动不触发view更新的情况
- 使mobx devtools能够显示flow名称(给flow传递一个有名字的generator)

## [1.10.0] - 2018-10-12
### Added
- 编辑页面增加了预览tab
- 增加了自动补全
### Changed
- 重构了部分组件, 将依赖mobx的代码全部放到bindings.tsx下面了

## [1.9.0] - 2018-10-10
### Added
- comment增加了时间显示
- 可以编辑文章
- 采用ace使得编辑打到可用状态
- 采用github flavour markdown的css样式渲染article页面

## [1.8.0] - 2018-10-09
### Added
- 使用material design

## [1.7.0] - 2018-10-08
### Added
- 增加了测试
- 增加了ArticlePreview ArticleView等
- 增加了对pagex的支持

## [1.6.0] - 2018-10-06
### Added
- 增加了comment类型
- 增了添加comment的面板

## [1.5.0] - 2018-10-05
### Added
- 增加了scroll到底部自动加载的功能
### Fixed
- 修复了scroll的时候背景着色异常的情况

## [1.4.0] - 2018-10-04
### Added
- 增加了Button和Modal通用组件
- 增加了Previews下的多个状态无关
- 增加了编辑标签的功能
### Changed
- 对一系列组件做了重构


## [1.3.0] - 2018-10-02
### Added
- 增加了LinkPreview

## [1.2.0] - 2018-10-01
### Added
- 添加了LICENSE
### Changed
- 搜索结果的关键词显示为黄色背景的正常字体

## [1.1.0] - 2018-09-25
### Added
- 增加了便利的Input组件
- 增加了UIStore, 来保存跨组件状态
- 增加了添加通用blog的UI
- ResourceStore增加了添加blog的action
### Changed
- App组件默认充满屏幕

## [1.0.0] - 2018-09-23
### Added
- 添加了版本管理和changelog
- 添加了基本的业务逻辑