<template lang='pug'>
  a(
    :href="href"
  )
    slot
</template>
<script>
export default {
  name: 'AppAncor',
  props: {
    href: {
      type: String,
      required: true
    }
  }
}
</script>
