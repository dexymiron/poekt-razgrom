import { classNames } from "shared/config/lib/classNames/classNames";
import cls from "./PageLoader.module.scss";
import { Loader } from "../Loader/Loader";

interface PageLoaderProps {
  className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => {
  return (
    <div className={classNames(cls.Loader, {}, [])}>
      <Loader />
    </div>
  );
};
