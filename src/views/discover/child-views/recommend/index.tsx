import { memo } from "react"

interface IProps {
  children?: React.ReactNode
}

const Recommend: React.FC<IProps> = () => {
  return <div>Recommend</div>
}

export default memo(Recommend)
