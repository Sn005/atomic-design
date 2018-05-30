<template lang='pug'>
span.hover-tip-interaction
  slot(
    v-if="hasRoot"
    name="root"
  )
  span.marker(v-if="hasMarker")
    slot(name="marker")
  span.tip(v-if="hasTip")
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
@import "../../assets/styles/_properties.scss";
@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes marker {
  to {
    background-color: $color-selected;
  }
}

.hover-tip-interaction{
  display: inline-block;
  position: relative;
  &:hover{
    > {
      .tip{
        display: inline-block;
        animation: fade $fade-animation;
      }
      .marker{
        background-color: $color-selected;
        animation: marker $fade-animation forwards;
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
