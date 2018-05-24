<template lang='pug'>
  img(
    :src="src"
    :alt="alt"
    :width="width"
    :height="height"
  )
</template>
<script>
export default {
  name: 'AppImg',
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    },
    width: {
      type: Number
    },
    height: {
      type: Number
    }
  }
}
</script>
