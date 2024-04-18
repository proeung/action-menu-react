import React from 'react';
import { ButtonSize } from './defs';
import { useMenuVisibility } from './MenuVisibilityContext';
import { CaretDownIcon } from '../../assets/CaretDownIcon';

interface ActionMenuButtonProps {
  ariaLabel: string;
  children: React.ReactNode;
  size: ButtonSize;
  disabled?: boolean;
}

export const ActionMenuButton: React.FC<ActionMenuButtonProps> = ({
  ariaLabel,
  children,
  size = ButtonSize.Default,
  disabled = false,
}) => {
  // Consume the menu visibility context
  const { isMenuVisible, setIsMenuVisible } = useMenuVisibility();

  return (
    <button
      type="button"
      tabIndex={0}
      aria-label={ariaLabel}
      aria-haspopup="menu"
      aria-expanded={isMenuVisible}
      className={`${size === ButtonSize.Large ? 'text-[16px] p-4' : 'text-sm pl-4 pr-2 py-1'} btn bg-white border border-gray-300 rounded text-blue-100 focus:outline-none focus:ring-blue-700 focus:border-blue-700 inline-flex items-center`}
      onClick={() => setIsMenuVisible(!isMenuVisible)}
      disabled={disabled}
    >
      <span className="mr-2">
        {children}
      </span>
      <CaretDownIcon className={`${size === ButtonSize.Large ? 'w-6 h-6' : 'w-4 h-4'} text-blue-100 fill-current`} />
    </button>
  );
};