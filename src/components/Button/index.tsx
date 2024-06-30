import "./style.css";

export const KakaoButton = () => {
  return (
    <div className="button kakao-button">
      <div className="icon-wrapper">
        <div className={"oauth-icon kakao-icon"}></div>
      </div>
      <div>{"카카오 계정으로 로그인"}</div>
      <div></div>
    </div>
  );
};

export const GoogleButton = () => {
  return (
    <div className="button google-button">
      <div className="icon-wrapper">
        <div className={"oauth-icon google-icon"}></div>
      </div>
      <div>{"구글 계정으로 로그인"}</div>
      <div></div>
    </div>
  );
};
