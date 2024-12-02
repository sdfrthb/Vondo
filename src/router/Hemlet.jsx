import React, { useEffect } from 'react'
import Header from '../ui/components/Header/Header';

export const Helmet = ({ title, description, mainPage, children }) => {
  useEffect(() => {
    const meta = document.createElement('meta');
    meta.name = 'description';
    meta.content = description
    document.getElementsByTagName('head')[0].appendChild(meta)
    document.title = title
  }, [description, title])

  return (
    <>
      <Header mainPage={mainPage}/>
      {children}
    </>
  )
}
