import { memo, useEffect, useState } from "react"
import { useAppDispatch } from "@/store"
import {
  fetchBannerDataAction,
  fetchHotRecommendAction,
  fetchNewAlbumAction,
  fetchTopRankingAction,
  fetchSttleSingersAction
} from "./store/recommend"
import TopBanner from "./child-components/top-banner"
import { RecommendWrapper } from "./style"
import HotRecommend from "./child-components/hot-recommend"
import NewAlbum from "./child-components/new-album"
import TopRanking from "./child-components/top-ranking"
import UserLogin from "./child-components/user-login"
import SettleSinger from "./child-components/settle-singer"
import HotAnchor from "./child-components/hot-anchor"

interface IProps {
  children?: React.ReactNode
}

const Recommend: React.FC<IProps> = () => {
  const dispatch = useAppDispatch()

  // 测试 axios
  useEffect(() => {
    dispatch(fetchBannerDataAction())
    dispatch(fetchHotRecommendAction())
    dispatch(fetchNewAlbumAction())
    dispatch(fetchTopRankingAction())
    dispatch(fetchSttleSingersAction())
  }, [])

  return (
    <RecommendWrapper>
      <TopBanner></TopBanner>
      <div className="content wrap-v2">
        <div className="left">
          <HotRecommend />
          <NewAlbum />
          <TopRanking />
        </div>
        <div className="right">
          <UserLogin />
          <SettleSinger />
          <HotAnchor />
        </div>
      </div>
    </RecommendWrapper>
  )
}

export default memo(Recommend)
