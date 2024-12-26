import { createBrowserRouter, createHashRouter } from 'react-router-dom'
import { Helmet } from './Hemlet'
import React from 'react'
import MainPage from '../pages/MainPage/MainPage'
import NotFound404Page from '../pages/NotFound404Page/NotFound404Page'
import ContactPage from '../pages/ContactPage/ContactPage'
import CasesPage from '../pages/CasesPage/CasesPage'


export const router = createHashRouter([
  {
    path: '/',
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
    path: '/contacts',
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
    path: '/cases',
    element: (
      <Helmet
        title="VONDOOOOO"
        description="Какая крутая студия"
        mainPage={false}
        isFooter={true}
        animation={false}
      >
        <CasesPage />
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
        isFooter={false}
        animation={false}
      >
        <NotFound404Page />
      </Helmet>
    ),
  },
])
