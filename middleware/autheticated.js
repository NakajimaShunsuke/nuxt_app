export default function ({ store, route, redirect }) {
  if (!store.getters['google/isAuthenticated'] && route.name !== 'login') {
    redirect('/login')
  }
  if (store.getters['google/isAuthenticated'] && route.name === 'login') {
    redirect('/')
  }
}
