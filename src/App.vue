<template>
  <div id="app">
    <img src="./assets/logo.png">
    <br>
    {{size}}
    <br>
    <app-icon name="trash-can"></app-icon>
    <br>
    <router-view/>
  </div>
</template>

<script>
import Notification from '@/components/organisms/Notification.vue'
import AppIcon from '@/components/atoms/AppIcon/Default.vue'
export default {
  name: 'App',
  components: {Notification, AppIcon},
  data () {
    return {
      size: 1,
      program: {
        id: 0,
        thumbnail: '/mock/images/img01.jpg',
        title: 'コンポーネント指向でUIを設計しよう！第1話',
        channelName: 'UIチャンネル',
        startAt: 1507032000000,
        endAt: 1507035600000
      }
    }
  },
  methods: {
    sample () {
      this.size += 1
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
