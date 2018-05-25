<template lang='pug'>
  div.root
    slot(name="top")
    div.body
      div.main
        slot(name="main")
      div.left
        slot(name="left")
      div
        slot(name="right")
    slot(name="bottom")
</template>
<script>
export default {
  name: 'HolyGrailLayout'
}
</script>
<style scoped lang='scss'>
.root{
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
.body{
  display: flex;
  flex-direction: column;
}
.left{
  order: -1;
}

@media (min-width: 768px){
  .body{
    flex: 1;
    flex-direction: row;
  }
  .left{
    flex: 0 0 12em;
  }
  .main{
    flex: 1;
  }
}

</style>
