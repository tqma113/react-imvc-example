// route

export default [
  {
    path: '/',
    controller: () => import(/* webpackChunkName: "example" */ './page/example/Controller')
  },
  {
    path: '/js',
    controller: () => import(/* webpackChunkName: "javascript" */ './page/javascript/Controller')
  },
  {
    path: '/test',
    controller: () => import(/* webpackChunkName: "test" */ './page/test/Controller')
  }
]