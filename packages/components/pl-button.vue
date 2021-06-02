<template>
  <el-button v-bind="$attrs" type="primary" @click="handlerClick">
    <slot />
  </el-button>
</template>

<script>
export default {
  name: 'PlButton',
  props: {
    autoComfirm: {
      type: Boolean,
      required: true,
      default: false
    },
    confirmConfig: {
      type: Object,
      required: false,
      default: () => { return {} }
    }
  },
  data () {
    return {}
  },
  methods: {
    handlerClick () {
      const {
        massage = '确定要删除吗？',
        title = '温馨提示',
        confirmButtonText = '确定',
        cancelButtonText = '取消',
        type = 'warning'
      } = this.confirmConfig
      if (this.autoComfirm) {
        this.$confirm(massage, title, {
          confirmButtonText,
          cancelButtonText,
          type
        }).then(() => {
          this.$emit('confirm')
        }).catch(() => {
          this.$emit('cancel')
        })
      }


    }
  }
}
</script>

<style>
</style>
