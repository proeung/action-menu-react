import React, { useState, useEffect, useRef, useContext } from 'react';
import { MenuVisibilityContext } from './MenuVisibilityContext';
import { AnalyticsContext } from '../AnalyticsContext';

interface ActionMenuProps {
  analyticsId: string;
  children: React.ReactNode;
}

export const ActionMenu: React.FC<ActionMenuProps> = ({
  analyticsId,
  children,
}) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Deconstruct namespace object
  const { namespace } = useContext(AnalyticsContext);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        buttonRef.current &&
        buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuVisible((prev) => !prev);
      } else if (!menuRef.current?.contains(event.target as Node)) {
        setIsMenuVisible(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" || event.key === "Esc") {
        setIsMenuVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <MenuVisibilityContext.Provider value={{ isMenuVisible, setIsMenuVisible }}>
      <div
        ref={menuRef}
        className="action-menu relative inline-block"
        data-analytics-id={`${namespace}:${analyticsId}`}
      >
        {children}
      </div>
    </MenuVisibilityContext.Provider>
  );
};
