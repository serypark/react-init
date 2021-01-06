import request from 'helper/request'
import { AxiosResponse } from 'axios'

const UserApi = {
  getUserApi: (data: { webAppKey: string }): Promise<AxiosResponse> =>
    request({
      url: '/v-noti-user',
      method: 'post',
      data
    })
}

export default UserApi
