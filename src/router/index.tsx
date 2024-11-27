import { lazy } from "react"
import { RouteObject, Navigate } from "react-router-dom"

/**
 * lazy 懒加载
 */
const Discover = lazy(() => import("@/views/discover"))
const Album = lazy(() => import("@/views/discover/child-views/album"))
const Artist = lazy(() => import("@/views/discover/child-views/artist"))
const Djradio = lazy(() => import("@/views/discover/child-views/djradio"))
const Ranking = lazy(() => import("@/views/discover/child-views/ranking"))
const Recommend = lazy(() => import("@/views/discover/child-views/recommend"))
const Songs = lazy(() => import("@/views/discover/child-views/songs"))

const Mine = lazy(() => import("@/views/mine"))
const Focus = lazy(() => import("@/views/focus"))
const Download = lazy(() => import("@/views/download"))
const Player = lazy(() => import("@/views/player"))

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="/discover" />
  },
  {
    path: "/discover",
    element: <Discover />,
    children: [
      {
        path: "/discover",
        element: <Navigate to="/discover/recommend" />
      },
      {
        path: "/discover/album",
        element: <Album />
      },
      {
        path: "/discover/artist",
        element: <Artist />
      },
      {
        path: "/discover/djradio",
        element: <Djradio />
      },
      {
        path: "/discover/ranking",
        element: <Ranking />
      },
      {
        path: "/discover/recommend",
        element: <Recommend />
      },
      {
        path: "/discover/songs",
        element: <Songs />
      }
    ]
  },
  {
    path: "/mine",
    element: <Mine />
  },
  {
    path: "/focus",
    element: <Focus />
  },
  {
    path: "/download",
    element: <Download />
  },
  {
    path: "/player",
    element: <Player />
  }
]

export default routes
