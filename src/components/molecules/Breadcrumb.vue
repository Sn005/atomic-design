<template lang='pug'>
  ul.breadcrumb
    li.item(
      v-for="(item , index) in items"
      :key="index"
    )
      app-anchor(
        v-if="(items.length - 1) !== index"
        :href="item.url"
      )
        app-txt(size="s" tag="span") {{ item.label }}
      span(
        v-else
      ) {{ item.label }}
</template>
<script>
import AppAnchor from '@/components/atoms/AppAnchor.vue'
import AppTxt from '@/components/atoms/AppTxt/Default.vue'
export default {
  name: 'Breadcrumb',
  components: {
    AppAnchor,
    AppTxt
  },
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>
<style scoped lang='scss'>
@import "../../assets/styles/_properties.scss";

.breadcrumb {
  display: flex;
}

.item {
  font-size: $font-size-s;
}

.item + .item {
  margin-left: $space * 3;
  position: relative;
}

.item + .item::after {
  content: ">";
  position: absolute;
  top: 50%;
  left: -1em;
  transform: translateY(-50%);
}

</style>
