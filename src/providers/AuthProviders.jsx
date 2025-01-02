import { createContext } from "react";
import { useState } from "react";
import { getAuth } from "firebase/auth";
import { app } from "../fisebase/firebase.config";

const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProviders = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const authInfo = {
    user,
    loading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
