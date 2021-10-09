import { AxiosResponse } from 'axios'
import ajax from '~/utils/ajax'

interface Sample1 {
  hasUser: boolean
}

type Sample2 = boolean

export const sample = async (id: string) => {
  const result: AxiosResponse<Sample1> = await ajax.get(`/hasuser?id=${id}`)
  // const result: AxiosResponse<Sample1> = await ajax.put(`/members?id=${id}`, info)

  return result?.data
}