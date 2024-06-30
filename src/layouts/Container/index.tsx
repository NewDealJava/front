import { AUTH } from "constant";
import Header from "layouts/Header";
import Sidebar from "layouts/Sidebar";
import { Outlet, useLocation } from "react-router-dom";

// component: 레이아웃 //
export default function Container() {
  // state: 현재 페이지  path name 상태 //
  const { pathname } = useLocation();
  // render: 레이아웃 렌더링 //
  return (
    <>
      <Header />
      {
        // App.css에 있음
      }
      <div className="App">
        {pathname !== AUTH() && <Sidebar />}
        <Outlet />
      </div>
    </>
  );
}
