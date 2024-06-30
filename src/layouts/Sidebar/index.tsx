import { DASHBOARD, TRANSACTION } from "constant";
import { BsBookHalf } from "react-icons/bs";
import { IoMdCalendar, IoMdFolderOpen } from "react-icons/io";
import { MdDashboard, MdInsertChart, MdReceipt } from "react-icons/md";
import { RiSettings3Fill } from "react-icons/ri";
import { useLocation, useNavigate } from "react-router-dom";
import "./style.css";

const Sidebar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const onDashboardClickHanlder = () => {
    navigate(DASHBOARD());
  };

  const onTransactionClickHanlder = () => {
    navigate(TRANSACTION());
  };
  return (
    <div className="sidebar">
      <div className="monthly-budget-box">
        <div className="monthly-budget">
          {"월 예산: "}
          <span className="monthly-budget-money-view">{`${200.0}`}</span>
          {" 만원"}
        </div>
        <div className="sidebar-edit-icon-box">
          <div className="icon sidebar-edit-icon"></div>
        </div>
      </div>
      <div className="sidebar-category-box">
        <div
          className={
            pathname === "/dashboard"
              ? "sidebar-category sidebar-category-active"
              : `sidebar-category dashboard-box`
          }
          onClick={onDashboardClickHanlder}
        >
          <div className="sidebar-icon-box dashboard-icon-box">
            <MdDashboard size={17} color={"#808080"} />
          </div>
          <div className="sidebar-category-dashboard">{"대시보드"}</div>
        </div>

        <div
          className={
            pathname === "/transaction"
              ? "sidebar-category sidebar-category-active"
              : `sidebar-category transaction-box`
          }
          onClick={onTransactionClickHanlder}
        >
          <div className="sidebar-icon-box transaction-icon-box">
            <MdReceipt size={17} color={"#808080"} />
          </div>
          <div className="sidebar-category-dashboard">{"수입/지출 내역"}</div>
        </div>

        <div className="sidebar-category dashboard-box">
          <div className="sidebar-icon-box dashboard-icon-box">
            <BsBookHalf size={17} color={"#808080"} />
          </div>
          <div className="sidebar-category-dashboard">{"카드/계좌"}</div>
        </div>

        <div className="sidebar-category dashboard-box">
          <div className="sidebar-icon-box dashboard-icon-box">
            <BsBookHalf size={17} color={"#808080"} />
          </div>
          <div className="sidebar-category-dashboard">{"카테고리/태그"}</div>
        </div>

        <div className="sidebar-category dashboard-box">
          <div className="sidebar-icon-box dashboard-icon-box">
            <IoMdCalendar size={17} color={"#808080"} />
          </div>
          <div className="sidebar-category-dashboard">{"달력"}</div>
        </div>

        <div className="sidebar-category dashboard-box">
          <div className="sidebar-icon-box dashboard-icon-box">
            <MdInsertChart size={17} color={"#808080"} />
          </div>
          <div className="sidebar-category-dashboard">{"보고서"}</div>
        </div>

        <div className="sidebar-category dashboard-box">
          <div className="sidebar-icon-box dashboard-icon-box">
            <IoMdFolderOpen size={17} color={"#808080"} />
          </div>
          <div className="sidebar-category-dashboard">{"분류별 보고서"}</div>
        </div>

        <div className="sidebar-category dashboard-box">
          <div className="sidebar-icon-box dashboard-icon-box">
            <IoMdFolderOpen size={17} color={"#808080"} />
          </div>
          <div className="sidebar-category-dashboard">{"태그별 보고서"}</div>
        </div>

        <div className="sidebar-category dashboard-box">
          <div className="sidebar-icon-box dashboard-icon-box">
            <RiSettings3Fill size={17} color={"#808080"} />
          </div>
          <div className="sidebar-category-dashboard">{"설정"}</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
