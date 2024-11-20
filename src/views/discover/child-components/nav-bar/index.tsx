import { memo } from "react"
import { NavWrapper } from "./style"
import { NavLink } from "react-router-dom"

import { discoverMenu } from "@/assets/data/local-data"

interface IProps {
  children?: React.ReactNode
}

const Navbar: React.FC<IProps> = () => {
  return (
    <NavWrapper>
      <div className="wrap-v1">
        <div className="nav">
          {discoverMenu.map((item) => {
            return (
              <div className="item" key={item.title}>
                <NavLink to={item.link}>{item.title}</NavLink>
              </div>
            )
          })}
        </div>
      </div>
    </NavWrapper>
  )
}

export default memo(Navbar)
