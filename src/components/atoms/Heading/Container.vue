<script>
export default {
  computed: {
    formattedLevel () {
      return Math.max(0, Math.min(6, this.level))
    },
    formattedViewLevel () {
      const level = (typeof this.visualLevel !== 'undefined') ? this.visualLevel : this.formattedLevel
      return Math.max(0, Math.min(6, level))
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
