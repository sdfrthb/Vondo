import styles from "./FileInput.module.css";
import { ReactComponent as LinkIcon } from "../../../../images/icon/link.svg";
import { useMediaQuery } from "react-responsive";
import { useRef, useState } from "react";

function FileInput({ onChange }) {
  const isMobile = useMediaQuery({ maxWidth: 480 });
  const [fileName, setFileName] = useState("Прикрепить файл");
  const [error, setError] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        setError(true);
        setFileName("Прикрепить файл");
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
        onChange({ target: { name: "file", value: "", files: [] } });
      } else {
        setError(false);
        setFileName(truncateString(file.name, isMobile ? 30 : 18));
        onChange(event);
      }
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
    setError(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    onChange({ target: { name: "file", value: "", files: [] } });
  };

  return (
    <div className={styles.btn_wrapper}>
      <label className={styles.input_file}>
        <div className={styles.btn}>
          <input
            type="file"
            name="file"
            ref={fileInputRef}
            onChange={handleFileChange}
          />
          {fileName === "Прикрепить файл" && (
            <LinkIcon className={`${styles.icon}`} />
          )}
          <span
            className={`text text_type_m text_color_primary ${
              styles.input_file_btn
            } ${fileName !== "Прикрепить файл" ? styles.input_file_name : ""}`}
          >
            {fileName}
          </span>
        </div>
        {fileName === "Прикрепить файл" && !error && (
          <span
            className={`text text_type_xs text_color_secondary ${styles.input_file_text}`}
          >
            Размер файла до 10 Мб
          </span>
        )}
        {error && (
          <p className={`text text_type_xs text_color_error ${styles.input_file_text}`}>
            Файл слишком большой, максимальный размер 10 Мб
          </p>
        )}
      </label>
      {fileName !== "Прикрепить файл" && (
        <button
          onClick={handleRemoveFile}
          className={`text text_type_xs ${styles.remove_button}`}
        >
          Удалить файл
        </button>
      )}
    </div>
  );
}

export default FileInput;
