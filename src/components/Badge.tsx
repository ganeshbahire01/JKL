import React from "react";
import PropTypes from "prop-types";
type Props = {
  text: string;
  theme: "green" | "red" | "blue";
};
const Badge = ({ text, theme = "green" }: Props) => {
  const themeClasses = {
    green: "bg-[#ECFDF3] text-[#027A48]",
    red: "bg-[#FDF2FA] text-[#C11574]",
    blue: "bg-[#F0F9FF] text-[#026AA2]",
  };

  return (
    <div
      className={`inline-flex items-center px-2.5 py-1 text-xs font-medium rounded-xl border border-transparent ${themeClasses[theme]}`}
    >
      {text}
    </div>
  );
};

export default Badge;
