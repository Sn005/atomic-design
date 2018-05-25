<template lang='pug'>
  button.button.status
    slot デフォルトテキスト
</template>
<script>
export default {
  name: 'AppButtonPresenter'
}
</script>
<style scoped lang="scss">
.button {
  border-radius: 2px;
  border-width: 0;
  display: inline-block;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1;
  padding: .8rem;
  text-decoration: none;
  transition: opacity .1s ease-out;
  &:hover{
    opacity: .7;
  }
}
</style>
