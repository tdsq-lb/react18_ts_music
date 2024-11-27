import { memo, useEffect, useRef, useState } from "react"
import { PlayBarWrapper, BarControl, BarPlayerInfo, BarOperator } from "./style"
import { Link } from "react-router-dom"
import { Slider } from "antd"
import { AppShallowEqual, useAppSelector } from "@/store"
import { getSongPlayUrl } from "@/utils/handle-player"

interface IProps {
  children?: React.ReactNode
}

const AppPlayerBar: React.FC<IProps> = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const audioRef = useRef<any>(null)

  const { currentSong } = useAppSelector(
    (state) => ({
      currentSong: state.player.currentSong
    }),
    AppShallowEqual
  )

  /** 组件内的副作用操作 */
  useEffect(() => {
    // 1.播放音乐
    audioRef.current!.src = getSongPlayUrl(currentSong.id)
    audioRef.current
      ?.play()
      .then(() => {
        setIsPlaying(true)
        console.log("歌曲播放成功")
      })
      .catch((err: any) => {
        setIsPlaying(false)
        console.log("歌曲播放失败:", err)
      })

    // 2.获取音乐的总时长
    setDuration(currentSong.dt)
  }, [currentSong])

  function handlePlayBtnClick() {
    isPlaying
      ? audioRef.current.pause()
      : audioRef.current.play().catch(() => setIsPlaying(false))
    setIsPlaying(!isPlaying)
  }

  /** 音乐播放的进度处理 */
  function handleTimeUpdate() {
    // 1.获取当前的播放时间
    const currentTime = audioRef.current!.currentTime

    // 2.计算当前歌曲进度
    const progress = (currentTime / duration) * 100
    setProgress(progress)
    // setCurrentTime(currentTime)
  }

  return (
    <PlayBarWrapper className="sprite_playbar">
      <div className="content wrap-v2">
        <BarControl>
          <button className="btn sprite_playbar prev"></button>
          <button
            className="btn sprite_playbar play"
            onClick={handlePlayBtnClick}
          ></button>
          <button className="btn sprite_playbar next"></button>
        </BarControl>
        <BarPlayerInfo>
          <Link to="/player">
            <img className="image" src={currentSong?.al?.picUrl} alt="" />
          </Link>
          <div className="info">
            <div className="song">
              <span className="singer-name">{currentSong?.name}</span>
              <span className="singer-name">{currentSong?.ar[0].name}</span>
            </div>
            <div className="progress">
              <Slider
                step={0.5}
                value={progress}
                tooltip={{ formatter: null }}
              />
              <div className="time">
                <span className="current">00:52</span>
                <span className="divider">/</span>
                <span className="current">00:35</span>
              </div>
            </div>
          </div>
        </BarPlayerInfo>
        <BarOperator>
          <div className="left">
            <button className="btn pip"></button>
            <button className="btn sprite_playbar favor"></button>
            <button className="btn sprite_playbar share"></button>
          </div>
          <div className="right sprite_playbar">
            <button className="btn sprite_playbar volume"></button>
            <button className="btn sprite_playbar loop"></button>
            <button className="btn sprite_playbar playlist"></button>
          </div>
        </BarOperator>
      </div>
      <audio ref={audioRef} onTimeUpdate={handleTimeUpdate} />
    </PlayBarWrapper>
  )
}

export default memo(AppPlayerBar)
