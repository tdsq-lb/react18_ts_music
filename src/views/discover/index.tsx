import { memo, Suspense } from "react"
import { Link, Outlet } from "react-router-dom"

interface IProps {
  children?: React.ReactNode
}

const Discover: React.FC<IProps> = () => {
  return (
    <div>
      <div>
        <Link to="/discover/recommend">推荐</Link>
        <Link to="/discover/ranking">排行榜</Link>
        <Link to="/discover/songs">歌单</Link>
        <Link to="/discover/djradio">主播电台</Link>
        <Link to="/discover/artist">歌手</Link>
        <Link to="/discover/album">新碟上架</Link>
      </div>
      {/*
        Outlet: 组件是 React Router 中用于渲染嵌套路由（子路由）内容的重要工具。
      */}
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  )
}

/**
 * memo 性能优化，父组件更新时，不重新渲染子组件
 */
export default memo(Discover)
