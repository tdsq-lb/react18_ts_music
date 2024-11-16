import { Suspense } from "react"
import { useRoutes, Link } from "react-router-dom"
import routes from "@/router"
import { shallowEqual } from "react-redux"
import { useAppSelector } from "@/store"

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
    shallowEqual
  )
  return (
    <div className="App">
      <div className="nav">
        <Link to="/discover">发现音乐</Link>
        <Link to="/main">我的音乐</Link>
        <Link to="/focus">关注</Link>
        <Link to="/download">下载客户端</Link>
      </div>
      {/*
        Suspense: 文名可以理解为 暂停or悬停
        在路由懒加载中配合 Lazy 组件一起使用
      */}
      <h2>当前计数：{count}</h2>
      <h2>当前消息：{message}</h2>
      <Suspense fallback="loading...">
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
    </div>
  )
}

export default App
