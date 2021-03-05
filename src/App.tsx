import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '@src/store/type'
import { Preloader } from '@src/components/common/Preloader/Preloader'
import { Routes } from '@src/routes/Routes'
import { PageContainer } from '@src/components/PageContainer/PageContainer'
import { useAuthSlice } from '@src/store/ducks/auth/reducer'
import { selectAuthStatusError, selectAuthStatusLoaded } from '@src/store/ducks/auth/selectors'

export const App: FC = () => {
  const { actions } = useAuthSlice()
  const dispatch = useDispatch<AppDispatch>()
  const authError = useSelector(selectAuthStatusError)
  const authLoaded = useSelector(selectAuthStatusLoaded)

  useEffect(() => {
    dispatch(actions.getUserData())
  }, [actions, dispatch])

  if (authError) return <div>Во время загрузки произошла ошибка, пожалуйста, перезагрузите страницу</div>

  return (
    <div className="App">
      <Preloader loading={!authLoaded} center height="100vh">
        <PageContainer>
          <Routes />
        </PageContainer>
      </Preloader>
    </div>
  )
}
