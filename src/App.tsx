import React, { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@src/store/type'
import { initializeApp } from '@src/store/ducks/app/thunks'

export const App: FC = () => {
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(initializeApp())
  }, [dispatch])

  return <div className="App">app</div>
}
