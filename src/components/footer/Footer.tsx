import { useContext } from "react";
import "./footer.scss";
import { MainContext, Theme } from "../../context/Maincontext";

export default function Footer() {
  const { theme, updateTheme } = useContext(MainContext);

  function handleThemeCheck(isChecked: boolean) {
    updateTheme(isChecked ? Theme.DARK : Theme.LIGHT);
  }

  return (
    <div className="content">
      <div className="info"></div>
      <div className="actions">
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            checked={theme === Theme.DARK}
            value={Theme.DARK}
            id="flexSwitchCheckDefault"
            onChange={(e) => handleThemeCheck(e.target.checked)}
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            Dark mode
          </label>
        </div>
      </div>
    </div>
  );
}
