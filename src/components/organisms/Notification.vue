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
    info-txt.notification__time(size="s")
      app-time(:time="startAt") ～
      app-time(
        :time="endAt"
        format="HH:mm"
      )
    div.notification__del
      delete-button(@click="onClick")
</template>
<script>
import Img from '@/components/atoms/Img.vue'
import Heading from '@/components/atoms/Heading/Default.vue'
import Info from '@/components/atoms/Txt/Info.vue'
import AppTime from '@/components/atoms/AppTime.vue'
import DeleteButton from '@/components/molecules/DeleteButton.vue'
export default {
  name: 'Notification',
  components: {
    Img,
    Heading,
    Info,
    AppTime,
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
  },
  methods: {
    onClick () {
      this.$emit('on-click')
    }
  }
}
</script>
<style scoped lang='scss'>
.notification{
  $elm: #{&};
  display: flex;
  position: relative;
  padding: 1rem;
  &__body{
    flex: 1;
    min-width: 0;
  }
  &__media{
    padding-right: 1rem;
  }
  &__time{
    margin-top: .5rem;
  }
  &__del{
    position: absolute;
    top: 50%;
    right: 1.5rem;
    transform: translateX(-50%);
  }
  &:hover{
    #{$elm}__del{
      display: inline-block;
    }
  }
}
</style>
