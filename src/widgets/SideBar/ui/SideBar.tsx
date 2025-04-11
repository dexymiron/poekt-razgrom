import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import cls from "./Sidebar.module.scss";
import { useState } from "react";
import { LangSwitcher } from "shared/ui/LangSwitcher/LangSwitcher";
import { classNames } from "shared/lib/classNames/classNames";

interface SidebarProps {
  className?: string;
}

export const SideBar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapled] = useState(false);

  const onToggle = () => {
    setCollapled((prev) => !prev);
  };
  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <button data-testid="sidebar-toggle" onClick={onToggle}>
        toggle
      </button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} />
      </div>
    </div>
  );
};
