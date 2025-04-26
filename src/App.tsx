import { Outlet } from "react-router";
import Logo from "./components/Logo/Logo";

function App() {
  return (
    <>
      <Logo />
      <Outlet />
    </>
  );
}

export default App;
