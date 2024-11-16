import { memo } from "react"

interface IProps {
  children?: React.ReactNode
}

const Ranking: React.FC<IProps> = () => {
  return <div>Ranking</div>
}

export default memo(Ranking)
