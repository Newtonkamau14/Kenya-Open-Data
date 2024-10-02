import React, {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from "react";
import Loading from "../components/Loading";

interface IUser {
  id: string;
  username: string;
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
    try {
      setLoading(true);

      const userString = sessionStorage.getItem("user");
      if (userString) {
        const user: IUser = JSON.parse(userString)
        dispatch({ type: "LOGIN", payload: user });
      }
      else {
        dispatch({ type: "LOGOUT", payload: null });
      }
    } catch {
      dispatch({ type: "LOGOUT", payload: null });
    } finally {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
