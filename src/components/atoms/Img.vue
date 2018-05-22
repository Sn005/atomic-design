<template lang='pug'>
  img(
    ...props
  )
</template>
<script>
export default {
  name: 'Img',
  props: {
    href: {
      type: String,
      required: true
    },
    width: {
      type: String
    },
    height: {
      type: String
    }
  }
}
</script>
