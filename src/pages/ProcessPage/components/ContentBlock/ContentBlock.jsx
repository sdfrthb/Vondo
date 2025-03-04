import React from "react";
import styles from "./ContentBlock.module.css";
import Avatar from "../../../../ui/components/Avatar/Avatar";

function ContentBlock({ title, photoList, more, children }) {
  return (
    <div className={styles.block}>
      <div className={styles.title}>
        <p className="text text_type_h3">{title}</p>
        <div className={styles.avatars}>
          {photoList.map((name, index) => (
            <React.Fragment key={name}>
              <Avatar
                person={name}
                size_l={54}
                size_m={44}
                size_s={34}
                invisible={true}
                optionalDataRole
                index={index}
              />
            </React.Fragment>
          ))}
          {more && (
            <div className={styles.more}>
              <p className="text text_type_s text_color_secondary">10+</p>
            </div>
          )}
        </div>
      </div>
      {children}
    </div>
  );
}

export default ContentBlock;
