<template lang='pug'>
  form
    p.label メールを入力してください
    div
      app-text-box.textbox
      primary-button(@click="$emit('on-submit')") 認証メールを送信
</template>
<script>
import AppTextBox from '@/components/atoms/AppTextBox.vue'
import AppPrimaryButton from '@/components/atoms/AppButton/Primary.vue'
export default {
  name: 'MailAuthForm',
  components: {
    AppTextBox,
    AppPrimaryButton
  }
}
</script>
<style scoped lang='scss'>
.textbox{
  width: 30rem;
}

.label{
  font-size: .8rem;
  font-weight: 700;
  line-height: 1;
  padding-bottom: 1rem;
}
</style>
