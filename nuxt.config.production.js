import dotenv from 'dotenv'
import path from 'path'
import nuxtDefaultConfig from './nuxt.config'

dotenv.config()

const pathBuild = path.join(__dirname, './') + process.env.PATH_DIR + '/' + process.env.PATH_BUILD_PRODUCTION
const fixPathBuild = path.normalize(pathBuild)

const nuxtProductionConfig = {
  nuxtDefaultConfig,
  generate: {
    dir: fixPathBuild
  },
  axios: {
    debug: false,
    baseURL: process.env.AXIOS_PRODUCTION_BASE_URL
  },
}

const confProduction = Object.assign(nuxtDefaultConfig, nuxtProductionConfig)

export default confProduction
