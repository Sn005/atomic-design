<script>
import Presenter from './Presenter.vue'
export default {
  name: 'AppIcon',
  mixins: [Presenter],
  props: {
    clickable: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      required: true
    }
  }
}
</script>
<style scoped lang='scss'>
@import "./styles.scss";
</style>
