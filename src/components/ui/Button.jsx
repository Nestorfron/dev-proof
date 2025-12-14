import clsx from "clsx";

export default function Button({
  children,
  variant = "default",
  className,
  ...props
}) {
  const styles = {
    default:
      "bg-zinc-900 text-white hover:bg-zinc-800",
    ghost:
      "hover:bg-zinc-100 text-zinc-700",
    outline:
      "border border-zinc-200 hover:bg-zinc-100",
  };

  return (
    <button
      className={clsx(
        "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition",
        styles[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
