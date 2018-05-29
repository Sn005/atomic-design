<template lang='pug'>
  nav
    ul.list
      li.item(
        v-for="(item, index) in items"
        :key="index"
      )
        a.link(
          v-if="!item.curren"
          :href="item.href"
        ) {{ item.label }}
        span.link.curren(
          v-else
        ) {{ item.label }}
</template>
<script>
export default {
  name: 'Navigation',
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>
<style scoped lang='scss'>
@import "../../assets/styles/_properties.scss";

.list {
  display: flex;
  flex-direction: rows;
  font-size: .8rem;
}
.item + .item {
  padding: 0 0 0 2em;
}

.link {
  color: #fff;
  padding: ($space * 0.5) 0;
  @at-root .current{
    border-color: $color-primary;
    border-style: solid;
    border-width: 0 0 .1rem 0;
    color: #fff;
  }
  &:hover{
    @extend .current;
  }
}
</style>
