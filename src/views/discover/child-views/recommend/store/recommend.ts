import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { getBanner, getHotRecommend } from "../service/recommend"
import { platform } from "os"

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
    console.log(res, "1111")
    dispatch(changeHotRecommendAction(res.result))
  }
)

interface IRecommendState {
  banner: any[]
  hotRecommends: any[]
}

const initialState: IRecommendState = {
  banner: [],
  hotRecommends: []
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
    }
  }
})

export const { changeBannersAction, changeHotRecommendAction } =
  recommendSlice.actions
export default recommendSlice.reducer
