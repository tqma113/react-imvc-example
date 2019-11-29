// route

export default [
  {
    path: '/',
    controller: () => import('./page/example/Controller')
  },
  {
    path: '/js',
    controller: () => import('./page/javascript/Controller')
  },
  {
    path: '/test',
    controller: () => import('./page/test/Controller')
  }
]