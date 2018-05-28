<script>
import Presenter from './Presenter.vue'
export default {
  name: 'AppTxt',
  extends: Presenter,
  props: {
    ...Presenter.props
  }
}
</script>
<style scoped lang='scss'>
@import "./style.scss";
.state { color: #000; }
</style>
