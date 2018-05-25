<script>
import Presenter from './Presenter.vue'
export default {
  name: 'InfoTxt',
  extends: Presenter,
  props: {
    ...Presenter.props
  }
}
</script>
<style scoped lang='scss'>
.state { color: #8C8C8C; }
</style>
