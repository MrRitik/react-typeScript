import { useContext } from "react"
import { ThemeContextType, UserContext } from "../hooks/UseContext"


const ChildC = () => {
    const user = useContext(UserContext)
    const themeContext = useContext(ThemeContextType)
  return (
    <div
      style={{
        background: themeContext?.theme === "dark" ? "#222" : "#fff",
        color: themeContext?.theme === "dark" ? "#fff" : "#000",
        padding: "10px",
        height: "100vh"
      }}
    >
      <p>{user?.isLoggedIn ? `Hello ${user.name}` : "Login First"}</p>
      <button onClick={themeContext?.toggle}>Toggle Theme</button>
    </div>
  );
}

export default ChildC
