<template lang='pug'>
time(
  :datetime="dateTime"
) {{ displayedTime }}
</template>
<script>
import moment from 'moment'
import 'moment/locale/ja'
moment.locale()
export default {
  name: 'Time',
  props: {
    time: {
      type: Number,
      required: true
    }
  },
  computed: {
    unixTime () {
      return parseInt(this.time, 10)
    },
    displayedTime () {
      if (!this.isValid()) return '有効な時間表現ではありません'
      return this.formatTime('MM月DD日(ddd)HH:mm')
    },
    dateTime () {
      if (!this.isValid()) return '有効な時間表現ではありません'
      return this.formatTime()
    }
  },
  methods: {
    isValid () {
      return moment(this.unixTime, 'x', true).isValid()
    },
    formatTime (format = 'YYYY-MM-DDTHH:mm') {
      return moment(this.unixTime).format(format)
    }
  }
}
</script>
