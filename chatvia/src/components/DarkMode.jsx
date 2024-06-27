import { BsMoon, BsSunFill } from "react-icons/bs";
import { useState } from "react";

export default function DarkMode() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      {darkMode ? (
        <BsSunFill
          onClick={toggleDarkMode}
          className="cursor-pointer text-goldYellow"
        />
      ) : (
        <BsMoon onClick={toggleDarkMode} className="cursor-pointer" />
      )}
    </>
  );
}
