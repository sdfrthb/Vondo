import React, { useEffect } from "react";
import Header from "../ui/components/Header/Header";
import Footer from "../ui/components/Footer/Footer";
import FormSection from "../ui/components/FormSection/FormSection";

export const Helmet = ({
  title,
  description,
  robots,
  mainPage,
  isFooter,
  children,
}) => {
  useEffect(() => {
    const meta = document.createElement("meta");
    meta.name = "description";
    meta.content = description;
    document.head.appendChild(meta);
    const metaRobots = document.createElement('meta');
        metaRobots.name = "robots";
        metaRobots.content = robots;
        document.head.appendChild(metaRobots);
    document.title = title;

    return () => {
      document.head.removeChild(metaRobots);
      document.head.removeChild(meta);
  };
  }, [description, title]);

  return (
    <>
      <Header mainPage={mainPage} />
      {children}
      {isFooter && (
        <>
          <FormSection />
          <Footer />
        </>
      )}
    </>
  );
};
