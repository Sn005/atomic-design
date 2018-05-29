<template lang='pug'>
media-object-layout.root(
  tag="section"
)
  app-img.media(
    :src="thumbnail"
    :alt="alt"
    :width="128"
    :height="72"
    slot="media"
  )
  div(
    slot="body"
  )
    app-heading(
      :level="3"
      :visualLevel="6"
    ) {{ title }}
    app-info.time(size="s")
      app-time(:time="startAt")
      | ～
      app-time(
        :time="endAt"
        format="HH:mm"
      )
    div.del(
        @click="$emit('on-click-delete', program)"
      )
      delete-button
</template>
<script>
import AppImg from '@/components/atoms/AppImg.vue'
import AppHeading from '@/components/atoms/AppHeading/Default.vue'
import AppInfo from '@/components/atoms/AppTxt/Info.vue'
import AppTime from '@/components/atoms/AppTime.vue'
import DeleteButton from '@/components/molecules/DeleteButton.vue'
import MediaObjectLayout from '@/components/atoms/MediaObjectLayout.vue'
export default {
  name: 'Notification',
  components: {
    AppImg,
    AppHeading,
    AppInfo,
    AppTime,
    DeleteButton,
    MediaObjectLayout
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
.root{
  $elm: #{&};
  position: relative;
  padding: 1rem;
}

.media{
  padding-right: 1rem;
}
.time{
  margin-top: .5rem;
}

.del{
  position: absolute;
  top: 50%;
  right: 1.5rem;
  transform: translateX(-50%);
  .root:hover & {
    display: inline-block;
  }
}
</style>
