<script>
import Presenter from './Presenter.vue'
export default {
  name: 'AppButton',
  extends: Presenter,
  props: {
    ...Presenter.props
  }
}
</script>
<style scoped lang="scss">
@import "./style.scss";
.status {
  background-color: inherit;
  border: 1px solid #ddd;
  color: #8c8c8c;
}
</style>
