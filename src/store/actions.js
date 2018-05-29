import http from '../mock/http.js'
export default {
  async fetch ({ commit }) {
    const {notifications, navigations, breadcrumb} = await http.get('/api/data')
    commit('setNotifications', notifications)
    commit('setNavigations', navigations)
    commit('setBreadcrumb', breadcrumb)
  },
  deleteNotification ({commit, state}, id) {
    const newNotifications = state.notifications.filter(noti => {
      return noti.id !== id
    })
    commit('setNotifications', newNotifications)
  }
}
