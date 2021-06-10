#### eslint + vscode + element-ui 二次封装

#### 有 vscode 的 setting.json 配置文件 ，保存自动格式化

##### 先安装 element-ui

```
   npm i element-ui
```

#### 安装 debounce-button 再 Vue.use(debounce-button)

```
    npm i debounce-button
    Vue.use(debounce-button)
```

#### 组件 debounce-button 是点击发布或确定的场景下应用，按钮开启 loading 效果，禁止连续点击

```
  举例：  <debounce-button @click="getData">2123123221</debounce-button>
        methods: {
          getData (done) {
            setTimeout(() => {
              done() //关闭按钮loading效果
              console.log('请求数据')
            }, 2000)

          }
        }

```

#### 组件 confirm-button 是在点击按钮二次确认的情况下使用

```
   <confirm-button
      @confirm="confirm"
      @cancle="cancle"
      auto-comfirm
      :confirm-config="{
        massage: '确定要删除吗？',
        title: '温馨提示',
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }"
      >地扫活动是怕</confirm-button
    >

```

| props          | 是否必须 |   默认值 | 类型     | 描述                   |
| -------------- | :------: | -------: | -------- | ---------------------- |
| auto-comfirm   |    否    |     true | Boolean  | 是否需要二次确认       |
| confirm-config |    否    |      { } | Object   | 二次确认类型弹框的信息 |
| confirm        |    是    | function | Function | 点击确定按钮后的操作   |
| cancle         |    是    | function | Function | 点击取消按钮之后的操作 |

#### 补充:

```

confirm-config 的默认值是
{
massage: '确定要删除吗？',
title: '温馨提示',
confirmButtonText: '确定',
cancelButtonText: '取消',
type: 'warning'
}

```
