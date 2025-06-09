import { createContext } from "react";

type UserContextType = {
  name: string;
  isLoggedIn: boolean;
};

export const UserContext = createContext<UserContextType | null>(null);

type ThemeContextType = {
  theme: "light" | "dark";
  toggle: () => void;
};

export const ThemeContextType = createContext<ThemeContextType | null>(null);
