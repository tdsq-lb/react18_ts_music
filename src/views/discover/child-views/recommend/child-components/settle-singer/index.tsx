import { memo } from "react"
import { SettleSingerWrapper } from "./style"
import AreaHeaderV2 from "@/components/area-header-v2"
import { useAppSelector } from "@/store"
import { getImageSize } from "@/utils/format"

interface IProps {
  children?: React.ReactNode
}

const SettleSinger: React.FC<IProps> = () => {
  const { settlesSingers } = useAppSelector((state) => ({
    settlesSingers: state.recommend.settleSingers
  }))

  return (
    <SettleSingerWrapper>
      <AreaHeaderV2
        title="入驻歌手"
        moreText="查看更多&gt;"
        moreLink="#/discover/artist"
      />
      <div className="artists">
        {settlesSingers.map((item) => {
          return (
            <a href="#/discover/artist" key={item.id} className="item">
              <img src={getImageSize(item.picUrl, 62)} alt="" />
              <div className="info">
                <div className="name">{item.name}</div>
                <div className="alias">{item.alias}</div>
              </div>
            </a>
          )
        })}
      </div>
      <div className="apply-for">
        <a href="#">申请成为网易音乐人</a>
      </div>
    </SettleSingerWrapper>
  )
}

export default memo(SettleSinger)
