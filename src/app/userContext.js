
"use client";
import { createContext, useEffect, useState } from "react";
export const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const local_storage = localStorage.getItem("token");
    if (!local_storage) return;

    try {
      const parsed = JSON.parse(local_storage);
      setUserInfo(parsed?.data);
    } catch (err) {
      console.error("Failed to parse token:", err);
    }
  }, []);
  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};
