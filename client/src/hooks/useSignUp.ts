import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import axiosInstance from "../api/axios";
import axios from "axios";

export const useSignUp = () => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const signUp = async (
    username: string,
    email: string,
    password: string,
    phonenumber: string
  ) => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await axiosInstance.post("/auth/signup", {
        username,
        email,
        password,
        phonenumber,
      });

      if (response.status === 201) {
        //save user to local storage
        localStorage.setItem("user", JSON.stringify(response));

        //update the auth context
        dispatch({ type: "LOGIN", payload: response.data });
        setIsLoading(false);
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
  return { signUp, isLoading, error };
};
