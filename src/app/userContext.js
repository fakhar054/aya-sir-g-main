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

  //code for user profile
  const [userDetails, setUserDetails] = useState(null);
  const token = userInfo?.api_token;
  // console.log("token is ", token);
  const base = process.env.NEXT_PUBLIC_BASE_URL;
  const url_profile = `${base}/api/update-profile`;
  const profileUrl =
    url_profile || "https://staging.hylanmaterialsupply.com/api/update-profile";
  // const apiUrl = `${baseUrl}/api/update-profile`;

  const fetchData = async () => {
    try {
      const res = await fetch(profileUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({}),
      });

      const data = await res.json();
      setUserDetails(data.data);
    } catch (error) {
      console.error("Error posting token:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [userInfo]);
  // useEffect(() => {}, [userDetails]);

  return (
    <UserContext.Provider
      value={{
        userInfo,
        setUserInfo,
        apiCategory2,
        setapiCategories2,
        loadingUser,
        userDetails,
        setUserDetails,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
