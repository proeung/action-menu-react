import React from 'react';

interface ActionMenuItemProps {
  label: string;
}

export const ActionMenuItem: React.FC<ActionMenuItemProps> = ({ label }) => (
  <button
    role="menuitem"
    className="block py-2 px-3 text-left w-full hover:bg-gray-100"
  >
    {label}
  </button>
);
