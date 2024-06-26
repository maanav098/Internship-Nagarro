import { useAuth } from "../store/useAuth"

import strings from "../localization/en";

export const LogOut = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      <h1>{strings.logout}</h1>
      <button onClick={handleLogout}>{strings.logOut}</button>
    </div>
  );
};
