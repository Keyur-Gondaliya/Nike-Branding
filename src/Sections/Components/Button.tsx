import React from "react";

type Props = {
  label: string;
  iconUrl?: string;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
  fullWidth?: string;
};

const Button = ({
  label,
  iconUrl,
  backgroundColor,
  borderColor,
  textColor,
  fullWidth,
}: Props) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 font-montserrat text-lg leading-none ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor} border-2`
          : "bg-coral-red  text-white border-coral-red"
      } rounded-full ${fullWidth && "w-full"}
      `}
    >
      {label}
      {iconUrl ? (
        <img
          src={iconUrl}
          alt="btn-Icon"
          className="ml-2 rounded-full w-5 h-5"
        />
      ) : null}
    </button>
  );
};

export default Button;
