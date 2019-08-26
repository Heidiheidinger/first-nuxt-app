import dotenv from 'dotenv'
import nuxtDefaultConfig from './nuxt.config'

dotenv.config()

const nuxtDevelopmentConfig = {
  server: {
    port: process.env.APP_DEV_PORT
  },
  axios: {
    debug: true,
    baseURL: process.env.AXIOS_DEVELOPMENT_BASE_URL
  }
}

const confDevelopment = Object.assign(nuxtDefaultConfig, nuxtDevelopmentConfig)

export default confDevelopment
