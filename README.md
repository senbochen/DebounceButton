#### eslint + vscode + element-ui 二次封装

#### 有 vscode 的 setting.json 配置文件 ，保存自动格式化 #先安装 element-ui

```
   npm i element-ui
```

#### 组件 chen-button 是在防抖的场景下应用

```
  举例： <chen-button @click="getData">2123123221</chen-button>
        methods: {
          getData (done) {
            setTimeout(() => {
              done()
              console.log('请求数据')
            }, 2000)

          }
        }

```

#### 组件 pl-button 是在点击按钮二次确认的情况下使用

```
   <pl-button
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
      >地扫活动是怕</pl-button

```

| props 名称                 | 是否必须 | 默认值 | 类型    | 描述             |
| -------------------------- | :------: | -----: | ------- | ---------------- |
| auto-comfirm               |    否    |   true | Boolean | 是否需要二次确认 |
| confirm-config             |    否    |      { |
| massage: '确定要删除吗？', |

        title: '温馨提示',
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'} | Object   | 二次确认类型信息

| confirm | 是 | function | Function | 点击确定按钮后的操作 |
|cancle |是| function | Function | 点击取消按钮之后的操作
