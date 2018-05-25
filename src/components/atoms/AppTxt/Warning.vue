<script>
import Presenter from './Presenter.vue'
export default {
  name: 'WarningTxt',
  extends: Presenter,
  props: {
    ...Presenter.props
  }
}
</script>
<style scoped lang='scss'>
.state { color: #f0163a; }
</style>
