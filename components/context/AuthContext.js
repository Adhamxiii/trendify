"use client";

import { createContext, useState, useContext } from "react";

import { useRouter } from "next/navigation";
import { account } from "@/lib/appwrite";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      await account.createEmailPasswordSession(
        formData.email,
        formData.password
      );
      router.push("/");
    } catch (error) {
      setErrorMessage(error.message || "Login failed");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      await account.create(
        ID.unique(),
        formData.email,
        formData.password,
        formData.name
      );
      setIsLogin(true);
      router.push("/");
    } catch (error) {
      setErrorMessage(error.message || "Registration failed");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        loading,
        setLoading,
        showPassword,
        setShowPassword,
        isLogin,
        setIsLogin,
        errorMessage,
        setErrorMessage,
        formData,
        setFormData,
        handleLogin,
        handleRegister,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);
