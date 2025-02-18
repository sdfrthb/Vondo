import { createBrowserRouter } from "react-router-dom";
import { Helmet } from "./Hemlet";
import React from "react";
import MainPage from "../pages/MainPage/MainPage";
import NotFound404Page from "../pages/NotFound404Page/NotFound404Page";
import ContactPage from "../pages/ContactPage/ContactPage";
import CasesPage from "../pages/CasesPage/CasesPage";
import JournalPage from "../pages/JournalPage/JournalPage";
import ProcessPage from "../pages/ProcessPage/ProcessPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Helmet
        title="VONDOOOOO"
        description="Какая крутая студия"
        mainPage={true}
        isFooter={true}
      >
        <MainPage />
      </Helmet>
    ),
  },
  {
    path: "/contacts",
    element: (
      <Helmet
        title="VONDOOOOO"
        description="Какая крутая студия"
        mainPage={false}
        isFooter={true}
      >
        <ContactPage />
      </Helmet>
    ),
  },
  {
    path: "/cases",
    element: (
      <Helmet
        title="VONDOOOOO"
        description="Какая крутая студия"
        mainPage={false}
        isFooter={true}
      >
        <CasesPage />
      </Helmet>
    ),
  },
  {
    path: "/journal",
    element: (
      <Helmet
        title="VONDOOOOO"
        description="Какая крутая студия"
        mainPage={false}
        isFooter={true}
      >
        <JournalPage />
      </Helmet>
    ),
  },
  {
    path: "/process",
    element: (
      <Helmet
        title="VONDOOOOO"
        description="Какая крутая студия"
        mainPage={false}
        isFooter={true}
      >
        <ProcessPage />
      </Helmet>
    ),
  },
  {
    path: "*",
    element: (
      <Helmet
        title="VONDOOOOO"
        description="Какая крутая студия"
        mainPage={false}
        isFooter={false}
      >
        <NotFound404Page />
      </Helmet>
    ),
  },
]);
