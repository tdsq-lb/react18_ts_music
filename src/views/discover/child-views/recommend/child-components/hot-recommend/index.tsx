import { memo } from "react"
import { HotRecommendWrapper } from "./style"
import AreaHeaderV1 from "@/components/area-header-v1"
import { AppShallowEqual, useAppSelector } from "@/store"
import SongMenuItem from "@/components/song-menu-item"

interface IProps {
  children?: React.ReactNode
}

const HotRecommend: React.FC<IProps> = () => {
  const { hotRecommend } = useAppSelector(
    (state) => ({
      hotRecommend: state.recommend.hotRecommends
    }),
    AppShallowEqual
  )

  return (
    <HotRecommendWrapper>
      <AreaHeaderV1
        title="热门推荐"
        keywords={["华语", "流行", "摇滚", "民谣", "电子"]}
        moreLink="/discover/songs"
      ></AreaHeaderV1>
      <div className="recommend-list">
        {hotRecommend.map((item) => {
          return (
            <SongMenuItem key={item.id} itemData={item} />
          )
        })}
      </div>
    </HotRecommendWrapper>
  )
}

export default memo(HotRecommend)
