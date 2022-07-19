import request from '@/utils/request'
import { Menu } from './types/home'

export const getMenus = () => {
  return request<Menu[]>({
    method: 'GET',
    url: '/menusList'
  })
}
