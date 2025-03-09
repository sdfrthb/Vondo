import styles from "./FileInput.module.css";
import { ReactComponent as LinkIcon } from "../../../../images/icon/link.svg";
import { useMediaQuery } from "react-responsive";
import { useRef, useState } from "react";

function FileInput() {
  const isMobile = useMediaQuery({ maxWidth: 480 });
  const [fileName, setFileName] = useState("Прикрепить файл");
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(truncateString(file.name, isMobile ? 30 : 18));
    } else {
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
      setFileName("Прикрепить файл");
    }
  };

  const truncateString = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    }
    return str;
  };

  const handleRemoveFile = () => {
    setFileName("Прикрепить файл");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };
  return (
    <div className={styles.btn_wrapper}>
      <label className={styles.input_file}>
        <div className={styles.btn}>
          <input
            type="file"
            name="file"
            onChange={handleFileChange}
            ref={fileInputRef}
          />
          {fileName === "Прикрепить файл" && (
            <LinkIcon className={`${styles.icon}`} />
          )}
          <span
            className={`text text_type_${
              isMobile ? "xs" : "m"
            } text_color_primary ${styles.input_file_btn}`}
          >
            {fileName}
          </span>
        </div>
        {fileName === "Прикрепить файл" && (
        <span
          className={`text text_type_xs text_color_secondary ${styles.input_file_text}`}
        >
          Размер файла до 10 Мб
        </span> )}
      </label>
      {fileName !== "Прикрепить файл" && (
        <button onClick={handleRemoveFile} className={`text text_type_xs text_color_secondary ${styles.remove_button}`}>
          Удалить файл
        </button>
      )}
    </div>
  );
}

export default FileInput;
