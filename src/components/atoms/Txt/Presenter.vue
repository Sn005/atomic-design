<template lang='pug'>
  component.info(
    :is="tag"
    :class="size"
  )
    slot デフォルトテキストが入ります
</template>
<style scoped lang='scss'>
.s { font-size: .8rem; }
.m { font-size:  2rem; }
.l { font-size: 1.2rem; }
</style>
