import Auth from "./components/auth";
import Dashboard from "./components/dashboard";
import { useUserContext } from "./context/userContext";

function ppT() {
  const { user, loading, error } = useUserContext();

  return (
    <div className="App">
      {error && <p className="error">{error}</p>}
      {loading ? <h2>Loading...</h2> : <> {user ? <Dashboard /> : <Auth />} </>}
    </div>
  );
}

export default ppT;
