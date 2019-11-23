export const auth = ({ next, router }) => {
  if (!localStorage.getItem('token')) {
    return router.push({ name: 'login' })
  }
  return next()
}

export default {
  auth
}
