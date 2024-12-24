import React, { useEffect } from "react";
import Header from "../ui/components/Header/Header";
import Footer from "../ui/components/Footer/Footer";
import FormSection from "../ui/components/FormSection/FormSection";

export const Helmet = ({
  title,
  description,
  mainPage,
  isFooter,
  animation,
  children,
}) => {
  useEffect(() => {
    const meta = document.createElement("meta");
    meta.name = "description";
    meta.content = description;
    document.getElementsByTagName("head")[0].appendChild(meta);
    document.title = title;
  }, [description, title]);

  return (
    <>
      <Header mainPage={mainPage} animation={animation}/>
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
