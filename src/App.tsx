import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '@src/store/type'
import { initializeApp } from '@src/store/ducks/app/thunks'
import { Preloader } from '@src/components/common/Preloader/Preloader'
import { selectApp, selectAppStatusError } from '@src/store/ducks/app/selectors'
import { Routes } from '@src/routes/Routes'

export const App: FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const appError = useSelector(selectAppStatusError)
  const app = useSelector(selectApp)

  useEffect(() => {
    dispatch(initializeApp())
  }, [dispatch])

  if (appError) return <div>Во время загрузки произошла ошибка, пожалуйста, перезагрузите страницу</div>

  return (
    <div className="App">
      <Preloader loading={!app.initialized} center height="100vh">
        <Routes />
      </Preloader>
    </div>
  )
}
