import { Fragment } from "react";
//size = "small" | "default" | large

export const Button = ({
  type = "button",
  title,
  startIcon,
  endIcon,
  children,
  className = "",
  disabled = false,
  size = "default",
  onClick
}) => {
  return (
    <Fragment>
      <button
        type={type}
        className={`shrink-0 flex items-center justify-center whitespace-nowrap gap-x-2 rounded-full bg-primary text-darkish text-body-md font-ppmori ${
          size === "default"
            ? "px-[14px] pt-2.5 pb-2 text[20px] md:px-8 md:pt-4 md:pb-[18px] md:text-[25px]"
            : size === "small"
            ? "px-[14px] pt-2.5 pb-2"
            : "px-[14px] pt-2.5 pb-2 text[20px] md:px-8 md:pt-4 md:pb-[18px] md:text-[25px]"
        } ${className}`}
        disabled={disabled}
        onClick={onClick}
      >
        {children ? (
          children
        ) : (
          <>
            {startIcon && <span>{startIcon}</span>} {title}{" "}
            {endIcon && <span>{endIcon}</span>}
          </>
        )}
      </button>
    </Fragment>
  );
};
