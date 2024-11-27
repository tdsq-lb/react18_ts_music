import { memo } from "react"

interface IProps {
  children?: React.ReactNode
}

const Player: React.FC<IProps> = () => {
  return <div>Player</div>
}

export default memo(Player)
