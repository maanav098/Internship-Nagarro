import { useAuth } from "../store/useAuth"
import en from "../localization/en";

export const LogOut = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      <h1>{en.logOut}</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};
