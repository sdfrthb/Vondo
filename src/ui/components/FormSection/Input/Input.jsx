import { useState } from "react";
import styles from "./Input.module.css";
import { useMask } from "@react-input/mask";

function Input({ label, name, type, placeholder, onChange, children }) {
  const [mask, setMask] = useState(false);
  const [useRussianMask, setUseRussianMask] = useState(false);

  const russianMaskRef = useMask({
    mask: "+7 (___) ___-__-__",
    replacement: { _: /\d/ },
  });

  const foreignMaskRef = useMask({
    mask: "+______________________",
    replacement: { _: /\d/ },
  });

  const handleChange = (e) => {
    let val = e.target.value
    if (val === "7" || val === "8") {
      val = "+7";
    } else if (val === "9") {
      val = "+7 (9"
    } else if (val && /[^0-9]$/.test(val) && val !=='+') {
      val = val.replace(/[^0-9]$/, '');
      e.target.value = val;
    }
    if (val && !val.startsWith("+") ) {
      val = "+" + val; }
    val ? setMask(true) : setMask(false)
    if (val.startsWith("+7")) {
      if (!useRussianMask) setUseRussianMask(true);
    } else {
      if (useRussianMask) setUseRussianMask(false);
    }
    e.target.value = val;
    if (onChange) {
      onChange({ target: { name: "number", value: val } });
    }
  };

  const transformValue = (val) => {
    let cleaned = val.trim();
    if (cleaned.startsWith("+")) {
      cleaned = "+" + cleaned.slice(1).replace(/\D/g, "");
    } else {
      cleaned = cleaned.replace(/\D/g, "");
      if (cleaned.length === 10) {
        cleaned = "8" + cleaned
      }
    }
    if (
      cleaned.startsWith("+7") ||
      cleaned.startsWith("7") ||
      cleaned.startsWith("8")
    ) {
      let digits = cleaned.startsWith("+7")
        ? cleaned.slice(2)
        : cleaned.slice(1);

      const part1 = digits.substring(0, 3);
      const part2 = digits.substring(3, 6);
      const part3 = digits.substring(6, 8);
      const part4 = digits.substring(8, 10);

      let formatted = "+7";
      if (part1) {
        formatted += " (" + part1;
        if (part1.length === 3) {
          formatted += ")";
        }
      }
      if (part2) {
        formatted += " " + part2;
      }
      if (part3) {
        formatted += part3 ? "-" + part3 : "";
      }
      if (part4) {
        formatted += part4 ? "-" + part4 : "";
      }
      return formatted;
    } else {
      return cleaned.startsWith("+") ? cleaned : "+" + cleaned;
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("Text");
    const newVal = transformValue(pasteData);

    e.target.value = newVal;
    if (onChange) {
      onChange({ target: { name: "number", value: newVal } });
    }

    if (newVal.startsWith("+7")) {
      setUseRussianMask(true);
    } else {
      setUseRussianMask(false);
    }
  };
  return (
    <div className={styles.wrapper}>
      {children && !children.props.className.includes("text_color_error") && children}
      <label htmlFor={name} className={`text text_type_xs`}>
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          className={`text text_type_m ${styles.textarea}`}
        ></textarea>
      ) : (
        <input
          id={name}
          name={name}
          placeholder={placeholder}
          className={`text text_type_m ${styles.input}`}
          autoComplete="off"
          onChange={name === "number" ? handleChange : onChange}
          onPaste={name === "number" ? handlePaste : undefined}
          type={name === "number" ? "tel" : "text"}
          ref={
            name === "number"
              ? mask
                ? useRussianMask
                  ? russianMaskRef
                  : foreignMaskRef
                : null
              : null
          }
        ></input>
      )}
      {children && children.props.className.includes("text_color_error") && children}
    </div>
  );
}

export default Input;
