import { memo } from "react"
import { NewAlbumsItemWrapper } from "./style"
import { getImageSize } from "@/utils/format"

interface IProps {
  children?: React.ReactNode
  itemData?: any
}

const NewAlbumItem: React.FC<IProps> = (props) => {
  const { itemData } = props
  return (
    <NewAlbumsItemWrapper>
      <div className="top">
        <img src={getImageSize(itemData.picUrl, 100)} alt="" />
        <a href="" className="sprite_cover cover"></a>
      </div>
      <div className="bottom">
        <div className="name">{itemData.name}</div>
        <div className="artist">{itemData.artist.name}</div>
      </div>
    </NewAlbumsItemWrapper>
  )
}

export default memo(NewAlbumItem)
