import { useEffect, useState } from "react";

const SetTheme = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("1xb-theme")
      ? localStorage.getItem("1xb-theme")
      : "dim"
  );
  const allThemes = ["light", "dark", "cyberpunk", "dim", "nord"];

  useEffect(() => {
    localStorage.setItem("1xb-theme", theme);
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  const handleSelectTheme = (e) => {
    setTheme(e.target.value);
  };
  return (
    <div className="z-100 dropdown">
      <div tabIndex={0} role="button" className="m-1 btn">
        Theme
        <svg
          width="12px"
          height="12px"
          className="inline-block w-2 h-2 fill-current opacity-60"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2048 2048"
        >
          <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52"
      >
        {allThemes.map((singleTheme) => (
          <li key={singleTheme}>
            <input
              type="radio"
              name="theme-dropdown"
              className="justify-start theme-controller btn btn-sm btn-block btn-ghost"
              aria-label={singleTheme}
              value={singleTheme}
              checked={singleTheme === theme}
              onClick={handleSelectTheme}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SetTheme;
