import vcIcon from "../../../../../images/icon/social/vc.svg";
import tgIcon from "../../../../../images/icon/social/tg.svg";
import icon360 from "../../../../../images/icon/social/360.svg";
import styles from "./News.module.css";
import { useMediaQuery } from "react-responsive";
import Avatar from "../../../../../ui/components/Avatar/Avatar";
import React from "react";
import teamData from "../../../../../utils/teamData";

function News({ title, icon, date, url, authors }) {
  const isMobile = useMediaQuery({ maxWidth: 480 });
  const isDesktop = useMediaQuery({ minWidth: 1025 });

  return (
    <a href={url} target="_blank" rel="noreferrer" className={`${styles.news}`}>
      <div className={styles.news_data}>
        <div className={`${styles.title}`}>
          <span
            className={`text text_type_m text_color_primary ${styles.under} spacing`}
          >
            {title}
          </span>
        </div>
        {!isMobile && (
          <div className={styles.authors}>
            {authors.map((name) => (
              <React.Fragment key={name}>
                <Avatar
                  person={name}
                  size_l={34}
                  size_m={24}
                  invisible={isDesktop ? true : false}
                />
                {!isDesktop && (
                  <p
                    className={`${styles.name} text text_type_xs text_color_primary`}
                  >
                    {teamData(name).name}
                  </p>
                )}
              </React.Fragment>
            ))}
          </div>
        )}
        {isMobile && (
          <div className={styles.info}>
            <div className={styles.authors}>
              {authors.map((name) => (
                <React.Fragment key={name}>
                  <Avatar
                    person={name}
                    size_s={24}
                    invisible={false}
                  />
                  {!isDesktop && (
                    <p
                      className={`${styles.name} text text_type_xs text_color_primary`}
                    >
                      {teamData(name).name}
                    </p>
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className={styles.wrapper}>
              <p className={`text text_type_xs text_color_primary`}>{date}</p>
              <div
                style={{
                  backgroundImage: `url(${
                    icon === "vc" ? vcIcon : icon === "tg" ? tgIcon : icon360
                  })`,
                }}
                className={styles.icon}
              ></div>
            </div>
          </div>
        )}
      </div>
      {!isMobile && (
        <div className={styles.wrapper}>
          <p className={`text text_type_xs text_color_primary`}>{date}</p>
          <div
            style={{
              backgroundImage: `url(${
                icon === "vc" ? vcIcon : icon === "tg" ? tgIcon : icon360
              })`,
            }}
            className={styles.icon}
          ></div>
        </div>
      )}
    </a>
  );
}

export default News;
