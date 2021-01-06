import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchNotiUser, setDevice } from 'stores/user/store'
import UserState from 'stores/user/state'
import Routers from 'router'
import Loading from 'components/Loding'
import Recycle from 'helper/recycle'

const App: React.FunctionComponent = () => {
  const dispatch = useDispatch()
  const webAppKey = '40tGJcgZ1u1uZ4gCdqoZj76i3HFHIZdszMiOPSifx5htOn+Wwf24VqhOu2myNpCs-71793'
  const loading = useSelector(UserState.loading)
  useEffect(() => {
    dispatch(fetchNotiUser({ webAppKey }))
    dispatch(setDevice({ device: Recycle.getDevice() }))
  }, [dispatch])
  return (
    <div>
      <Routers />
      {loading ? <Loading /> : ''}
    </div>
  )
}

export default App
