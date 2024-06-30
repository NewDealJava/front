import "./style.css";

const Dashboard = () => {
  const NoContent = () => {
    return (
      <div className="dashboard-content">
        <div className="dashboard-card-box">
          <div className="dashboard-card-thumnail"></div>
          <div className="dashboard-card-content">
            <p className="dashboard-card-category">Oops!</p>
            <h5>표시할 정보가 없습니다.</h5>
            <p className="dashboard-card-text">
              지금 지출 내역을 추가해보세요.
            </p>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="content-header">
      <div className="dashboard-title">
        <h2>대시보드</h2>
      </div>
      <div className="dashboard-container">
        <NoContent />
      </div>
    </div>
  );
};

export default Dashboard;
