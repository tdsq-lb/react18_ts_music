import { memo } from "react"

interface IProps {
  children?: React.ReactNode
}

const Download: React.FC<IProps> = () => {
  return <div>Download</div>
}

export default memo(Download)
