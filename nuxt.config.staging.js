import dotenv from 'dotenv'
import path from 'path'
import nuxtDefaultConfig from './nuxt.config'

dotenv.config()

const pathBuild = path.join(__dirname, './') + process.env.PATH_DIR + '/' + process.env.PATH_BUILD_STAGING
const fixPathBuild = path.normalize(pathBuild)

const nuxtStagingConfig = {
  nuxtDefaultConfig,
  generate: {
    dir: fixPathBuild
  },
  axios: {
    debug: false,
    baseURL: process.env.AXIOS_STAGING_BASE_URL
  },
}

const confStaging = Object.assign(nuxtDefaultConfig, nuxtStagingConfig)

export default confStaging
