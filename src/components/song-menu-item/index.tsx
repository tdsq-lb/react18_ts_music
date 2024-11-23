import { memo } from "react"
import { SongMenuItemWrapper } from "./style"
import { getImageSize, formatCount } from "@/utils/format"

interface IProps {
  children?: React.ReactNode
  itemData?: any
}

const SongMenuItem: React.FC<IProps> = (props) => {
  const { itemData } = props
  return (
    <SongMenuItemWrapper>
      <div className="top">
        <img src={getImageSize(itemData.picUrl, 140)} alt="" />
        <div className="cover sprite_cover">
          <div className="info sprite_cover">
            <span>
              <i className="sprite_icon headset"></i>
              <span className="count">{formatCount(itemData.playCount)}</span>
            </span>
            <i className="sprite_icon play"></i>
          </div>
        </div>
      </div>
      <div className="bottom">{itemData.name}</div>
    </SongMenuItemWrapper>
  )
}

export default memo(SongMenuItem)
