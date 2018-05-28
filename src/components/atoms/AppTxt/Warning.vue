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
@import "../../../assets/styles/_properties.scss";
@import "./style.scss";
.state { color: $color-warning; }
</style>
