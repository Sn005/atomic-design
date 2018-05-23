<template lang='pug'>
section.notification
  figure.notification__media
    img(
      :src="thumbnail"
      :width="128"
      :height="72"
    )
  div.notification__body
    heading(
      :level="3"
      :visualLevel="6"
    ) {{ title }}
    info-txt..notification__time(size="s")
      time(:time="startAt")
</template>
<script>
import Img from '@/components/atoms/Img.vue'
import Heading from '@/components/atoms/Heading/Default.vue'
import Info from '@/components/atoms/Txt/Info.vue'
import Time from '@/components/atoms/Time.vue'
import DeleteButton from '@/components/molecules/DeleteButton.vue'
export default {
  name: 'Notification',
  components: {
    Img,
    Heading,
    Info,
    Time,
    DeleteButton
  },
  props: {
    program: {
      type: Object,
      required: true
    }
  },
  computed: {
    thumbnail () {
      return this.program.thumbnail
    },
    title () {
      return this.program.title
    },
    startAt () {
      return this.program.startAt
    }
  }
}
</script>
<style scoped lang='scss'>
.notification{
  display: flex;
  position: relative;
  padding: 1rem;
  &__media{

  }
}
</style>
