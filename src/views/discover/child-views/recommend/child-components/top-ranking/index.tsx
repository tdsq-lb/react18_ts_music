import { memo } from "react"
import { TopRankingWrapper } from "./style"
import AreaHeaderV1 from "@/components/area-header-v1"
import { useAppSelector } from "@/store"
import TopRankingItem from "../top-ranking-item"

interface IProps {
  children?: React.ReactNode
}

const TopRanking: React.FC<IProps> = () => {
  const { rankings } = useAppSelector((state) => ({
    rankings: state.recommend.rankings
  }))

  return (
    <TopRankingWrapper>
      <AreaHeaderV1 title="榜单" moreLink="/discover/ranking" />
      <div className="content">
        {rankings.map((item) => {
          return (
            <TopRankingItem key={item.id} itemData={item}>
              {item.name}
            </TopRankingItem>
          )
        })}
      </div>
    </TopRankingWrapper>
  )
}

export default memo(TopRanking)
