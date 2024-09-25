import React, { createContext, ReactNode, useEffect, useReducer } from "react";

interface IUser {
  email: ReactNode;
  username: string
  token: string
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

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
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

  useEffect(() => {
      const user = JSON.parse(localStorage.getItem('user'))
      if(user){
        dispatch({type: "LOGIN",payload:user})
      }
  },[])


  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};