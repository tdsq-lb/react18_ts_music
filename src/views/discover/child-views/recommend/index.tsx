import { memo, useEffect, useState } from "react"
import hyRequest from "@/service"

interface IProps {
  children?: React.ReactNode
}

const Recommend: React.FC<IProps> = () => {
  const [count, setCount] = useState(0)
  // 测试 axios
  useEffect(() => {
    hyRequest.get({ url: "/banner" }).then((res) => {
      console.log(res)
    })
  }, [])

  return <div>Recommend</div>
}

export default memo(Recommend)
