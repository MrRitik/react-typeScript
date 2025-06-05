import { useState } from "react";
import "../CSS/User.css";
import styles from "../CSS/User.module.css";

type AuthUser = {
  name: string;
  email: string;
};
const User = () => {
  const [user, setUser] = useState<AuthUser | null>({} as AuthUser);
  const handlelogin = () => {
    setUser({
      name: "Ritik",
      email: "ritik@gamil.com",
    });
  };
  const handlelogout = () => {
    setUser(null);
  };
  const inlineStyle = {
    marginTop: "10px",
    fontSize: "18px",
    color: "#333",
  };

  return (
    <div className={styles.userContainer}>
      <button onClick={handlelogin} className="button-external">
        Login
      </button>
      <button onClick={handlelogout} className="button-external">
        Logout
      </button>

      <p style={inlineStyle}>User Name: {user?.name}</p>
      <p className={styles.userInfo}>User Email: {user?.email}</p>
    </div>
  );
};

export default User;