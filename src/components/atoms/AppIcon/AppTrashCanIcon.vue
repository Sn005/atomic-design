<script>
import Presenter from './Presenter.vue'
export default {
  name: 'AppTrashCanIcon',
  mixins: [Presenter],
  data () {
    return {
      name: 'trash-can'
    }
  },
  props: {
    clickable: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style scoped lang='scss'>
@import "./styles.scss";
</style>
