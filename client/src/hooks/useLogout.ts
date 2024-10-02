import { useState } from "react";
import axios from "axios";
import { useAuthContext } from "./useAuthContext";
import axiosInstance from "../api/axios";

export const useLogout = () => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const logout = async () => {
    try {
      const response = await axiosInstance.post("/auth/logout");

      if (response.status === 200) {
        sessionStorage.removeItem("user");
        dispatch({ type: "LOGOUT", payload: null });
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setIsLoading(false);
        const message = error.response?.data?.message || "An error occurred";
        setError(message);
      } else {
        setError("An error occurred while signing up the user");
      }
    }
  };

  return { logout, isLoading, error };
};
