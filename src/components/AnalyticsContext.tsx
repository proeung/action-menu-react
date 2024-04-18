import React, { createContext, ReactNode } from "react";

interface AnalyticsContextType {
  namespace: string;
}

export const AnalyticsContext = createContext<AnalyticsContextType>({ namespace: "" });

interface AnalyticsProviderProps {
  namespace?: string;
  children: ReactNode;
}

const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ namespace = "", children }) => {
  return (
    <AnalyticsContext.Provider value={{ namespace }}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export default AnalyticsProvider;
