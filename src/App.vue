
<template>
  <div id="app">
    <chen-button
      :auto-loading="true"
      @click="submit"
    >
      1121
    </chen-button>
    <pl-button
      :auto-comfirm="true"
      :confirm-config="{
        massage: '删除吗？',
        title: '温馨提示',
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }"
      @confirm="confirmHandler"
    >
      删除
    </pl-button>
  </div>
</template>

<script>
import ChenButton from '@/components/chen-button.vue'
import PlButton from '@/components/pl-button.vue'


export default {
  'name': 'App',
  'components': {
    ChenButton,
    PlButton
  },
  data () {
    return {

    }
  },
  methods: {
    submit (done) {
      // 这里供业务组件处理一些事情,比如ajax请求,此处用setTimeout模拟,    执行done()方法消失loading
      setTimeout(() => {
        done()
        console.log(done)
      }, 1000)
    },
    confirmHandler () {
      console.log('确定要删除吗？')
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
