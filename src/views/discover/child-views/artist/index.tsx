import { memo } from "react"

interface IProps {
  children?: React.ReactNode
}

const Artist: React.FC<IProps> = () => {
  return <div>Artist</div>
}

export default memo(Artist)
