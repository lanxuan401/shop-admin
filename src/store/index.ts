import { createStore, Store, useStore as baseUseStore } from 'vuex'
import { InjectionKey } from 'vue'
import { IUserInfo } from '@/api/types/common'
import { getItem, setItem } from '@/utils/storage'
import { USER, MENU } from '@/utils/constants'

const state = {
  isCollapse: false,
  // user: null as ({ token: string } & IUserInfo) | null,
  user: getItem<{ token: string } & IUserInfo>(USER),
  menus: getItem(MENU)
  // menus: [] as IMenu[]
}

export type State = typeof state

// 定义 injection key
export const key: InjectionKey<Store<State>> = Symbol('store')

// 创建一个新的 store 实例
export const store = createStore<State>({
  state,
  mutations: {
    setIsCollapse (state, payload) {
      state.isCollapse = payload
    },

    setUser (state, payload) {
      state.user = payload
      setItem(USER, state.user)
    },

    setMenus (state, payload) {
      state.menus = payload
      setItem(MENU, payload)
    }
  }
})

// 定义自己的 `useStore` 组合式函数
export function useStore () {
  return baseUseStore(key)
}
