import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "./modules/counter"
import recommenReducer from "@/views/discover/child-views/recommend/store/recommend"
import playerReducer from "@/views/player/store/player"
import {
  useSelector,
  useDispatch,
  TypedUseSelectorHook,
  shallowEqual
} from "react-redux"

const store = configureStore({
  reducer: {
    counter: counterReducer,
    recommend: recommenReducer,
    player: playerReducer
  }
})

// 导出 store 类型
type GetStateFnType = typeof store.getState
type IRootState = ReturnType<GetStateFnType>
type DispatchType = typeof store.dispatch

// TypedUseSelectorHook :: 函数签名
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector
export const useAppDispatch: () => DispatchType = useDispatch
export const AppShallowEqual = shallowEqual
// shallowEqual::在组件决定是否被渲染之前,会进行一次浅层对比如果该组件依赖的state并没有被更改,就不会进行渲染(性能优化)

export default store
