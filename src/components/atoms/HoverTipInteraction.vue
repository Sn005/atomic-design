<template lang='pug'>
div.root
  div(v-if="hasRoot")
    slot(name="root")
  div.marker(v-if="hasMarker")
    slot(name="marker")
  div.tip(v-if="hasTip")
    slot(name="tip") デフォルト文章が入ります
</template>
<script>
export default {
  name: 'HoverTipInteraction',
  computed: {
    hasRoot () {
      return this.$slots.root
    },
    hasMarker () {
      return this.$slots.marker
    },
    hasTip () {
      return this.$slots.tip
    }
  }
}
</script>
<style scoped lang='scss'>
.root{
  display: inline-block;
  position: relative;
  &:hover{
    > {
      .tip{
        display: inline-block;
      }
      .marker{
        background-color: #f6f6f6;
      }
    }
  }
}
.tip{
  display: none;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -100%)translateY(-12px);
  white-space: nowrap;
}

</style>
