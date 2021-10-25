import { useEffect } from "react";
import { useDarkMode } from "usehooks-ts";
import Navbar from "../components/Navbar/Nav";

export default function Home() {
  const { isDarkMode, toggle, enable, disable } = useDarkMode();

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className="bg-white dark:bg-gray-900">
        <Navbar
          isDarkMode={isDarkMode}
          toggle={toggle}
          enable={enable}
          disable={disable}
        />
        <button onClick={toggle}>Toggle</button>
        <button onClick={enable}>Enable</button>
        <button onClick={disable}>Disable</button>
      </div>
    </div>
  );
}
