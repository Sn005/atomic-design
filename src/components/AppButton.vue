<template>
  <button>
    <slot>Hello Vue</slot>
  </button>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      default: '文字が入ります'
    }
  }
}
</script>
<style scoped>
button {
  color: green;
  border-radius: 5px;
  font-size: 18px;
  line-height: 1.5;
  padding: 0 10px;
}
</style>
