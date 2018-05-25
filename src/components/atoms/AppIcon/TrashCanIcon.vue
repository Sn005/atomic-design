<script>
import Presenter from './Presenter.vue'
export default {
  name: 'TrashCanIcon',
  extends: Presenter,
  data () {
    return {
      name: 'trash-can'
    }
  },
  props: {
    ...Presenter.props
  }
}
</script>
