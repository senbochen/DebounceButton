<template>
  <el-button
    type="primary"
    :loading="loading"
    v-bind="$attrs"
    @click="handlerClick"
  >
    <slot />
  </el-button>
</template>

<script>
export default {
  name: 'ChenButton',
  props: {
    autoLoading: {
      default: true,
      type: Boolean,
      required: false
    }
  },
  data () {
    return {
      loading: false
    }
  },
  methods: {
    handlerClick () {
      console.log(2131)
      if (this.autoLoading) {
        this.loading = true
      }
      this.$emit('click', () => {
        this.loading = false
      })
    }
  }
}
</script>
<style lang='scss' scoped>
</style>
