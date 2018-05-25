<template lang='pug'>
  input.textBox(
    type="text"
  )
</template>
<script>
export default {
  name: 'AppTextBox'
}
</script>
<style scoped lang='scss'>
.textBox{
  border: 1px solid #ddd;
  border-radius: 2px;
  color: #000;
  font-size: .8rem;
  padding: .5rem;
}
</style>
