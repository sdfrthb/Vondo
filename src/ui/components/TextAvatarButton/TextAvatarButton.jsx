import { useMediaQuery } from "react-responsive";
import styles from "./TextAvatarButton.module.css";

function TextAvatarButton({ text, url, type, gif }) {
  const isDesktop = useMediaQuery({ minWidth: 1025 });
  const gifUrl = `url(${gif})`;
  console.log(gifUrl)
  return (
    <a
      className={`text text_color_primary ${
        styles[
          `btn${
            type === "big" && isDesktop
              ? "_big"
              : type === "small" && isDesktop
              ? "_small"
              : ""
          }`
        ]
      }`}
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      <div
        style={{
          backgroundImage: gifUrl,
        }}
        className={
          styles[
            `photo${
              type === "big" && isDesktop
                ? "_big"
                : type === "small" && isDesktop
                ? "_small"
                : ""
            }`
          ]
        }
      ></div>
      <p
        className={`text text_type_${
          isDesktop && type !== "small" ? "m" : "xs"
        } ${styles.content}`}
      >
        {text}
      </p>
    </a>
  );
}

export default TextAvatarButton;
