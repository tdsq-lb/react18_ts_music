import { memo, Suspense } from "react"
import { Link, Outlet } from "react-router-dom"
import NavBar from "./child-components/nav-bar"

interface IProps {
  children?: React.ReactNode
}

const Discover: React.FC<IProps> = () => {
  return (
    <div>
      <div>
        <NavBar></NavBar>
      </div>
      <Suspense>
        {/*
        Outlet: 组件是 React Router 中用于渲染嵌套路由（子路由）内容的重要工具。
      */}
        <Outlet />
      </Suspense>
    </div>
  )
}

/**
 * memo 性能优化，父组件更新时，不重新渲染子组件
 */
export default memo(Discover)
