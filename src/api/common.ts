// 公共基础接口封装
import request from '@/utils/request'
import { ILoginInfo } from './types/common'

export const getLoginInfo = () => {
  return request<ILoginInfo>({
    method: 'GET',
    url: '/admin/login/info'
  })
}

export const logout = () => {
  return request({
    method: 'GET',
    url: '/setting/admin/logout'
  })
}
