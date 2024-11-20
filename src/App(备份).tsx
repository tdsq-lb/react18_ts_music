import { Suspense } from "react"
import { useRoutes } from "react-router-dom"
import routes from "@/router"
import { useAppSelector, useAppDispatch, AppShallowEqual } from "@/store"
import { changeMessageAction } from "@/store/modules/counter"
import AppHeader from "./components/app-header"
import AppFooter from "./components/app-footer"

function App() {
  /**
   * useSelector ::用于从 Redux store 中选择所需的数据
   * shallowEqual::在组件决定是否被渲染之前,会进行一次浅层对比如果该组件依赖的state并没有被更改,就不会进行渲染(性能优化)
   */
  const { count, message } = useAppSelector(
    (state) => ({
      count: state.counter.count,
      message: state.counter.message
    }),
    AppShallowEqual
  )

  const dispatch = useAppDispatch()
  const handleChangeMessage = () => {
    dispatch(changeMessageAction("hhhh"))
  }

  return (
    <div className="App">
      <AppHeader />
      <Suspense fallback="loading...">
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
      <AppFooter />
      {/*
        Suspense: 文名可以理解为 暂停or悬停
        在路由懒加载中配合 Lazy 组件一起使用
      */}
      <h2>当前计数：{count}</h2>
      <h2>当前消息：{message}</h2>
      <button onClick={handleChangeMessage}>修改 Message</button>
    </div>
  )
}

export default App
