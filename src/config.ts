export const isProd = process.env.NODE_ENV === 'production'

const devURL = 'http://localhost:4000'
const prodURL = 'https://cv-manager.appnium.it'
export const baseImageURL =
  'https://cvmanager.fra1.digitaloceanspaces.com/CVManager/'

export const serverEndpoint = isProd ? prodURL : devURL
