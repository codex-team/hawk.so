export default function ({ route, redirect }) {
  if (route.path !== '/' && route.path.endsWith('/')) {
    const withoutTrailingSlash = route.path.slice(0, -1)
    redirect(301, withoutTrailingSlash)
  }
}
