---
author: "Steve ZMT"
uuid: 5e3b9d37-c90d-1712-337c-afac6a683a16
title: 测试2
donate: true
toc: true
comments: true
date: 2024-12-24 13:56:34
sticky: 100
tags:
categories:
---

这是一个测试页面，用于展示各种标记、按钮、索引和引用的功能。

<!--more-->

   本页面继承自[SteveZMTstudios](https://blog.stevezmt.com)的博客页面。
   基于CC BY-NC-SA 4.0协议转载。

源代码：[test2-1.md](https://github.com/stevezmtstudios/article-preview/blob/main/source/_posts/test2-1.md)

更多用法：[mdui.org](https://www.mdui.org/docs)

## 标记

**加粗文本**

*斜体文本*

~~删除线文本~~

## 按钮

<button onclick="alert('按钮被点击了！')">点击我</button>

## 索引

- [标记](#标记)
- [按钮](#按钮)
- [引用](#引用)

## 引用

> 这是一个引用示例。

## 标记

**加粗文本**

*斜体文本*

~~删除线文本~~

## 按钮

<button onclick="alert('按钮被点击了！')">点击我</button>

<button class="mdui-btn mdui-btn-raised mdui-ripple mdui-color-theme-accent">主题按钮</button>

<button class="mdui-btn mdui-btn-icon mdui-ripple" mdui-tooltip="{content: '图标按钮'}"><i class="mdui-icon material-icons">favorite</i></button>

## 索引

- [标记](#标记)
- [按钮](#按钮)
- [引用](#引用)
- [搜索](#搜索)
- [侧边栏](#侧边栏)

## 引用

> 这是一个引用示例。

## 搜索

<div id="search" class="mdui-dialog">
  <div class="mdui-dialog-content">
    <form class="search-form">
      <input class="search-form-input" type="text" placeholder="搜索...">
      <button class="search-form-submit" type="submit">搜索</button>
    </form>
    <div class="search-result"></div>
  </div>
</div>

# MDUI 组件测试页面

[**查看完整演示**](#MDUI-组件完整演示)

## 按钮测试

### 基础按钮
<div class="mdui-container-fluid">
  <button class="mdui-btn">默认按钮</button>
  <button class="mdui-btn mdui-btn-raised">凸起按钮</button>
  <button class="mdui-btn mdui-btn-icon"><i class="mdui-icon material-icons">face</i></button>
  <button class="mdui-btn mdui-btn-raised mdui-ripple mdui-color-theme-accent">主题色按钮</button>
</div>

### 按钮事件测试
<div class="mdui-container-fluid">
  <button class="mdui-btn mdui-btn-raised mdui-ripple" onclick="showSnackbar()">显示 Snackbar</button>
  <button class="mdui-btn mdui-btn-raised mdui-ripple" onclick="showDialog()">显示对话框</button>
  <button class="mdui-btn mdui-btn-raised mdui-ripple" onclick="showMenu()">显示菜单</button>
</div>

## 对话框测试

### 基础对话框
<div class="mdui-container-fluid">
  <button class="mdui-btn mdui-btn-raised mdui-ripple" onclick="mdui.alert('这是一个提示对话框')">Alert</button>
  <button class="mdui-btn mdui-btn-raised mdui-ripple" onclick="mdui.confirm('确认这个操作?')">Confirm</button>
  <button class="mdui-btn mdui-btn-raised mdui-ripple" onclick="mdui.prompt('请输入内容')">Prompt</button>
</div>

## 菜单



### 下拉菜单
<select class="mdui-select" mdui-select>
  <option value="1">State 1</option>
  <option value="2">State 2</option>
  <option value="3" disabled>State 3</option>
  <option value="4">State 4</option>
  <option value="5">State 5</option>
  <option value="6">State 6</option>
</select>

## 表单组件

### 文本框
<div class="mdui-textfield mdui-textfield-floating-label">
  <label class="mdui-textfield-label">用户名</label>
  <input class="mdui-textfield-input" type="text"/>
</div>

### 开关
<label class="mdui-switch">
  <input type="checkbox"/>
  <i class="mdui-switch-icon"></i>
  开关
</label>


<label class="mdui-switch">
  <input type="checkbox" disabled checked/>
  <i class="mdui-switch-icon"></i>
  开关(常开不可用)
</label>

### 滑块
<div class="mdui-slider">
  <input type="range" step="1" min="0" max="100"/>
</div>

#### 带刻度滑块
<div class="mdui-slider">
  <input type="range" step="1" min="0" max="100" value="50" tickmarks/>
</div>


## 卡片
<div class="mdui-card">
  <div class="mdui-card-primary">
    <div class="mdui-card-primary-title">标题</div>
    <div class="mdui-card-primary-subtitle">副标题</div>
  </div>
  <div class="mdui-card-content">卡片内容</div>
  <div class="mdui-card-actions">
    <button class="mdui-btn mdui-ripple">action</button>
  </div>
</div>

## 可展开面板

<div class="mdui-panel" mdui-panel>
    <div class="mdui-panel-item">
        <div class="mdui-panel-item-header">点击展开</div>
            <div class="mdui-panel-item-body">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quod architecto, mollitia iste, inventore suscipit impedit at ratione hic nulla sapiente sit nam amet! Sapiente, libero? Blanditiis id odio nisi.
                    Delectus placeat harum facere laboriosam eveniet velit inventore obcaecati repudiandae, quae tenetur nisi, totam dolorum, necessitatibus unde quisquam praesentium earum? Recusandae cum minima veritatis quae quis consectetur odio tempora quisquam.
                    Repudiandae atque dolor obcaecati fugiat voluptatem id? Exercitationem aliquid quos aspernatur praesentium, nostrum dolorum qui, debitis quidem fugiat velit possimus numquam, animi unde necessitatibus natus sequi odio aperiam? Quo, assumenda.
                    Magni, mollitia! Ducimus, nihil quisquam deserunt soluta asperiores voluptas doloremque quasi magni quidem eligendi id accusamus repudiandae nostrum excepturi eius fugiat commodi exercitationem animi minus doloribus deleniti quo ipsum? Inventore!
                </p>
            </div>
        </div>
    </div>



## 表格
 表格：

<table class="mdui-table mdui-table-hoverable">
    <thead>
        <tr>
            <th>表头</th>
        </tr>
    </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>2</td>
            </tr>
            <tr>
                <td>3</td>
                <td>4</td>
            </tr>
        </tbody>
</table>






## 工具提示
<button class="mdui-btn" mdui-tooltip="{content: '这是提示文本'}">鼠标悬浮显示提示</button>

<script>
// Snackbar 测试函数
function showSnackbar() {
  mdui.snackbar({
    message: '这是一条提示消息',
    buttonText: '确定',
    timeout: 3000,
    position: 'bottom'
  });
}

// 对话框测试函数  
function showDialog() {
  mdui.dialog({
    title: '对话框标题',
    content: '对话框内容',
    buttons: [
      {text: '取消'},
      {text: '确定', close: true}
    ]
  });
}

// 菜单测试函数
function showMenu() {
  var inst = new mdui.Menu('#menu-button', '#menu-content');
  inst.open();
}
</script>

# MDUI 组件完整演示

[图标](https://www.mdui.org/docs/material_icon)

## 涟漪效果
<button class="mdui-btn mdui-ripple">button</button>
<button class="mdui-btn mdui-ripple mdui-color-blue">button</button>

### 自定义涟漪颜色
<button class="mdui-btn mdui-ripple mdui-ripple-black mdui-color-yellow">black</button>
<button class="mdui-btn mdui-ripple mdui-ripple-white mdui-color-blue">white</button>
<button class="mdui-btn mdui-ripple mdui-ripple-red">red</button>
<button class="mdui-btn mdui-ripple mdui-ripple-blue">blue</button>

## 按钮
### 扁平
<button class="mdui-btn">Button</button>
<button class="mdui-btn mdui-ripple">button</button>
<button class="mdui-btn mdui-color-theme-accent mdui-ripple">button</button>

### 浮动
<button class="mdui-btn mdui-btn-raised">Button</button>
<button class="mdui-btn mdui-btn-raised mdui-ripple">Button</button>
<button class="mdui-btn mdui-btn-raised mdui-ripple mdui-color-theme-accent">Button</button>

### 图标
<button class="mdui-btn mdui-btn-icon">
  <i class="mdui-icon material-icons">add</i>
</button>
<button class="mdui-btn mdui-btn-icon mdui-ripple">
  <i class="mdui-icon material-icons">add</i>
</button>
<button class="mdui-btn mdui-btn-icon mdui-color-theme-accent mdui-ripple">
  <i class="mdui-icon material-icons">add</i>
</button>

### 密集型
<button class="mdui-btn mdui-btn-dense mdui-color-theme-accent mdui-ripple">button</button>
<button class="mdui-btn mdui-btn-raised mdui-btn-dense mdui-color-theme-accent mdui-ripple">Button</button>
<button class="mdui-btn mdui-btn-icon mdui-btn-dense mdui-color-theme-accent mdui-ripple">
  <i class="mdui-icon material-icons">add</i>
</button>

### 不可用
<button class="mdui-btn" disabled>disabled</button>
<button class="mdui-btn mdui-btn-raised" disabled>disabled</button>
<button class="mdui-btn mdui-btn-icon" disabled>
  <i class="mdui-icon material-icons">add</i>
</button>

### 块级元素
<div class="mdui-row-xs-2">
  <div class="mdui-col">
    <button class="mdui-btn mdui-btn-block mdui-color-theme-accent mdui-ripple">block</button>
  </div>
  <div class="mdui-col">
    <button class="mdui-btn mdui-btn-block mdui-color-theme-accent mdui-ripple">block</button>
  </div>
</div>

### 按钮组
<div class="mdui-btn-group">
  <button type="button" class="mdui-btn">
    <i class="mdui-icon material-icons">format_align_left</i>
  </button>
  <button type="button" class="mdui-btn mdui-btn-active">
    <i class="mdui-icon material-icons">format_align_center</i>
  </button>
  <button type="button" class="mdui-btn">
    <i class="mdui-icon material-icons">format_align_right</i>
  </button>
  <button type="button" class="mdui-btn">
    <i class="mdui-icon material-icons">format_align_justify</i>
  </button>
</div>

## 浮动操作按钮
形同右下角，详见[文档](https://www.mdui.org/docs/fab)

## 下拉选择
### 原生单选 select 组件
<select class="mdui-select">
  <option value="1" selected>State 1</option>
  <option value="2">State 2</option>
  <option value="3">State 3</option>
  <option value="4">State 4</option>
  <option value="5">State 5</option>
  <option value="6">State 6</option>
</select>

### 原生多选 select 组件
<select multiple size="8" class="mdui-select">
  <optgroup label="Fonts">
    <option>Roboto</option>
    <option>Calibri</option>
    <option>Courier New</option>
    <option>Verdana</option>
  </optgroup>
  <optgroup label="Size">
    <option>50%</option>
    <option>75%</option>
    <option>90%</option>
    <option>100%</option>
  </optgroup>
  <optgroup label="header">
    <option>h1</option>
    <option>h2</option>
    <option>h3</option>
    <option>h4</option>
  </optgroup>
</select>

<select class="mdui-select" mdui-select>
  <option value="1">State 1</option>
  <option value="2">State 2</option>
  <option value="3" disabled>State 3</option>
  <option value="4">State 4</option>
  <option value="5">State 5</option>
  <option value="6">State 6</option>
</select>

## 分隔线

<div class="mdui-divider"></div>

### 内凹分隔线
<div class="mdui-divider-inset"></div>

## 可扩展面板

<div class="mdui-panel" mdui-panel>

  <div class="mdui-panel-item">
    <div class="mdui-panel-item-header">
      <div class="mdui-panel-item-title">Trip name</div>
      <div class="mdui-panel-item-summary">Carribean cruise</div>
      <i class="mdui-panel-item-arrow mdui-icon material-icons">keyboard_arrow_down</i>
    </div>
    <div class="mdui-panel-item-body">
      <p>First content</p>
      <p>First content</p>
      <p>First content</p>
      <p>First content</p>
      <p>First content</p>
      <p>First content</p>
      <div class="mdui-panel-item-actions">
        <button class="mdui-btn mdui-ripple" mdui-panel-item-close>cancel</button>
        <button class="mdui-btn mdui-ripple">save</button>
      </div>
    </div>
  </div>

  <div class="mdui-panel-item">
    <div class="mdui-panel-item-header">
      <div class="mdui-panel-item-title">Location</div>
      <i class="mdui-panel-item-arrow mdui-icon material-icons">keyboard_arrow_down</i>
    </div>
    <div class="mdui-panel-item-body">
      <p>Second content</p>
      <p>Second content</p>
      <p>Second content</p>
      <p>Second content</p>
      <p>Second content</p>
      <p>Second content</p>
      <div class="mdui-panel-item-actions">
        <button class="mdui-btn mdui-ripple" mdui-panel-item-close>cancel</button>
        <button class="mdui-btn mdui-ripple">save</button>
      </div>
    </div>
  </div>

  <div class="mdui-panel-item">
    <div class="mdui-panel-item-header">
      <div class="mdui-panel-item-title">Start and end dates</div>
      <div class="mdui-panel-item-summary">Start date: Feb 29, 2016</div>
      <div class="mdui-panel-item-summary">End date: Not set</div>
      <i class="mdui-panel-item-arrow mdui-icon material-icons">keyboard_arrow_down</i>
    </div>
    <div class="mdui-panel-item-body">
      <p>Third content</p>
      <p>Third content</p>
      <p>Third content</p>
      <p>Third content</p>
      <p>Third content</p>
      <p>Third content</p>
      <div class="mdui-panel-item-actions">
        <button class="mdui-btn mdui-ripple" mdui-panel-item-close>cancel</button>
        <button class="mdui-btn mdui-ripple">save</button>
      </div>
    </div>
  </div>

</div>

## 文本框
<div class="mdui-textfield">
  <input class="mdui-textfield-input" type="text" placeholder="User Name"/>
</div>

### 固定标签
<div class="mdui-textfield">
  <label class="mdui-textfield-label">User Name</label>
  <input class="mdui-textfield-input" type="text"/>
</div>

### 浮动标签 （推荐）
<div class="mdui-textfield mdui-textfield-floating-label">
  <label class="mdui-textfield-label">Email</label>
  <input class="mdui-textfield-input" type="email" />
</div>

### 不可用
<div class="mdui-textfield">
  <input class="mdui-textfield-input" type="text" disabled placeholder="User Name"/>
</div>

<!-- 固定标签 -->
<div class="mdui-textfield">
  <label class="mdui-textfield-label">User Name</label>
  <input class="mdui-textfield-input" type="text" disabled />
</div>

<!-- 浮动标签 -->
<div class="mdui-textfield mdui-textfield-floating-label">
  <label class="mdui-textfield-label">Email</label>
  <input class="mdui-textfield-input" type="email" disabled />
</div>

### 多行文本框
<div class="mdui-textfield">
  <textarea class="mdui-textfield-input" placeholder="Description"></textarea>
</div>

<!-- 固定标签 -->
<div class="mdui-textfield">
  <label class="mdui-textfield-label">Subject</label>
  <textarea class="mdui-textfield-input"></textarea>
</div>

<!-- 浮动标签 -->
<div class="mdui-textfield mdui-textfield-floating-label">
  <label class="mdui-textfield-label">Message</label>
  <textarea class="mdui-textfield-input"></textarea>
</div>

<!-- 禁用状态 -->
<div class="mdui-textfield mdui-textfield-floating-label">
  <label class="mdui-textfield-label">Disabled</label>
  <textarea class="mdui-textfield-input" disabled></textarea>
</div>

<div class="mdui-textfield">
  <textarea class="mdui-textfield-input" rows="4" placeholder="Message"></textarea>
</div>

### 含帮助文本

<div class="mdui-textfield">
  <input type="email" class="mdui-textfield-input" placeholder="邮箱" />
  <div class="mdui-textfield-helper">Helper Text</div>
</div>

### 含图标
<div class="mdui-textfield">
  <i class="mdui-icon material-icons">email</i>
  <input class="mdui-textfield-input" type="email" placeholder="Email"/>
</div>

<!-- 固定标签 -->
<div class="mdui-textfield">
  <i class="mdui-icon material-icons">account_circle</i>
  <label class="mdui-textfield-label">User name</label>
  <input class="mdui-textfield-input" type="text" />
  <div class="mdui-textfield-helper">Helper Text</div>
</div>

<!-- 浮动标签、多行文本框 -->
<div class="mdui-textfield mdui-textfield-floating-label">
  <i class="mdui-icon material-icons">textsms</i>
  <label class="mdui-textfield-label">Message</label>
  <textarea class="mdui-textfield-input"></textarea>
</div>

<!-- 禁用状态 -->
<div class="mdui-textfield">
  <i class="mdui-icon material-icons">lock</i>
  <input class="mdui-textfield-input" type="text" placeholder="Disabled" disabled/>
</div>

### 可展开
<div class="mdui-textfield mdui-textfield-expandable">
  <button class="mdui-textfield-icon mdui-btn mdui-btn-icon">
    <i class="mdui-icon material-icons">search</i>
  </button>
  <input class="mdui-textfield-input" type="text" placeholder="Search"/>
  <button class="mdui-textfield-close mdui-btn mdui-btn-icon">
    <i class="mdui-icon material-icons">close</i>
  </button>
</div>
左

右
<div class="mdui-textfield mdui-textfield-expandable mdui-float-right">
  <button class="mdui-textfield-icon mdui-btn mdui-btn-icon">
    <i class="mdui-icon material-icons">search</i>
  </button>
  <input class="mdui-textfield-input" type="text" placeholder="Search"/>
  <button class="mdui-textfield-close mdui-btn mdui-btn-icon">
    <i class="mdui-icon material-icons">close</i>
  </button>
</div>


### 表单验证
<div class="mdui-textfield mdui-textfield-floating-label">
  <label class="mdui-textfield-label">User name</label>
  <input class="mdui-textfield-input" type="text" required />
  <div class="mdui-textfield-error">用户名不能为空</div>
</div>

### 邮箱验证&字数
<div class="mdui-textfield mdui-textfield-floating-label">
  <label class="mdui-textfield-label">Email</label>
  <input class="mdui-textfield-input" type="email" maxlength="60" />
  <div class="mdui-textfield-error">邮箱格式错误</div>
</div>


<div class="mdui-textfield mdui-textfield-floating-label">
  <label class="mdui-textfield-label">Password</label>
  <input
    class="mdui-textfield-input"
    type="text"
    pattern="^.*(?=.{6,})(?=.*[a-z])(?=.*[A-Z]).*$"
    required
  />
  <div class="mdui-textfield-error">密码至少 6 位，且包含大小写字母</div>
  <div class="mdui-textfield-helper">请输入至少 6 位，且包含大小写字母的密码</div>
</div>

## 布局组件

### 网格系统
<div class="mdui-row-xs-3 mdui-row-sm-4 mdui-row-md-5 mdui-row-lg-6 mdui-row-xl-7 mdui-grid-list">
  <div class="mdui-col">
    <div class="mdui-grid-tile">
      <img src="/images/banner.png"/>
    </div>
  </div>
  <div class="mdui-col">
    <div class="mdui-grid-tile">
      <img src="/images/banner.png"/>
    </div>
  </div>
  <div class="mdui-col">
    <div class="mdui-grid-tile">
      <img src="/images/banner.png"/>
    </div>
  </div>
  <div class="mdui-col">
    <div class="mdui-grid-tile">
      <img src="/images/banner.png"/>
    </div>
  </div>
  <div class="mdui-col">
    <div class="mdui-grid-tile">
      <img src="/images/banner.png"/>
    </div>
  </div>
  <div class="mdui-col">
    <div class="mdui-grid-tile">
      <img src="/images/banner.png"/>
    </div>
  </div>
  <div class="mdui-col">
    <div class="mdui-grid-tile">
      <img src="/images/banner.png"/>
    </div>
  </div>
  <div class="mdui-col">
    <div class="mdui-grid-tile">
      <img src="/images/banner.png"/>
    </div>
  </div>
</div>

### 抽屉式导航

已生效，在左侧标签栏中。
文档：[mdui.org](https://www.mdui.org/docs/drawer)

## 导航组件

### 工具栏
<div class="mdui-toolbar">
  <a href="javascript:;" class="mdui-btn mdui-btn-icon">
    <i class="mdui-icon material-icons">menu</i>
  </a>
  <span class="mdui-typo-title">Title</span>
  <div class="mdui-toolbar-spacer"></div>
  <a href="javascript:;" class="mdui-btn mdui-btn-icon">
    <i class="mdui-icon material-icons">search</i>
  </a>
  <a href="javascript:;" class="mdui-btn mdui-btn-icon">
    <i class="mdui-icon material-icons">refresh</i>
  </a>
  <a href="javascript:;" class="mdui-btn mdui-btn-icon">
    <i class="mdui-icon material-icons">more_vert</i>
  </a>
</div>

<div class="mdui-toolbar mdui-color-theme">
  <a href="javascript:;" class="mdui-btn mdui-btn-icon">
    <i class="mdui-icon material-icons">menu</i>
  </a>
  <span class="mdui-typo-title">Title</span>
  <div class="mdui-toolbar-spacer"></div>
  <a href="javascript:;" class="mdui-btn mdui-btn-icon">
    <i class="mdui-icon material-icons">search</i>
  </a>
  <a href="javascript:;" class="mdui-btn mdui-btn-icon">
    <i class="mdui-icon material-icons">refresh</i>
  </a>
  <a href="javascript:;" class="mdui-btn mdui-btn-icon">
    <i class="mdui-icon material-icons">more_vert</i>
  </a>
</div>

<div class="mdui-appbar">
  <div class="mdui-tab mdui-color-theme" mdui-tab>
    <a href="#example3-tab1" class="mdui-ripple mdui-ripple-white">web</a>
    <a href="#example3-tab2" class="mdui-ripple mdui-ripple-white">shopping</a>
    <a href="#example3-tab3" class="mdui-ripple mdui-ripple-white">videos</a>
  </div>
</div>

<div class="mdui-appbar">
  <div class="mdui-toolbar mdui-color-theme">
    <a href="javascript:;" class="mdui-btn mdui-btn-icon">
      <i class="mdui-icon material-icons">menu</i>
    </a>
    <a href="javascript:;" class="mdui-typo-title">Title</a>
    <div class="mdui-toolbar-spacer"></div>
    <a href="javascript:;" class="mdui-btn mdui-btn-icon">
      <i class="mdui-icon material-icons">search</i>
    </a>
    <a href="javascript:;" class="mdui-btn mdui-btn-icon">
      <i class="mdui-icon material-icons">refresh</i>
    </a>
    <a href="javascript:;" class="mdui-btn mdui-btn-icon">
      <i class="mdui-icon material-icons">more_vert</i>
    </a>
  </div>
  <div class="mdui-tab mdui-color-theme" mdui-tab>
    <a href="#example6-tab1" class="mdui-ripple mdui-ripple-white">
      <i class="mdui-icon material-icons">phone</i>
      <label>recents</label>
    </a>
    <a href="#example6-tab2" class="mdui-ripple mdui-ripple-white">
      <i class="mdui-icon material-icons">favorite</i>
      <label>favorites</label>
    </a>
    <a href="#example6-tab3" class="mdui-ripple mdui-ripple-white">
      <i class="mdui-icon material-icons">perm_contact_calendar</i>
      <label>nearby</label>
    </a>
  </div>
</div>

<div class="mdui-appbar mdui-shadow-0">
  <div class="mdui-toolbar">
    <a href="javascript:;" class="mdui-btn mdui-btn-icon">
      <i class="mdui-icon material-icons">menu</i>
    </a>
    <a href="javascript:;" class="mdui-typo-title">Title</a>
    <div class="mdui-toolbar-spacer"></div>
    <a href="javascript:;" class="mdui-btn mdui-btn-icon">
      <i class="mdui-icon material-icons">search</i>
    </a>
    <a href="javascript:;" class="mdui-btn mdui-btn-icon">
      <i class="mdui-icon material-icons">refresh</i>
    </a>
    <a href="javascript:;" class="mdui-btn mdui-btn-icon">
      <i class="mdui-icon material-icons">more_vert</i>
    </a>
  </div>
</div>

### 抽屉式导航
本页已应用，试着向左滑动。
详见[文档](https://www.mdui.org/docs/drawer)

### 底部导航栏
<div class="mdui-bottom-nav">
  <a href="javascript:;" class="mdui-ripple mdui-bottom-nav-active">
    <i class="mdui-icon material-icons">history</i>
    <label>Recents</label>
  </a>
  <a href="javascript:;" class="mdui-ripple">
    <i class="mdui-icon material-icons">favorite</i>
    <label>Favorites</label>
  </a>
  <a href="javascript:;" class="mdui-ripple">
    <i class="mdui-icon material-icons">location_on</i>
    <label>Nearby</label>
  </a>
</div>

<div class="mdui-bottom-nav mdui-bottom-nav-text-auto">
  <a href="javascript:;" class="mdui-ripple mdui-bottom-nav-active">
    <i class="mdui-icon material-icons">live_tv</i>
    <label>Movies</label>
  </a>
  <a href="javascript:;" class="mdui-ripple">
    <i class="mdui-icon material-icons">music_note</i>
    <label>Music</label>
  </a>
  <a href="javascript:;" class="mdui-ripple">
    <i class="mdui-icon material-icons">book</i>
    <label>Books</label>
  </a>
  <a href="javascript:;" class="mdui-ripple">
    <i class="mdui-icon material-icons">library_books</i>
    <label>Newsstand</label>
  </a>
</div>

<div class="mdui-bottom-nav mdui-bottom-nav-text-auto mdui-color-brown">
  <a href="javascript:void(0);" class="mdui-ripple mdui-ripple-white mdui-bottom-nav-active">
    <i class="mdui-icon material-icons">live_tv</i>
    <label>Movies</label>
  </a>
  <a href="javascript:void(0);" class="mdui-ripple mdui-ripple-white">
    <i class="mdui-icon material-icons">music_note</i>
    <label>Music</label>
  </a>
  <a href="javascript:void(0);" class="mdui-ripple mdui-ripple-white">
    <i class="mdui-icon material-icons">book</i>
    <label>Books</label>
  </a>
  <a href="javascript:void(0);" class="mdui-ripple mdui-ripple-white">
    <i class="mdui-icon material-icons">library_books</i>
    <label>Newsstand</label>
  </a>
</div>

### 选项卡
<div class="mdui-tab" mdui-tab>
  <a href="#example8-tab1" class="mdui-ripple">web</a>
  <a href="#example8-tab2" class="mdui-tab-active mdui-ripple">shopping</a>
  <a href="#example8-tab3" class="mdui-ripple" disabled>images</a>
</div>

<div id="example8-tab1" class="mdui-p-a-2">web content</div>
<div id="example8-tab2" class="mdui-p-a-2">shopping content</div>
<div id="example8-tab3" class="mdui-p-a-2">images content</div>

<div class="mdui-tab mdui-tab-scrollable" mdui-tab>
  <a href="#example2-tab1" class="mdui-ripple">web</a>
  <a href="#example2-tab2" class="mdui-ripple">shopping</a>
  <a href="#example2-tab3" class="mdui-ripple">videos</a>
  <a href="#example2-tab4" class="mdui-ripple">images</a>
  <a href="#example2-tab5" class="mdui-ripple">news</a>
  <a href="#example2-tab6" class="mdui-ripple">maps</a>
  <a href="#example2-tab7" class="mdui-ripple">books</a>
  <a href="#example2-tab8" class="mdui-ripple">flights</a>
  <a href="#example2-tab9" class="mdui-ripple">apps</a>
  <a href="#example2-tab10" class="mdui-ripple">dictionary</a>
</div>


<div class="mdui-tab mdui-tab-centered" mdui-tab>
  <a href="#example3-tab1" class="mdui-ripple">web</a>
  <a href="#example3-tab2" class="mdui-ripple">shopping</a>
  <a href="#example3-tab3" class="mdui-ripple">videos</a>
</div>

<div class="mdui-tab mdui-tab-full-width" mdui-tab>
  <a href="#example4-tab1" class="mdui-ripple">web</a>
  <a href="#example4-tab2" class="mdui-ripple">shopping</a>
  <a href="#example4-tab3" class="mdui-ripple">videos</a>
</div>

<div class="mdui-tab" mdui-tab>
  <a href="#example6-tab1" class="mdui-ripple">
    <i class="mdui-icon material-icons">phone</i>
    <label>recents</label>
  </a>
  <a href="#example6-tab2" class="mdui-ripple">
    <i class="mdui-icon material-icons">favorite</i>
    <label>favorites</label>
  </a>
  <a href="#example6-tab3" class="mdui-ripple">
    <i class="mdui-icon material-icons">perm_contact_calendar</i>
    <label>nearby</label>
  </a>
</div>

<div class="mdui-tab mdui-color-theme" mdui-tab>
  <a href="#example7-tab1" class="mdui-ripple mdui-ripple-white">
    <i class="mdui-icon material-icons">phone</i>
    <label>recents</label>
  </a>
  <a href="#example7-tab2" class="mdui-ripple mdui-ripple-white">
    <i class="mdui-icon material-icons">favorite</i>
    <label>favorites</label>
  </a>
  <a href="#example7-tab3" class="mdui-ripple mdui-ripple-white">
    <i class="mdui-icon material-icons">perm_contact_calendar</i>
    <label>nearby</label>
  </a>
</div>

### 底部导航栏
<div class="mdui-bottom-nav">
  <a class="mdui-bottom-nav-active">
    <i class="mdui-icon material-icons">history</i>
    <label>最近</label>
  </a>
  <a>
    <i class="mdui-icon material-icons">favorite</i>
    <label>收藏</label>
  </a>
  <a>
    <i class="mdui-icon material-icons">person</i>
    <label>我的</label>
  </a>
</div>

## 表单组件



### 单选框
<form>

  <label class="mdui-radio">
    <input type="radio" name="group1"/>
    <i class="mdui-radio-icon"></i>
    默认不选中
  </label>

  <label class="mdui-radio">
    <input type="radio" name="group1" checked/>
    <i class="mdui-radio-icon"></i>
    默认选中
  </label>

  <label class="mdui-radio">
    <input type="radio" name="group1" disabled/>
    <i class="mdui-radio-icon"></i>
    禁用，且不选中
  </label>

</form>

<form>
  <label class="mdui-radio">
    <input type="radio" name="group1" disabled checked/>
    <i class="mdui-radio-icon"></i>
    禁用，且选中
  </label>
</form>


### 复选框
<label class="mdui-checkbox">
  <input type="checkbox"/>
  <i class="mdui-checkbox-icon"></i>
  默认不选中
</label>

<label class="mdui-checkbox">
  <input type="checkbox" checked/>
  <i class="mdui-checkbox-icon"></i>
  默认选中
</label>

<label class="mdui-checkbox">
  <input type="checkbox" disabled/>
  <i class="mdui-checkbox-icon"></i>
  禁用，且不选中
</label>

<label class="mdui-checkbox">
  <input type="checkbox" disabled checked/>
  <i class="mdui-checkbox-icon"></i>
  禁用，且选中
</label>

<label class="mdui-checkbox">
  <input type="checkbox" id="indeterminate-demo1"/>
  <i class="mdui-checkbox-icon"></i>
  不确定状态
</label>
<script>
  // indeterminate 属性只能通过 JavaScript 设置
  document.getElementById('indeterminate-demo1').indeterminate = true;
</script>

<label class="mdui-checkbox">
  <input type="checkbox" disabled id="indeterminate-demo2"/>
  <i class="mdui-checkbox-icon"></i>
  禁用，且不确定状态
</label>
<script>
  document.getElementById('indeterminate-demo2').indeterminate = true;
</script>

### 开关
<label class="mdui-switch">
  <input type="checkbox"/>
  <i class="mdui-switch-icon"></i>
  开关
</label>

<label class="mdui-switch">
  <input type="checkbox"/>
  <i class="mdui-switch-icon"></i>
</label>

<label class="mdui-switch">
  <input type="checkbox" checked/>
  <i class="mdui-switch-icon"></i>
</label>

<label class="mdui-switch">
  <input type="checkbox" disabled/>
  <i class="mdui-switch-icon"></i>
</label>

<label class="mdui-switch">
  <input type="checkbox" disabled checked/>
  <i class="mdui-switch-icon"></i>
</label>

### 滑块
<label class="mdui-slider">
  <input type="range" step="0.1" min="0" max="100"/>
</label>

<label class="mdui-slider mdui-slider-discrete">
  <input type="range" step="1" min="0" max="100"/>
</label>

#### 不可用
<!-- 默认值为 0 -->
<label class="mdui-slider">
  <input type="range" step="0.1" min="0" max="100" value="0" disabled/>
</label>

<!-- 默认值不为 0 -->
<label class="mdui-slider">
  <input type="range" step="0.1" min="0" max="100" value="50" disabled/>
</label>



### 选择框
<select class="mdui-select" mdui-select>
  <option value="1">选项1</option>
  <option value="2">选项2</option>
  <option value="3">选项3</option>
</select>

## 对话框组件

### 基础对话框
<button class="mdui-btn mdui-color-theme-accent mdui-ripple" mdui-dialog="{target: '#example-1-dialog'}">open</button>

<div class="mdui-dialog" id="example-1-dialog">
  <div class="mdui-dialog-title">Are you sure?</div>
  <div class="mdui-dialog-content">You'll lose all photos and media!</div>
  <div class="mdui-dialog-actions">
    <button class="mdui-btn mdui-ripple">cancel</button>
    <button class="mdui-btn mdui-ripple">erase</button>
  </div>
</div>

### 不带标题的对话框
<button class="mdui-btn mdui-color-theme-accent mdui-ripple" mdui-dialog="{target: '#example-2-dialog'}">open</button>

<div class="mdui-dialog" id="example-2-dialog">
  <div class="mdui-dialog-content">Discard draft?</div>
  <div class="mdui-dialog-actions">
    <button class="mdui-btn mdui-ripple">cancel</button>
    <button class="mdui-btn mdui-ripple">discard</button>
  </div>
</div>

### 竖排按钮
  <button class="mdui-btn mdui-color-theme-accent mdui-ripple" mdui-dialog="{target: '#example-3-dialog'}">open</button>

<div class="mdui-dialog" id="example-3-dialog">
  <div class="mdui-dialog-title">Use Google's location service?</div>
  <div class="mdui-dialog-content">Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</div>
  <div class="mdui-dialog-actions mdui-dialog-actions-stacked">
    <button class="mdui-btn mdui-ripple">turn on speed boost</button>
    <button class="mdui-btn mdui-ripple">no thanks</button>
  </div>
</div>

### 固定标题和按钮
<button class="mdui-btn mdui-color-theme-accent mdui-ripple" mdui-dialog="{target: '#example-4-dialog'}">open</button>

<div class="mdui-dialog" id="example-4-dialog">
  <div class="mdui-dialog-content">
    <div class="mdui-dialog-title">Use Google's location service?</div>
    Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
    <br/>test<br/>test<br/>test<br/>test<br/>test<br/>test<br/>test<br/>test<br/>test<br/>test<br/>test<br/>test<br/>test<br/>test<br/>test<br/>test<br/>test<br/>test<br/>test<br/>test<br/>test<br/>test<br/>test<br/>test<br/>test<br/>test<br/>test<br/>test<br/>test<br/>test<br/>test<br/>test<br/>test<br/>test<br/>test<br/>test<br/>test<br/>test<br/>test<br/>test<br/>test<br/>test<br/>test<br/>test<br/>test<br/>test<br/>test<br/>test<br/>test
  </div>
  <div class="mdui-dialog-actions">
    <button class="mdui-btn mdui-ripple">no thanks</button>
    <button class="mdui-btn mdui-ripple">turn on speeboost</button>
  </div>
</div>


### 提示对话框
<button class="mdui-btn mdui-ripple" onclick="mdui.prompt('请输入内容')">提示对话框</button>

## 反馈组件

### Snackbar
  <div class="mdui-container">
    <button class="mdui-btn mdui-color-theme-accent" id="open">open</button>
  </div>
  <script>
    document.getElementById('open').addEventListener('click', function() {
      mdui.snackbar({
        message: 'Archived',
        buttonText: 'undo',
        onClick: function () {
          mdui.alert('点击了 Snackbar');
        },
        onButtonClick: function () {
          mdui.alert('点击了按钮');
        },
        onClose: function () {
          mdui.alert('关闭了');
        }
      });
    });
  </script>

  <div class="mdui-container">
    <button class="mdui-btn mdui-color-theme-accent mdui-ripple" id="example-bottom">bottom</button>
    <button class="mdui-btn mdui-color-theme-accent mdui-ripple" id="example-top">top</button>
    <button class="mdui-btn mdui-color-theme-accent mdui-ripple" id="example-left-top">left-top</button>
    <button class="mdui-btn mdui-color-theme-accent mdui-ripple" id="example-left-bottom">left-bottom</button>
    <button class="mdui-btn mdui-color-theme-accent mdui-ripple" id="example-right-top">right-top</button>
    <button class="mdui-btn mdui-color-theme-accent mdui-ripple" id="example-right-bottom">right-bottom</button>
  </div>
<script>
    document.getElementById('example-top').addEventListener('click', function() {
      mdui.snackbar({
        message: 'top',
        position: 'top'
      });
    });
    document.getElementById('example-bottom').addEventListener('click', function() {
      mdui.snackbar({
        message: 'bottom',
        position: 'bottom'
      });
    });
    document.getElementById('example-left-top').addEventListener('click', function() {
      mdui.snackbar({
        message: 'left-top',
        position: 'left-top'
      });
    });
    document.getElementById('example-left-bottom').addEventListener('click', function() {
      mdui.snackbar({
        message: 'left-bottom',
        position: 'left-bottom'
      });
    });
    document.getElementById('example-right-top').addEventListener('click', function() {
      mdui.snackbar({
        message: 'right-top',
        position: 'right-top'
      });
    });
    document.getElementById('example-right-bottom').addEventListener('click', function() {
      mdui.snackbar({
        message: 'right-bottom',
        position: 'right-bottom'
      });
    });
</script>


### 进度条
<div class="mdui-progress">
  <div class="mdui-progress-determinate" style="width: 50%"></div>
</div>

### 循环进度条
<div class="mdui-progress">
  <div class="mdui-progress-indeterminate"></div>
</div>

### 环形进度条
<div class="mdui-spinner"></div>

### 多彩环形进度条
<div class="mdui-spinner mdui-spinner-colorful"></div>

### 滚动条
<div class="mdui-panel" mdui-panel>
  <div class="mdui-panel-item mdui-panel-item-open">
    <div class="mdui-panel-item-header">带滚动条的面板</div>
    <div class="mdui-panel-item-body" style="height: 200px; overflow-y: auto;">
      <p>很长的内容...</p>
      <p>很长的内容...</p>
      <p>很长的内容...</p>
      <p>很长的内容...</p>
      <p>很长的内容...</p>
      <p>很长的内容...</p>
      <p>很长的内容...</p>
      <p>很长的内容...</p>
      <p>很长的内容...</p>
      <p>很长的内容...</p>
      <p>很长的内容...</p>
      <p>很长的内容...</p>
      <p>很长的内容...</p>
      <p>很长的内容...</p>
      <p>很长的内容...</p>
      <p>很长的内容...</p>
      <p>很长的内容...</p>
      <p>很长的内容...</p>
      <p>很长的内容...</p>
      <p>彩蛋！lol</p>
      <p>很长的内容...</p>
    </div>  
  </div>
</div>

### 提示消息
<button class="mdui-btn mdui-ripple" onclick="mdui.snackbar({message: '这是一条提示消息'})">
  显示提示消息
</button>

## 其他组件 

### 卡片
<div class="mdui-card">

  <!-- 卡片头部，包含头像、标题、副标题 -->
  <div class="mdui-card-header">
    <img class="mdui-card-header-avatar" src="/images/avatar.jpg"/>
    <div class="mdui-card-header-title">Title</div>
    <div class="mdui-card-header-subtitle">Subtitle</div>
  </div>

  <!-- 卡片的媒体内容，可以包含图片、视频等媒体内容，以及标题、副标题 -->
  <div class="mdui-card-media">
    <img src="/images/banner.png"/>
    <!-- 卡片中可以包含一个或多个菜单按钮 -->
    <div class="mdui-card-menu">
      <button class="mdui-btn mdui-btn-icon mdui-text-color-white">
        <i class="mdui-icon material-icons">share</i>
      </button>
    </div>
  </div>

  <!-- 卡片的标题和副标题 -->
  <div class="mdui-card-primary">
    <div class="mdui-card-primary-title">Title</div>
    <div class="mdui-card-primary-subtitle">Subtitle</div>
  </div>

  <!-- 卡片的内容 -->
  <div class="mdui-card-content">子曰：「学而时习之，不亦说乎？有朋自远方来，不亦乐乎？人不知，而不愠，不亦君子乎？」</div>

  <!-- 卡片的按钮 -->
  <div class="mdui-card-actions">
    <button class="mdui-btn mdui-ripple">action 1</button>
    <button class="mdui-btn mdui-ripple">action 2</button>
    <button class="mdui-btn mdui-btn-icon mdui-float-right">
      <i class="mdui-icon material-icons">expand_more</i>
    </button>
  </div>

</div>

<div class="mdui-card">
  <div class="mdui-card-media">
    <img src="/images/banner.png"/>
    <div class="mdui-card-media-covered">
      <div class="mdui-card-primary">
        <div class="mdui-card-primary-title">Title</div>
        <div class="mdui-card-primary-subtitle">Subtitle</div>
      </div>
    </div>
  </div>
  <div class="mdui-card-actions">
    <button class="mdui-btn mdui-ripple">action 1</button>
    <button class="mdui-btn mdui-ripple">action 2</button>
  </div>
</div>

### 列表
<div class="mdui-list">
  <div class="mdui-list-item mdui-ripple">
    <i class="mdui-list-item-icon mdui-icon material-icons">email</i>
    <div class="mdui-list-item-content">收件箱</div>
  </div>
  <div class="mdui-list-item mdui-ripple">
    <i class="mdui-list-item-icon mdui-icon material-icons">send</i>
    <div class="mdui-list-item-content">发件箱</div>
  </div>
</div>

#### 密集型
<ul class="mdui-list mdui-list-dense">
  <li class="mdui-list-item mdui-ripple">
    <i class="mdui-list-item-icon mdui-icon material-icons">move_to_inbox</i>
    <div class="mdui-list-item-content">Inbox</div>
  </li>
  <li class="mdui-list-item mdui-ripple">
    <i class="mdui-list-item-icon mdui-icon material-icons">send</i>
    <div class="mdui-list-item-content">Outbox</div>
  </li>
  <li class="mdui-list-item mdui-ripple">
    <i class="mdui-list-item-icon mdui-icon material-icons">delete</i>
    <div class="mdui-list-item-content">Trash</div>
  </li>
  <li class="mdui-list-item mdui-ripple">
    <i class="mdui-list-item-icon mdui-icon material-icons">error</i>
    <div class="mdui-list-item-content">Spam</div>
  </li>
</ul>

#### 带复选框
<div class="mdui-list">

  <label class="mdui-list-item mdui-ripple">
    <div class="mdui-checkbox">
      <input type="checkbox" checked/>
      <i class="mdui-checkbox-icon"></i>
    </div>
    <div class="mdui-list-item-content">Line item selected</div>
    <i class="mdui-list-item-icon mdui-icon material-icons">chat</i>
  </label>

  <label class="mdui-list-item mdui-ripple">
    <div class="mdui-checkbox">
      <input type="checkbox"/>
      <i class="mdui-checkbox-icon"></i>
    </div>
    <div class="mdui-list-item-content">Line item unselected</div>
    <i class="mdui-list-item-icon mdui-icon material-icons">chat</i>
  </label>

  <label class="mdui-list-item mdui-ripple">
    <div class="mdui-checkbox">
      <input type="checkbox" checked/>
      <i class="mdui-checkbox-icon"></i>
    </div>
    <div class="mdui-list-item-content">Line item selected</div>
    <i class="mdui-list-item-icon mdui-icon material-icons">chat</i>
  </label>

</div>

#### 带开关
<ul class="mdui-list">

  <li class="mdui-list-item mdui-ripple">
    <i class="mdui-list-item-icon mdui-icon material-icons">network_wifi</i>
    <div class="mdui-list-item-content">Wi-Fi</div>
    <label class="mdui-switch">
      <input type="checkbox" checked/>
      <i class="mdui-switch-icon"></i>
    </label>
  </li>

  <li class="mdui-list-item mdui-ripple">
    <i class="mdui-list-item-icon mdui-icon material-icons">bluetooth</i>
    <div class="mdui-list-item-content">Bluetooth</div>
    <label class="mdui-switch">
      <input type="checkbox"/>
      <i class="mdui-switch-icon"></i>
    </label>
  </li>

  <li class="mdui-list-item mdui-ripple">
    <i class="mdui-list-item-icon mdui-icon material-icons">data_usage</i>
    <div class="mdui-list-item-content">Data usage</div>
  </li>

</ul>

#### 子列表
<ul class="mdui-list" mdui-collapse="{accordion: true}">

  <li class="mdui-list-item mdui-ripple">
    <i class="mdui-list-item-icon mdui-icon material-icons">home</i>
    <div class="mdui-list-item-content">Home</div>
  </li>

  <li class="mdui-list-item mdui-ripple">
    <i class="mdui-list-item-icon mdui-icon material-icons">dashboard</i>
    <div class="mdui-list-item-content">Dashboard</div>
  </li>

  <li class="mdui-collapse-item mdui-collapse-item-open">
    <div class="mdui-collapse-item-header mdui-list-item mdui-ripple">
      <i class="mdui-list-item-icon mdui-icon material-icons">people</i>
      <div class="mdui-list-item-content">Audience</div>
      <i class="mdui-collapse-item-arrow mdui-icon material-icons">keyboard_arrow_down</i>
    </div>
    <ul class="mdui-collapse-item-body mdui-list mdui-list-dense">
      <li class="mdui-list-item mdui-ripple">Overview</li>
      <li class="mdui-list-item mdui-ripple">Language</li>
      <li class="mdui-list-item mdui-ripple">Location</li>
      <li class="mdui-list-item mdui-ripple">New vs Returning</li>
    </ul>
  </li>

  <li class="mdui-collapse-item">
    <div class="mdui-collapse-item-header mdui-list-item mdui-ripple">
      <i class="mdui-list-item-icon mdui-icon material-icons">device_hub</i>
      <div class="mdui-list-item-content">Acquisition</div>
      <i class="mdui-collapse-item-arrow mdui-icon material-icons">keyboard_arrow_down</i>
    </div>
    <ul class="mdui-collapse-item-body mdui-list mdui-list-dense">
      <li class="mdui-list-item mdui-ripple">Overview</li>
      <li class="mdui-list-item mdui-ripple">All Traffic</li>
      <li class="mdui-list-item mdui-ripple">Direct Traffic</li>
      <li class="mdui-list-item mdui-ripple">Search Overview</li>
    </ul>
  </li>

  <li class="mdui-collapse-item">
    <div class="mdui-collapse-item-header mdui-list-item mdui-ripple">
      <i class="mdui-list-item-icon mdui-icon material-icons">touch_app</i>
      <div class="mdui-list-item-content">Behavior</div>
      <i class="mdui-collapse-item-arrow mdui-icon material-icons">keyboard_arrow_down</i>
    </div>
    <ul class="mdui-collapse-item-body mdui-list mdui-list-dense">
      <li class="mdui-list-item mdui-ripple">Overview</li>
      <li class="mdui-list-item mdui-ripple">All Pages</li>
      <li class="mdui-list-item mdui-ripple">Landing Pages</li>
      <li class="mdui-list-item mdui-ripple">Exit Pages</li>
    </ul>
  </li>

  <li class="mdui-list-item mdui-ripple">
    <i class="mdui-list-item-icon mdui-icon material-icons">shopping_cart</i>
    <div class="mdui-list-item-content">Ecommerce</div>
  </li>

</ul>

### 表格
<div class="mdui-table-fluid">
  <table class="mdui-table">
    <thead>
      <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Username</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Larry the Bird</td>
        <td></td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="mdui-table-fluid">
  <table class="mdui-table mdui-table-hoverable">
    <thead>
      <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Username</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Larry the Bird</td>
        <td></td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="mdui-table-fluid">
  <table class="mdui-table mdui-table-selectable">
    <thead>
      <tr>
        <th>Dessert (100g serving)</th>
        <th class="mdui-table-col-numeric" mdui-tooltip="{content: 'The total amount of food energy in the given serving size.'}">Calories</th>
        <th class="mdui-table-col-numeric">Fat (g)</th>
        <th class="mdui-table-col-numeric">Carbs (g)</th>
        <th class="mdui-table-col-numeric">Protein (g)</th>
        <th class="mdui-table-col-numeric">Sodium (mg)</th>
        <th class="mdui-table-col-numeric" mdui-tooltip="{content: 'The amount of calcium as a percentage of the recommended daily amount.'}">Calclum (%)</th>
        <th class="mdui-table-col-numeric">Lron (%)</th>
      </tr>
    </thead>
    <tbody>
      <tr class="mdui-table-row-selected">
        <td>Frozen yogurt</td>
        <td>159</td>
        <td>6.0</td>
        <td>24</td>
        <td>4.0</td>
        <td>87</td>
        <td>14%</td>
        <td>1%</td>
      </tr>
      <tr>
        <td>Ice cream sandwich</td>
        <td>237</td>
        <td>9.0</td>
        <td>37</td>
        <td>4.3</td>
        <td>129</td>
        <td>8%</td>
        <td>1%</td>
      </tr>
      <tr>
        <td>Eclair</td>
        <td>262</td>
        <td>16.0</td>
        <td>24</td>
        <td>6.0</td>
        <td>337</td>
        <td>6%</td>
        <td>7%</td>
      </tr>
    </tbody>
  </table>
</div>

#### Markdown 表格

| # | First Name | Last Name | Username |
|---|------------|-----------|----------|
| 1 | Mark       | Otto      | @mdo     |
| 2 | Jacob      | Thornton  | @fat     |
| 3 | Larry the Bird |         | @twitter |



### 工具提示
<button class="mdui-btn mdui-ripple" mdui-tooltip="{content: '这是提示文本'}">
  悬浮显示提示
</button>

### 徽章
<div class="mdui-badge" style="margin-right: 8px">5</div>
<div class="mdui-badge mdui-badge-pill">123</div>

### 纸片

<div class="mdui-chip">
  <span class="mdui-chip-title">Example Chip</span>
</div>
<div class="mdui-chip">
  <span class="mdui-chip-icon mdui-color-blue">/</span>
  <span class="mdui-chip-title">MDUI Design</span>
</div>

<div class="mdui-chip">
  <span class="mdui-chip-icon mdui-color-blue">
    <i class="mdui-icon material-icons">face</i>
  </span>
  <span class="mdui-chip-title">Example Chip</span>
</div>

<div class="mdui-chip">
  <span class="mdui-chip-title">Example Chip</span>
  <span class="mdui-chip-delete">
    <i class="mdui-icon material-icons">cancel</i>
  </span>
</div>

### 折叠面板
<div class="mdui-panel" mdui-panel>
  <div class="mdui-panel-item">
    <div class="mdui-panel-item-header">面板标题1</div>
    <div class="mdui-panel-item-body">
      <p>面板内容1</p>
    </div>
  </div>
  <div class="mdui-panel-item">
    <div class="mdui-panel-item-header">面板标题2</div>
    <div class="mdui-panel-item-body">
      <p>面板内容2</p>
    </div>
  </div>
</div>

### 菜单
<div class="mdui-container">
  <button class="mdui-btn mdui-color-theme-accent" mdui-menu="{target: '#example-1-menu1-simple'}">open</button>
  <ul class="mdui-menu" id="example-1-menu1-simple">
    <li class="mdui-menu-item">
      <a href="javascript:;" class="mdui-ripple">Refresh</a>
    </li>
    <li class="mdui-menu-item" disabled>
      <a href="javascript:;">Help & feedback</a>
    </li>
    <li class="mdui-menu-item">
      <a href="javascript:;" class="mdui-ripple">Settings</a>
    </li>
    <li class="mdui-divider"></li>
    <li class="mdui-menu-item">
      <a href="javascript:;" class="mdui-ripple">Sign out</a>
    </li>
  </ul>
</div>

#### 带图标
  <div class="mdui-container">
    <button class="mdui-btn mdui-color-theme-accent" mdui-menu="{target: '#example-2-menu1-icon'}">open</button>
    <ul class="mdui-menu" id="example-2-menu1-icon">
      <li class="mdui-menu-item">
        <a href="javascript:;" class="mdui-ripple">
          <i class="mdui-menu-item-icon mdui-icon material-icons">remove_red_eye</i>Preview
        </a>
      </li>
      <li class="mdui-menu-item">
        <a href="javascript:;" class="mdui-ripple">
          <i class="mdui-menu-item-icon mdui-icon material-icons">file_download</i>Download
        </a>
      </li>
      <li class="mdui-divider"></li>
      <li class="mdui-menu-item">
        <a href="javascript:;" class="mdui-ripple">
          <i class="mdui-menu-item-icon mdui-icon material-icons">delete</i>Remove
        </a>
      </li>
      <li class="mdui-menu-item">
        <a href="javascript:;" class="mdui-ripple">
          <i class="mdui-menu-item-icon"></i>Empty
        </a>
      </li>
    </ul>
  </div>

#### 级联
 <div class="mdui-container">
    <button class="mdui-btn mdui-color-theme-accent" mdui-menu="{target: '#example-2-menu2-stair'}">open</button>
    <ul class="mdui-menu" id="example-2-menu2-stair">
      <li class="mdui-menu-item">
        <a href="javascript:;" class="mdui-ripple">
          <i class="mdui-menu-item-icon mdui-icon material-icons">remove_red_eye</i>Preview
        </a>
      </li>
      <li class="mdui-menu-item">
        <a href="javascript:;" class="mdui-ripple">
          <i class="mdui-menu-item-icon mdui-icon material-icons">file_download</i>Download
        </a>
      </li>
      <li class="mdui-divider"></li>
      <li class="mdui-menu-item">
        <a href="javascript:;" class="mdui-ripple">
          <i class="mdui-menu-item-icon mdui-icon material-icons">delete</i>Remove
        </a>
      </li>
      <li class="mdui-menu-item">
        <a href="javascript:;" class="mdui-ripple">
          <i class="mdui-menu-item-icon"></i>Empty
        </a>
      </li>
    </ul>
  </div>

