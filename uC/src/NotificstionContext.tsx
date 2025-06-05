import React, { createContext, useContext, useState } from "react";
import type { ReactNode } from "react"

type Notification = {
  id: number;
  type: string;
  message: string;
};

type NotificationContextType = {
  addNotification: (type: string, message: string) => void;
};

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error("useNotification must be used within a NotificationProvider");
  }
  return context;
};

type NotificationProviderProps = {
  children: ReactNode;
};

export const NotificationProvider = ({ children }: NotificationProviderProps) => {
  const [notification, setNotification] = useState<Notification[]>([]);

  const addNotification = (type: string, message: string) => {
    const id = Date.now();
    setNotification(prev => [...prev, { id, type, message }]);

    setTimeout(() => {
      setNotification(prev => prev.filter(n => n.id !== id));
    }, 3000);
  };

  return (
    <NotificationContext.Provider value={{ addNotification }}>
      {children}
      <div className="notification-container">
        {notification.map(n => (
          <div key={n.id} className={`notification ${n.type}`}>
            {n.message}
          </div>
        ))}
      </div>
    </NotificationContext.Provider>
  );
};
