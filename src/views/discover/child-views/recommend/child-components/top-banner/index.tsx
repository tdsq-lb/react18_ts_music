import { useAppSelector, AppShallowEqual } from "@/store"
import { memo, useRef, ElementRef, useState } from "react"
import { Carousel } from "antd"
import { BannerControl, BannerRight, BannerrLeft, BannerWrapper } from "./style"
import classNames from "classnames"

interface IProps {
  children?: React.ReactNode
}

const TopBanner: React.FC<IProps> = () => {
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null)

  const [currentIndex, setCurrentIndex] = useState(0)

  const { banner } = useAppSelector(
    (state) => ({
      banner: state.recommend.banner
    }),
    AppShallowEqual
  )

  function handleAfterChange(current: number) {
    setCurrentIndex(current)
  }

  function handleBeforeChange() {
    setCurrentIndex(-1)
  }

  // 获取背景图片
  let bgImageUrl
  if (currentIndex >= 0 && banner.length > 0) {
    bgImageUrl = banner[currentIndex].imageUrl + "?imageView&blur=40x20"
  }

  return (
    <div>
      <BannerWrapper
        style={{ background: `url(${bgImageUrl}) center center /6000px ` }}
      >
        <div className="banner wrap-v2">
          <BannerrLeft>
            <Carousel
              autoplay
              dots={false}
              effect="fade"
              ref={bannerRef}
              afterChange={handleAfterChange}
              beforeChange={handleBeforeChange}
            >
              {banner.map((item) => {
                return (
                  <div className="banner-item" key={item.targetId}>
                    <img
                      className="image"
                      src={item.imageUrl}
                      alt={item.typeTitle}
                    ></img>
                  </div>
                )
              })}
            </Carousel>
            <ul className="dots">
              {banner.map((item, index) => {
                return (
                  <li key={item.imageUrl}>
                    <span
                      className={classNames("item", {
                        active: index === currentIndex
                      })}
                    ></span>
                  </li>
                )
              })}
            </ul>
          </BannerrLeft>
          <BannerRight></BannerRight>
          <BannerControl>
            <button
              className="btn left"
              onClick={() => bannerRef.current?.prev()}
            >
              {" "}
            </button>
            <button
              className="btn right"
              onClick={() => bannerRef.current?.next()}
            >
              {" "}
            </button>
          </BannerControl>
        </div>
      </BannerWrapper>
    </div>
  )
}

export default memo(TopBanner)
