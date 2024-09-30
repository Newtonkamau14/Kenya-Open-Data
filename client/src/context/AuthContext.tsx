import React, { createContext, ReactNode, useEffect, useReducer, useState } from "react";
import axios from "../api/axios";
import Loading from "../components/Loading";

interface IUser {
  username: string;
  userId: string;
}

interface AuthState {
  user: IUser | null;
}

type AuthAction =
  | { type: "LOGIN"; payload: IUser }
  | { type: "LOGOUT"; payload: null };

interface AuthContextType {
  state: AuthState;
  dispatch: React.Dispatch<AuthAction>;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const authReducer = (
  state: AuthState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case "LOGIN":
      return {
        user: action.payload,
      };
    case "LOGOUT":
      return {
        user: null,
      };
    default:
      return state;
  }
};

export const AuthContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(authReducer, { user: null });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkSession = async () => {
      try {
        setLoading(true)
        const response = await axios.get("/auth/check-session");

        if (response.status === 200 && response.data) {
          const user = response.data;
          dispatch({ type: "LOGIN", payload: user });
        } else {
          console.error("Unexpected response:", response);
          dispatch({ type: "LOGOUT", payload: null });
        }
        
      } catch (error) {
        dispatch({ type: "LOGOUT", payload: null });
      }
      finally {
        setLoading(false)
      }
    };
    checkSession();
  }, []);


  if(loading) {
    return (<Loading/>)
  }
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
