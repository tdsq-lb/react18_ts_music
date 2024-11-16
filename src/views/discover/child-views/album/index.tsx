import { memo } from "react"

interface IProps {
  children?: React.ReactNode
}

const Album: React.FC<IProps> = () => {
  return <div>Album</div>
}

export default memo(Album)
