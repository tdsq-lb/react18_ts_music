import { memo } from "react"

interface IProps {
  children?: React.ReactNode
}

const Focus: React.FC<IProps> = () => {
  return <div>Focus</div>
}

export default memo(Focus)
