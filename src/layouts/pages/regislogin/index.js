import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { UserContextProvider } from "layouts/pages/regislogin/context/userContext";

import Auth from "layouts/pages/regislogin/components/auth";
import Dashboard from "layouts/pages/regislogin/components/dashboard";
import { useUserContext } from "layouts/pages/regislogin/context/userContext";

export default function App() {
  const { user, loading, error } = useUserContext();

  return (
    <UserContextProvider>
      <div className="App">
        {error && <p className="error">{error}</p>}
        {loading ? <h2>Loading...</h2> : <> {user ? <Dashboard /> : <Auth />} </>}
      </div>
    </UserContextProvider>

  );
}



