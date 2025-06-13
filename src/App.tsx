import { useState } from "react";
import Home from "./Pages/Home";
import { ThemeContextType, UserContext } from "./hooks/UseContext";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ChildA from "./components/ChildA";
import UserDetails from "./components/UserDetails";
import Layout from "./components/Layout";
import ClassFun from "./components/ClassFun";
import LifeCycle from "./components/LifeStyle";
import Event from "./components/Event";
import Form from "./Pages/Form";
import Hook from "./Pages/Hook";

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
        {
          path: "life",
          element: <LifeCycle name="Sahil" />,
        },
        {
          path: "event",
          element: <Event />,
        },
        {
          path: "Form",
          element: <Form />,
        },
        {
          path: "hook",
          element: <Hook />,
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
