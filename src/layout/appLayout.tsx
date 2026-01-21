import { Outlet } from "react-router-dom";
import AppFooter from "../shared/AppFooter";
import logo from "../assets/logo.png"; // <- si tu logo está en src/assets/logo.png

export default function AppLayout() {
  return (
    <div className="appShell">
      <header className="appHeader">
        <div className="appHeaderInner">
          <img className="brandLogo" src={logo} alt="Exploremos Costa Rica" />
        </div>
      </header>

      <main className="appMain">
        <Outlet />
      </main>

      <AppFooter />
    </div>
  );
}
