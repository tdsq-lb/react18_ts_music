import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "./modules/counter"
import {
  useSelector,
  useDispatch,
  TypedUseSelectorHook,
  shallowEqual
} from "react-redux"

const store = configureStore({
  reducer: {
    counter: counterReducer
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

export default store
