import { useState } from "react";
import Home from "./components/Home";
import { ThemeContextType, UserContext } from "./hooks/UseContext";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ChildA from "./components/ChildA";
import UserDetails from "./components/UserDetails";
import Layout from "./components/Layout";
import ClassFun from "./components/ClassFun";

const App = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggle = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const Userdata = {
    name: "Ritik",
    isLoggedIn: true,
  };

  const ThemeData = {
    theme,
    toggle,
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "context",
          element: <ChildA />,
        },
        {
          path: "class",
          element: <ClassFun text="This is class funcation" />,
        },
        { path: "user/:id", element: <UserDetails /> },
      ],
    },
  ]);
  return (
    <>
      <UserContext.Provider value={Userdata}>
        <ThemeContextType.Provider value={ThemeData}>
          <RouterProvider router={router} />
        </ThemeContextType.Provider>
      </UserContext.Provider>
    </>
  );
};

export default App;
