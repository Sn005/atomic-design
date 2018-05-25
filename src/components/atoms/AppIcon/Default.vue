<script>
import Presenter from './Presenter.vue'
export default {
  name: 'AppIcon',
  extends: Presenter,
  props: {
    ...Presenter.props,
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
