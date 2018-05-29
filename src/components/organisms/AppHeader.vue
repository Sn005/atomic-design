<template lang='pug'>
  div.root
</template>
<script>
export default {
  name: 'AppHeader'
}
</script>
<style scoped lang='scss'>
@import "../../assets/styles/_properties.scss";

.root {
  padding: calc($space * 2);
  background-color: $color-header;
  color: $color-text-outlined;
}
</style>
