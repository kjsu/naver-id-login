import ajax from '~/utils/ajax'
import { AxiosResponse } from 'axios'

export const deleteNaverOAuthToken = async (accessToken: string) => {
  const result: AxiosResponse<any> = await ajax.get(
    `https://nid.naver.com/oauth2.0/token?grant_type=delete&client_id=KiE0I0s67NMDmxSD5owH&client_secret=pLNQTmzenz&access_token=${accessToken}&service_provider=NAVER`
  )
  return result?.data
}
