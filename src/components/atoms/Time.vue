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
    displayedTime () {
      if (!this.isValid(this.time)) return '有効な時間表現ではありません'
      return this.formatTime(this.time, 'MM月DD日(ddd)HH:mm')
    },
    datetime () {
      if (!this.isValid(this.time)) return '有効な時間表現ではありません'
      return this.formatTime(this.time)
    }
  },
  methods: {
    isValid (unixtime) {
      return moment(unixtime, 'x', true).isValid()
    },
    formatTime (time, format = 'YYYY-MM-DDTHH:mm') {
      return moment(time).format(format)
    }
  }
}
</script>
