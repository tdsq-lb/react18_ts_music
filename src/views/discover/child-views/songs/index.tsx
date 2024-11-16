import { memo } from "react"

interface IProps {
  children?: React.ReactNode
}

const Songs: React.FC<IProps> = () => {
  return <div>Songs</div>
}

export default memo(Songs)
