<script>
export default {
  name: 'HeadingPresenter',
  props: {
    level: {
      type: Number,
      default: 1
    },
    visualLevel: {
      type: Number
    }
  },
  computed: {
    formattedLevel () {
      return Math.max(1, Math.min(6, this.level))
    },
    formattedViewLevel () {
      const level = (typeof this.visualLevel !== 'undefined') ? this.visualLevel : this.formattedLevel
      return Math.max(1, Math.min(6, level))
    },
    tag () {
      return `h${this.formattedLevel}`
    },
    style () {
      return `h${this.formattedViewLevel}`
    }
  }
}

</script>
