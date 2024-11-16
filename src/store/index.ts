import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "./modules/counter"
import { useSelector, TypedUseSelectorHook } from "react-redux"

const store = configureStore({
  reducer: {
    counter: counterReducer
  }
})

// 导出 store 类型
type GetStateFnType = typeof store.getState
export type IRootState = ReturnType<GetStateFnType>

// TypedUseSelectorHook :: 函数签名
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector

export default store
