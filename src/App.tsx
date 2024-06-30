import { AUTH, DASHBOARD, MAIN, TRANSACTION } from "constant";
import Container from "layouts/Container";
import Auth from "pages/Auth";
import Dashboard from "pages/Dashboard";
import Main from "pages/Main";
import Transaction from "pages/transaction";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route element={<Container />}>
        <Route path={AUTH()} element={<Auth />} />
        <Route path={MAIN()} element={<Main />} />
        <Route path={DASHBOARD()} element={<Dashboard />} />
        <Route path={TRANSACTION()} element={<Transaction />} />
      </Route>
    </Routes>
  );
}

export default App;
