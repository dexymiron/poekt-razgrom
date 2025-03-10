import { Link } from "react-router-dom";
import "./styles/index.scss";
import { classNames } from "shared/config/lib/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "./providers/router";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE THEME</button>
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>О странице</Link>
      <AppRouter />
    </div>
  );
};

export default App;
