import { useTranslation } from "react-i18next";
import cls from "./LangSwitcher.module.scss";
import { Button, ThemeButton } from "../Button/Button";
import { classNames } from "shared/lib/classNames/classNames";

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "eng" : "ru");
  };
  return (
    <Button
      theme={ThemeButton.CLEAR}
      onClick={toggle}
      className={classNames(cls.LangSwitcher, {}, [className])}
    >
      {t("Язык")}
    </Button>
  );
};
