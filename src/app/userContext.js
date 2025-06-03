"use client";
import { createContext, useEffect, useState } from "react";
export const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);

  const [apiCategory2, setapiCategories2] = useState([]);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const categoryApi = `${baseUrl}/api/category-list`;
  const getCategories = async () => {
    try {
      const res = await fetch(categoryApi);
      const data = await res.json();
      setapiCategories2(data.data);
    } catch (error) {
      console.log("Error while fetching categories");
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  // useEffect(() => {
  //   if (apiCategory2.length > 0) {
  //     // console.log("Fetching categroies in context", apiCategory2);
  //   }
  // }, [apiCategory2]);

  const [loadingUser, setLoadingUser] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const token = localStorage.getItem("token");
    if (!token) {
      setLoadingUser(false);
      return;
    }

    try {
      const parsed = JSON.parse(token);

      setUserInfo(parsed);
    } catch (err) {
      console.error("Failed to parse token:", err);
    } finally {
      setLoadingUser(false);
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        userInfo,
        setUserInfo,
        apiCategory2,
        setapiCategories2,
        loadingUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
