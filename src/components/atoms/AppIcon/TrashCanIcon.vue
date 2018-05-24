<script>
import Presenter from './Presenter.vue'
export default {
  name: 'TrashCanIcon',
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
