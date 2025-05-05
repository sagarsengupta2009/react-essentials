import React from "react";

const TabButton = ({ children, isSelected, ...props }) => {
  return (
    <li>
      <button className={isSelected ? "active" : null} {...props}>
        {children}
      </button>
    </li>
  );
};

export default TabButton;
