import { createBrowserRouter } from 'react-router-dom'
import { Helmet } from './Hemlet'
import React from 'react'
import MainPage from '../pages/MainPage/MainPage'
import NotFound404Page from '../pages/NotFound404Page/NotFound404Page'
import ContactPage from '../pages/ContactPage/ContactPage'


export const router = createBrowserRouter([
  {
    path: '/Vondo',
    element: (
      <Helmet
        title="VONDOOOOO"
        description="Какая крутая студия"
        mainPage={true}
        isFooter={true}
        animation={true}
      >
        <MainPage />
      </Helmet>
    ),
  },
  {
    path: '/Vondo/contacts',
    element: (
      <Helmet
        title="VONDOOOOO"
        description="Какая крутая студия"
        mainPage={false}
        isFooter={true}
        animation={true}
      >
        <ContactPage />
      </Helmet>
    ),
  },
  {
    path: '/Vondo/*',
    element: (
      <Helmet
        title="VONDOOOOO"
        description="Какая крутая студия"
        mainPage={false}
        isFooter={false}
        animation={false}
      >
        <NotFound404Page />
      </Helmet>
    ),
  },
])
