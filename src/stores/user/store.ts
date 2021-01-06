import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import UserApi from './api'

type userStateType = {
  loading: boolean
  device: string
  userInfo: {
    issueId: string
    custId: string
    name: string
    gender: string
    webAppKey: string
    custName: string
    authKcpYn: string
    birthday: string
    storeNm: string
    pass: boolean
    surveyGrpCd: string
  }
}

const initialUserState: userStateType = {
  loading: false,
  device: '',
  userInfo: {
    issueId: '',
    custId: '',
    name: '',
    gender: '',
    webAppKey: '',
    custName: '',
    authKcpYn: '',
    birthday: '',
    storeNm: '',
    pass: false,
    surveyGrpCd: ''
  }
}

// Slice Info
const name = 'user'
const initialState = Object.assign(initialUserState)

// async Thunk Api
export const fetchNotiUser = createAsyncThunk(
  `${name}/fetchUser`,
  async ({ webAppKey }: { webAppKey: string }, thunkAPI) => {
    const { data = '' } = await UserApi.getUserApi({ webAppKey })
    if (data !== '') {
      return data
    }
    return thunkAPI.rejectWithValue('error')
  }
)

// Slice
export const userStore = createSlice({
  name,
  initialState,
  reducers: {
    setDevice: (state, action: PayloadAction<{ device: string }>) => {
      state.device = action.payload.device
    }
  },
  extraReducers: {
    [fetchNotiUser.pending.type]: (state, action) => {
      state.loading = true
    },
    [fetchNotiUser.fulfilled.type]: (state, action) => {
      state.userInfo = action.payload.data
      window.sessionStorage.setItem('userInfo', JSON.stringify(state.userInfo))
      state.loading = false
    },
    [fetchNotiUser.rejected.type]: (state, action) => {
      state.userInfo = Object.assign(initialUserState.userInfo)
      state.loading = false
    }
  }
})
export const { setDevice } = userStore.actions

export default userStore.reducer
