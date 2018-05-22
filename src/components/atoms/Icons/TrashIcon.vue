<template lang='pug'>
  img(
    src="../../../assets/icons/trash-can.svg"
    :width="width"
    :height="height"
    @click="onClick()"
  )
</template>
<script>
export default {
  name: 'TrashIcon',
  data () {
    return {
      width: 20,
      height: 20
    }
  }
}
</script>
