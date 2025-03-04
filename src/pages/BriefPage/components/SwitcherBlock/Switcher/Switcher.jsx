import { useState } from "react";
import styles from "./Switcher.module.css";

function Switcher({name}) {
  const [selectedOption, setSelectedOption] = useState('no'); // Установим активную опцию по умолчанию

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };
  return (
    <div>
      <label>
        <input
          type="radio"
          name={name}
          value="no"
          id="one-column"
          checked={selectedOption === 'no'}
          onChange={handleOptionChange}
          className={styles.radio_input}

        />
      </label>
      <label for="one-column">
        <input
          type="radio"
          name={name}
          value="yes"
          id="one-column"
          checked={selectedOption === 'yes'}
          onChange={handleOptionChange}
          className={styles.radio_input}
        />
      </label>
    </div>
  );
}

export default Switcher;
