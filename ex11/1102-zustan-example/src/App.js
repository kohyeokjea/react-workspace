// import { create, useStore } from "zustand";
import Content from "./Content";
import useStore from "./hooks/useStore";
import ThemeToggle from "./ThemeToggle";

export default function App() {
  const { theme } = useStore();
  return (
    <div>
      <h1>Zustand Theme Example</h1>
      <ThemeToggle />
      <Content />
    </div>
  );
}