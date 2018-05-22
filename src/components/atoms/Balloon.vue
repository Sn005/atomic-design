<template lang='pug'>
  span.balloon 削除する
</template>
<script>
export default {
  name: 'Balloon'
}
</script>
<style scoped lang='scss'>
.balloon{
  background-color: #1a1a1a;
  border-radius: 2px;
  color: white;
  display: inline-block;
  font-size: 0.8rem;
  padding: 0.4rem 0.5rem;
  position: relative;
  &::after{
    border-color: #1a1a1a transparent transparent transparent;
    border-style: solid;
    border-width: 3px 3px 0 3px;
    bottom: 0;
    content: "";
    display: block;
    height: 0;
    left: 50%;
    position: absolute;
    transform: translate(-50%, 100%);
    width: 0;
  }
}
</style>
