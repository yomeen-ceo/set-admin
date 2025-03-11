import _ from 'lodash'
import { languageMap } from '../boot/i18n'

const basicRoutes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { name: 'home', path: '', component: () => import('pages/home/Home.vue') },
      { name: 'initial', path: 'initial', component: () => import('pages/home/Initial.vue') }
    ]
  }
]

const routes = _.cloneDeep(basicRoutes)

const changeName = ({ prefix, children }) => {
  _.forEach(children, (item) => {
    if (!item.children) {
      item.name = `${prefix}-${item.name}`
    }
    if (item.children) {
      changeName({
        prefix,
        children: item.children
      })
    }
  })
}

_.forIn(languageMap, (value, key) => {
  const language = _.kebabCase(key)
  _.forEach(_.cloneDeep(basicRoutes), (basicRoute) => {
    basicRoute.path = `/${language}${basicRoute.path}`
    changeName({ prefix: language, children: basicRoute.children })
    routes.push(basicRoute)
  })
})

routes.push({
  path: '*',
  component: () => import('pages/Error404.vue')
})

export default routes
