import { sample } from '~/apis/sample'

const sampleService = async () => {
  const result: any = await sample('id')
  return result
}

export default {
  sampleService,
}
