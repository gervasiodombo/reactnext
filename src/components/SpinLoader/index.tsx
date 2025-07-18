import clsx from "clsx";

type SpinLoaderProps = {
  className?: string;
};

export default function SpinLoader({ className = "" }: SpinLoaderProps) {
  const classes = clsx(
    "flex",
    "items-center",
    "justify-center",
    "h-40",
    className
  );

  return (
    <div className={classes}>
      <div
        className={clsx(
          "w-10",
          "h-10",
          "border-4",
          "border-t-transparent",
          "border-slate-900",
          "rounded-full",
          "animate-spin"
        )}
      ></div>
    </div>
  );
}
