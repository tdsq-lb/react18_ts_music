import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import {
  getArtistList,
  getBanner,
  getHotRecommend,
  getNewAlbum,
  getPlaylistDetail
} from "../service/recommend"
import { platform } from "os"
import { log } from "console"

export const fetchBannerDataAction = createAsyncThunk(
  "banner",
  async (arg, { dispatch }) => {
    const res = await getBanner()
    dispatch(changeBannersAction(res.banners))
  }
)

export const fetchHotRecommendAction = createAsyncThunk(
  "hotrecommend",
  async (arg, { dispatch }) => {
    const res = await getHotRecommend(8)
    dispatch(changeHotRecommendAction(res.result))
  }
)

export const fetchNewAlbumAction = createAsyncThunk(
  "newAlbums",
  async (arg, { dispatch }) => {
    const res = await getNewAlbum(10)
    dispatch(changeNewAlbumAction(res.albums))
  }
)

const rankingIds = [19723756, 3779629, 2884035]
export const fetchTopRankingAction = createAsyncThunk(
  "rankingData",
  (arg, { dispatch }) => {
    const promises: Promise<any>[] = []
    for (const id of rankingIds) {
      promises.push(getPlaylistDetail(id))
    }
    Promise.all(promises).then((res) => {
      const playlists = res.map((item) => item.playlist)
      // console.log(playlists)
      dispatch(changeRankingsAction(playlists))
    })
  }
)

export const fetchSttleSingersAction = createAsyncThunk(
  "sttleSingers",
  async (arg, { dispatch }) => {
    const res = await getArtistList(5)
    // console.log(res, 11)
    dispatch(changesSttleSingersAction(res.artists))
  }
)

interface IRecommendState {
  banner: any[]
  hotRecommends: any[]
  newAlbums: any[]
  rankings: any[]
  settleSingers: any[]
}

const initialState: IRecommendState = {
  banner: [],
  hotRecommends: [],
  newAlbums: [],
  rankings: [],
  settleSingers: []
}

const recommendSlice = createSlice({
  name: "recommend",
  initialState,
  reducers: {
    changeBannersAction(state, { payload }) {
      state.banner = payload
    },
    changeHotRecommendAction(state, { payload }) {
      state.hotRecommends = payload
    },
    changeNewAlbumAction(state, { payload }) {
      state.newAlbums = payload
    },
    changeRankingsAction(state, { payload }) {
      state.rankings = payload
    },
    changesSttleSingersAction(state, { payload }) {
      state.settleSingers = payload
    }
  }
})

export const {
  changeBannersAction,
  changeHotRecommendAction,
  changeNewAlbumAction,
  changeRankingsAction,
  changesSttleSingersAction
} = recommendSlice.actions
export default recommendSlice.reducer
