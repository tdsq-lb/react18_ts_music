import { memo } from "react"
import { AreaHeaderV2Wrapper } from "./style"

interface IProps {
  children?: React.ReactNode
  title?: string
  moreText?: string
  moreLink?: string
}

const AreaHeaderV2: React.FC<IProps> = (props) => {
  const { title = "默认标题", moreText, moreLink } = props
  return (
    <AreaHeaderV2Wrapper>
      <h3 className="title">{title}</h3>
      {moreText && moreLink && <a href={moreLink}>{moreText}</a>}
    </AreaHeaderV2Wrapper>
  )
}

export default memo(AreaHeaderV2)
