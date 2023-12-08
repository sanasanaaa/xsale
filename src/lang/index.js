import { createI18n } from 'vue-i18n'
import enLocale from './en'
import zhLocale from './zh'


// 引入本地包
const messages = {
  zh: {
    ...zhLocale,
  },
  en: {
    ...enLocale,
  },
}

// 创建国际化实例
const i18n = createI18n({
  locale: 'zh',
  messages
})

export default i18n