import cx from "classnames";

interface Props {
  className?: string;
  children: React.ReactNode;
}

export default function Container({ className, children }: Props) {
  return (
    <div className={cx("max-w-screen-xl px-5 mx-auto", className)}>
      {children}
    </div>
  );
}
