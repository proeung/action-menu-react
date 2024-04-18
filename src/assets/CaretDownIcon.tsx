import React from "react";

interface CaretDownIconProps {
  className?: string;
}

export const CaretDownIcon: React.FC<CaretDownIconProps> = ({
  className = '',
}) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.3443 7.96191L19.7585 9.37613L13.9602 15.1744C12.8668 16.2679 11.0939 16.2679 10.0004 15.1744L4.20215 9.37613L5.61636 7.96191L11.4146 13.7602C11.7271 14.0726 12.2336 14.0726 12.546 13.7602L18.3443 7.96191Z"
        fill="black"
      />
      <mask
        id="mask0_518_164"
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x="4"
        y="7"
        width="16"
        height="9"
      >
        <path
          d="M18.3443 7.96191L19.7585 9.37613L13.9602 15.1744C12.8668 16.2679 11.0939 16.2679 10.0004 15.1744L4.20215 9.37613L5.61636 7.96191L11.4146 13.7602C11.7271 14.0726 12.2336 14.0726 12.546 13.7602L18.3443 7.96191Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_518_164)">
        <rect width="24" height="24" fill="#3A63F9" />
      </g>
    </svg>
  );
};

