<script>
import Presenter from './Presenter.vue'
export default {
  name: 'AppButton',
  extends: Presenter
}
</script>
<style scoped lang="scss">
.button {
  border-radius: 2px;
  border-width: 0;
  display: inline-block;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1;
  padding: .8rem;
  text-decoration: none;
  transition: opacity .1s ease-out;
  &:hover{
    opacity: .7;
  }
}
.status {
  background-color: inherit;
  border: 1px solid #ddd;
  color: #8c8c8c;
}
</style>
