import { classNames } from "shared/config/lib/classNames";
import cls from "./Navbar.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.navbar, {}, [])}>
      <ThemeSwitcher />
      <div className={cls.links}>
        <AppLink
          to={"/"}
          theme={AppLinkTheme.SECONDARY}
          className={cls.mainLink}
        >
          Главная
        </AppLink>
        <AppLink to={"/about"} theme={AppLinkTheme.SECONDARY}>
          О странице
        </AppLink>
      </div>
    </div>
  );
};
