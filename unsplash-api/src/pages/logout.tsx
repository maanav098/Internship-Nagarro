import { useAuth } from "../store/useAuth"

export const LogOut = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      <h1>This is a page for Logout</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};
