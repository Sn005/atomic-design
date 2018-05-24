<template lang='pug'>
section.notification
  div.notification__media
    app-img(
      :src="thumbnail"
      :alt="alt"
      :width="128"
      :height="72"
    )
  div.notification__body
    app-heading(
      :level="3"
      :visualLevel="6"
    ) {{ title }}
    app-info.notification__time(size="s")
      app-time(:time="startAt")
      | ～
      app-time(
        :time="endAt"
        format="HH:mm"
      )
    div.notification__del(
        @click="$emit('delete-action')"
      )
      delete-button
</template>
<script>
import AppImg from '@/components/atoms/AppImg.vue'
import AppHeading from '@/components/atoms/AppHeading/Default.vue'
import AppInfo from '@/components/atoms/AppTxt/Info.vue'
import AppTime from '@/components/atoms/AppTime.vue'
import DeleteButton from '@/components/molecules/DeleteButton.vue'
export default {
  name: 'Notification',
  components: {
    AppImg,
    AppHeading,
    AppInfo,
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
    alt () {
      return this.program.title + 'の画像'
    },
    startAt () {
      return this.program.startAt
    },
    endAt () {
      return this.program.endAt
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
