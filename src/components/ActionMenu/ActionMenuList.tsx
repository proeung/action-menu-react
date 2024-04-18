import React from 'react';
import { ButtonSize } from './defs';
import { useMenuVisibility } from './MenuVisibilityContext';

interface ActionMenuListProps {
  children: React.ReactNode;
  size: ButtonSize;
}

export const ActionMenuList: React.FC<ActionMenuListProps> = ({ children, size = 'default' }) => {
  const { isMenuVisible } = useMenuVisibility();

  return (
    <div
      role="menu"
      className={`${isMenuVisible ? 'visible' : 'hidden'} ${size === ButtonSize.Large ? 'text-base translate-y-[68px]' : 'text-sm translate-y-[40px]'} p-1 bg-white border border-gray-100 rounded w-28 absolute translate-x-0 m-0 inset-[0px_auto_auto_0px] z-10`}
    >
      {children}
    </div>
  );
};
