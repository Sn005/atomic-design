<template lang='pug'>
div.root
  div.marker
    slot( name="marker" )
  div.tip
    slot( name="tip" )
</template>
<script>
export default {
  name: 'HoverTipInteraction'
}
</script>
<style scoped lang='scss'>
.root{
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
  left: -50%;
  transform: translate(-22%, -100%)translateY(-12px);
  white-space: nowrap;
}

</style>
