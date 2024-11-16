import { memo } from "react"

interface IProps {
  children?: React.ReactNode
}

const Mine: React.FC<IProps> = () => {
  return <div>Mine</div>
}

export default memo(Mine)
