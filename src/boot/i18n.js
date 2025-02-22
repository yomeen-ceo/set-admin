import Vue from 'vue'
import VueI18n from 'vue-i18n'
import messages from 'src/i18n'
import _ from 'lodash'

import config from '../../config'

Vue.use(VueI18n)

export const defaultLocale = config.i18n.defaultLocale

export const i18n = new VueI18n({
  locale: defaultLocale,
  fallbackLocale: config.i18n.fallbackLocale,
  messages
})

export const languageMap = config.i18n.languageMap

export const buildI18nRouteName = ({ name }) => {
  const language = _.kebabCase(i18n.locale)
  if (i18n.locale === defaultLocale) {
    return name
  }
  return `${language}-${name}`
}

Vue.prototype.i18n = i18n
Vue.prototype.defaultLocale = defaultLocale
Vue.prototype.languageMap = languageMap
Vue.prototype.buildI18nRouteName = buildI18nRouteName

const getResultLang = ({ path }) => {
  let resultLang = defaultLocale
  _.forIn(languageMap, (value, key) => {
    const urlPathLang = _.split(path, '/')[1]
    const language = _.kebabCase(key)
    if (language === urlPathLang) {
      resultLang = key
    }
  })
  return resultLang
}

export default ({ app, router, urlPath }) => {
  i18n.locale = getResultLang({ path: urlPath })
  router.beforeEach((to, from, next) => {
    i18n.locale = getResultLang({ path: to.path })
    next()
  })

  // Set i18n instance on app
  app.i18n = i18n
  app.defaultLocale = defaultLocale
  app.languageMap = languageMap
  app.buildI18nRouteName = buildI18nRouteName
}
