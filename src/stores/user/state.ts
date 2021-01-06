import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../index'

const userInfo = (state: RootState) => state.userStore.userInfo
const loading = (state: RootState) => state.userStore.loading

const UserState = {
  userInfo: createSelector(userInfo, state => {
    return state
  }),
  loading: createSelector(loading, state => {
    return state
  })
}

export default UserState
