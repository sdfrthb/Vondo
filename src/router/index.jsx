import { createBrowserRouter } from 'react-router-dom'
import { Helmet } from './Hemlet'
import React from 'react'
import MainPage from '../pages/MainPage/MainPage'
import NotFound404Page from '../pages/NotFound404Page/NotFound404Page'

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Helmet
        title="VONDOOOOO"
        description="Какая крутая студия"
        mainPage={true}
      >
        <MainPage />
      </Helmet>
    ),
  },
  {
    path: '*',
    element: (
      <Helmet
        title="VONDOOOOO"
        description="Какая крутая студия"
        mainPage={false}
      >
        <NotFound404Page />
      </Helmet>
    ),
  },
])
