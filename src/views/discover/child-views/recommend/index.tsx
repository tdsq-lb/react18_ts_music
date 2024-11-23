import { memo, useEffect, useState } from "react"
import { useAppDispatch } from "@/store"
import {
  fetchBannerDataAction,
  fetchHotRecommendAction
} from "./store/recommend"
import TopBanner from "./child-components/top-banner"
import { RecommendWrapper } from "./style"
import HotRecommend from "./child-components/hot-recommend"

interface IProps {
  children?: React.ReactNode
}

const Recommend: React.FC<IProps> = () => {
  const dispatch = useAppDispatch()

  // 测试 axios
  useEffect(() => {
    dispatch(fetchBannerDataAction())
    dispatch(fetchHotRecommendAction())
  }, [])

  return (
    <RecommendWrapper>
      <TopBanner></TopBanner>
      <div className="content wrap-v2">
        <div className="left">
          <HotRecommend />
        </div>
        <div className="right"></div>
      </div>
    </RecommendWrapper>
  )
}

export default memo(Recommend)
