<script>
import Presenter from './Presenter.vue'
export default {
  name: 'AppButtonWarning',
  extends: Presenter
}
</script>
<style scoped lang="scss">
@import "../../../assets/styles/_properties.scss";
@import "./style.scss";
.status {
  background-color: $color-warning;
  color: #fff;
}
</style>
