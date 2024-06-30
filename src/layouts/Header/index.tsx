import "./style.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <h1>VISUAL BANK</h1>
        <a href="/#menu=dashboard">
          <img
            src="https://dfrlippt5ud4x.cloudfront.net/web/visual_logo_beta_v3.png"
            width={160}
          />
        </a>
      </div>
    </div>
  );
};

export default Header;
