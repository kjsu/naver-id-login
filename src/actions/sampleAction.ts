import sampleService from '~/services/sampleService'

const sampleAction = () => {
  return sampleService.sampleService()
}

export default {
  sampleAction,
}
