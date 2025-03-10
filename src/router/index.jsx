import { createBrowserRouter } from "react-router-dom";
import { Helmet } from "./Hemlet";
import React from "react";
import MainPage from "../pages/MainPage/MainPage";
import NotFound404Page from "../pages/NotFound404Page/NotFound404Page";
import ContactPage from "../pages/ContactPage/ContactPage";
import CasesPage from "../pages/CasesPage/CasesPage";
import JournalPage from "../pages/JournalPage/JournalPage";
import ProcessPage from "../pages/ProcessPage/ProcessPage";
import BriefPage from "../pages/BriefPage/BriefPage";
import SchoolPage from "../pages/SchoolPage/SchoolPage";

const baseUrl = process.env.PUBLIC_URL;
export const router = createBrowserRouter([
  {
    path: `${baseUrl}/`,
    element: (
      <Helmet
        title="Vondo - дизайн интерфейсов и не только"
        description="Помогаем крупным компаниям решать дизайн-задачи: сайты, приложения, брендинг, коммуникационный дизайн, дизайн-поддержка. Работаем по T&M и Retainer"
        mainPage={true}
        isFooter={true}
        robots={"index"}
      >
        <MainPage />
      </Helmet>
    ),
  },
  {
    path: `${baseUrl}/contacts`,
    element: (
      <Helmet
        title="Контакты студии Vondo"
        description="Ответим на вопросы, поможем составить требования, вернёмся с оценкой на следующий день"
        mainPage={false}
        isFooter={true}
        robots={"index"}
      >
        <ContactPage />
      </Helmet>
    ),
  },
  {
    path: `${baseUrl}/cases`,
    element: (
      <Helmet
        title="Кейсы агентства Vondo, портфолио"
        description="Примеры сайтов, приложений, брендинга и коммуникационного дизайна. Клиенты и видеообзоры результатов"
        mainPage={false}
        isFooter={true}
        robots={"index"}
      >
        <CasesPage />
      </Helmet>
    ),
  },
  {
    path: `${baseUrl}/journal`,
    element: (
      <Helmet
        title="Журнал Vondo — статьи о студии и хорошем дизайне"
        description="Наши мысли, выступления и полезные материалы"
        mainPage={false}
        isFooter={true}
        robots={"index"}
      >
        <JournalPage />
      </Helmet>
    ),
  },
  {
    path: `${baseUrl}/process`,
    element: (
      <Helmet
        title="Процессы студии Vondo"
        description="Как работаем с клиентами и сотрудниками. Принципы, подход, примеры артефактов."
        mainPage={false}
        isFooter={false}
        robots={"index"}
      >
        <ProcessPage />
      </Helmet>
    ),
  },
  {
    path: `${baseUrl}/brief`,
    element: (
      <Helmet
        title="Заполните бриф. Начать работу с Vondo"
        description="Заполните бриф для начала работы над дизайном сайта, приложения, брендингом или коммуникационным дизайном. Вернемся с оценкой на следующий день"
        mainPage={false}
        isFooter={false}
        robots={"index"}
      >
        <BriefPage />
      </Helmet>
    ),
  },
  {
    path: `${baseUrl}/school`,
    element: (
      <Helmet
        title=""
        description=""
        mainPage={false}
        isFooter={false}
        robots={"index"}
      >
        <SchoolPage />
      </Helmet>
    ),
  },
  {
    path: "*",
    element: (
      <Helmet
        title="Vondo - дизайн интерфейсов и не только"
        description="Помогаем крупным компаниям решать дизайн-задачи: сайты, приложения, брендинг, коммуникационный дизайн, дизайн-поддержка. Работаем по T&M и Retainer"
        mainPage={false}
        isFooter={false}
        robots={"noindex"}
      >
        <NotFound404Page />
      </Helmet>
    ),
  }
]);
