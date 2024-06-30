import { GoogleButton, KakaoButton } from "components/Button";
import Input from "components/Input";
import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from "react";
import { Address, useDaumPostcodePopup } from "react-daum-postcode";
import "./style.css";

const Auth = () => {
  const [view, setView] = useState<"SIGN-IN" | "SIGN-UP">("SIGN-IN");

  const SignInCard = () => {
    // 이메일 참조
    const emailRef = useRef<HTMLInputElement | null>(null);
    // 비밀번호 참조
    const passwordRef = useRef<HTMLInputElement | null>(null);

    // 이메일 상태
    const [email, setEmail] = useState<string>("");
    // 비밀번호 상태
    const [password, setPassword] = useState<string>("");
    //  비밀번호 타입 상태
    const [passwordType, setPasswordType] = useState<"password" | "text">(
      "password"
    );
    // 비밀번호 버튼 아이콘 상태
    const [passwordButtonIcon, setPasswordButtonIcon] = useState<
      "eye-light-off-icon" | "eye-light-on-icon"
    >("eye-light-off-icon");
    // 에러 상태
    const [error, setError] = useState<boolean>(false);

    const SignUpOnClickHandler = () => {
      setView("SIGN-UP");
    };

    // 이메일 변경 이벤트
    const onEmailChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      setError(false);
      const { value } = e.target;
      setEmail(value);
    };

    // 비밀번호 변경 이벤트
    const onPasswordChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      setError(false);
      const { value } = e.target;
      setPassword(value);
    };

    // 로그인 버튼 클릭 이벤트
    const onSignInButtonClickHandler = () => {
      // const requestBody: SignInRequestDto = { email, password };
      // signInRequest(requestBody).then(signInResponse);
      alert("로그인 버튼 클릭 이벤트 처리");
    };

    // 비밀번호 버튼 클릭 이벤트
    const onPasswordButtonClickHandler = () => {
      if (passwordType === "text") {
        setPasswordType("password");
        setPasswordButtonIcon("eye-light-off-icon");
      } else {
        setPasswordType("text");
        setPasswordButtonIcon("eye-light-on-icon");
      }
    };

    // 이메일 인풋 키 다운 이벤트
    const onEmailKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key !== "Enter") return;
      if (!passwordRef.current) return;
      passwordRef.current.focus();
    };

    // 비밀번호 인풋 키 다운 이벤트
    const onPasswordKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key !== "Enter") return;
      onSignInButtonClickHandler();
    };
    return (
      <div className="auth-card-box sign-in">
        <KakaoButton />
        <GoogleButton />
        <p>또는</p>
        <Input
          ref={emailRef}
          type={"text"}
          error={error}
          placeholder={"이메일주소"}
          value={email}
          onChange={onEmailChangeHandler}
          onKeyDown={onEmailKeyDownHandler}
        />
        <Input
          ref={passwordRef}
          type={passwordType}
          error={error}
          placeholder={"비밀번호"}
          value={password}
          icon={passwordButtonIcon}
          onButtonClick={onPasswordButtonClickHandler}
          onChange={onPasswordChangeHandler}
          onKeyDown={onPasswordKeyDownHandler}
        />
        {error && (
          <div className="auth-sign-in-error-box">
            <div className="auth-sign-in-error-message">
              {
                "이메일 또는 비밀번호를 잘못 입력했습니다.\n입력하신 내용을 다시 확인해주세요."
              }
            </div>
          </div>
        )}
        <div className="login-button" onClick={onSignInButtonClickHandler}>
          {"로그인"}
        </div>
        <div className="sign-text" onClick={SignUpOnClickHandler}>
          회원가입
        </div>
      </div>
    );
  };

  const SignUpCard = () => {
    // 이메일 참조
    const emailRef = useRef<HTMLInputElement | null>(null);

    // 비밀번호 참조
    const passwordRef = useRef<HTMLInputElement | null>(null);

    // 비밀번호 확인 참조
    const passwordCheckRef = useRef<HTMLInputElement | null>(null);

    // 닉네임 참조
    const nicknameRef = useRef<HTMLInputElement | null>(null);

    // 휴대전화 참조
    const telNumberRef = useRef<HTMLInputElement | null>(null);

    // 주소 참조
    const addressRef = useRef<HTMLInputElement | null>(null);

    // 페이지 번호 상태
    const [page, setPage] = useState<1 | 2>(1);

    // 이메일 상태
    const [email, setEmail] = useState<string>("");

    // 비밀번호 상태
    const [password, setPassword] = useState<string>("");

    // 비밀번호 확인 상태
    const [passwordCheck, setPasswordCheck] = useState<string>("");

    // 닉네임 상태
    const [nickname, setNickname] = useState<string>("");

    // 휴대전화 상태
    const [telNumber, setTelNumber] = useState<string>("");

    // 주소 상태
    const [address, setAddress] = useState<string>("");

    // 비밀번호 타입 상태
    const [passwordType, setPasswordType] = useState<"password" | "text">(
      "password"
    );

    // 비밀번호 체크 타입 상태
    const [passwordCheckType, setPasswordCheckType] = useState<
      "password" | "text"
    >("password");

    // 이메일 에러 상태
    const [isEmailError, setEmailError] = useState<boolean>(false);

    // 비밀번호 에러 상태
    const [isPasswordError, setPasswordError] = useState<boolean>(false);

    // 비밀번호 확인 에러 상태
    const [isPasswordCheckError, setPasswordCheckError] =
      useState<boolean>(false);

    // 닉네임 에러 상태
    const [isNicknameError, setNicknameError] = useState<boolean>(false);

    // 휴대전화 에러 상태
    const [isTelNumberError, setTelNumberError] = useState<boolean>(false);

    // 주소 에러 상태
    const [isAddressError, setAddressError] = useState<boolean>(false);

    // 닉네임 에러 메세지 상태
    const [nicknameErrorMessage, setNicknameErrorMessage] =
      useState<string>("");

    // 휴대전화 에러 메세지 상태
    const [telNumberErrorMessage, setTelNumberErrorMessage] =
      useState<string>("");

    // 주소 에러 메세지 상태
    const [addressErrorMessage, setAddressErrorMessage] = useState<string>("");

    // 이메일 에러 메세지 상태
    const [emailErrorMessage, setEmailErrorMessage] = useState<string>("");

    // 비밀번호 에러 메세지 상태
    const [passwordErrorMessage, setPasswordErrorMessage] =
      useState<string>("");

    // 비밀번호 확인 에러 메세지 상태
    const [passwordCheckErrorMessage, setPasswordCheckErrorMessage] =
      useState<string>("");

    // 비밀번호 버튼 아이콘 상태
    const [passwordButtonIcon, setPasswordButtonIcon] = useState<
      "eye-light-off-icon" | "eye-light-on-icon"
    >("eye-light-off-icon");

    // 비밀번호 확인 버튼 아이콘 상태
    const [passwordCheckButtonIcon, setPasswordCheckButtonIcon] = useState<
      "eye-light-off-icon" | "eye-light-on-icon"
    >("eye-light-off-icon");

    // 다음 주소 검색 팝업 오픈 함수
    const open = useDaumPostcodePopup();

    // 이메일 변경 이벤트
    const onEmailChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setEmail(value);
      setEmailError(false);
      setEmailErrorMessage("");
    };

    // 비밀번호 변경 이벤트 처리
    const onPasswordChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setPassword(value);
      setPasswordError(false);
      setPasswordErrorMessage("");
    };

    // 비밀번호 확인 변경 이벤트
    const onPasswordCheckChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setPasswordCheck(value);
      setPasswordCheckError(false);
      setPasswordCheckErrorMessage("");
    };

    // 닉네임 변경 이벤트 처리
    const onNicknameChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setNickname(value);
      setNicknameError(false);
      setNicknameErrorMessage("");
    };

    // 휴대전화 변경 이벤트
    const onTelNumberChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setTelNumber(value);
      setTelNumberError(false);
      setTelNumberErrorMessage("");
    };

    // 주소 변경 이벤트
    const onAddressChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setAddress(value);
      setAddressError(false);
      setAddressErrorMessage("");
    };

    // 비밀번호 버튼 클릭 이벤트
    const onPasswordButtonClickHandler = () => {
      if (passwordButtonIcon === "eye-light-off-icon") {
        setPasswordButtonIcon("eye-light-on-icon");
        setPasswordType("text");
      } else {
        setPasswordButtonIcon("eye-light-off-icon");
        setPasswordType("password");
      }
    };

    // 비밀번호 확인 버튼 클릭 이벤트
    const onPasswordCheckButtonClickHandler = () => {
      if (passwordCheckButtonIcon === "eye-light-off-icon") {
        setPasswordCheckButtonIcon("eye-light-on-icon");
        setPasswordCheckType("text");
      } else {
        setPasswordCheckButtonIcon("eye-light-off-icon");
        setPasswordCheckType("password");
      }
    };

    // 주소 버튼 클릭 이벤트
    const onAddressButtonClickHandler = () => {
      open({ onComplete });
    };

    // 다음 버튼 클릭 이벤트
    const onNextButtonClickHandler = () => {
      const emailPattern = /^[a-zA-Z0-9]*@([-.]?[a-zA-Z0-9])*\.[a-zA-Z]{2,4}$/;
      const isEmailPattern = emailPattern.test(email);
      if (!isEmailPattern) {
        setEmailError(true);
        setEmailErrorMessage("이메일 주소 형식이 맞지 않습니다.");
      }

      const isCheckedPassword = password.trim().length >= 8;
      if (!isCheckedPassword) {
        setPasswordError(true);
        setPasswordErrorMessage("비밀번호는 8자 이상 입력해주세요.");
      }

      const isEqualPassword = password === passwordCheck;
      if (!isEqualPassword) {
        setPasswordCheckError(true);
        setPasswordCheckErrorMessage("비밀번호가 일치하지 않습니다.");
      }
      if (!isEmailPattern || !isCheckedPassword || !isEqualPassword) return;
      setPage(2);
    };

    // 회원가입 버튼 클릭 이벤트 처리
    const onSignUpButtonClickHandler = () => {
      const emailPattern = /^[a-zA-Z0-9]*@([-.]?[a-zA-Z0-9])*\.[a-zA-Z]{2,4}$/;
      const isEmailPattern = emailPattern.test(email);
      if (!isEmailPattern) {
        setEmailError(true);
        setEmailErrorMessage("이메일 주소 형식이 맞지 않습니다.");
      }

      const isCheckedPassword = password.trim().length >= 8;
      if (!isCheckedPassword) {
        setPasswordError(true);
        setPasswordErrorMessage("비밀번호는 8자 이상 입력해주세요.");
      }

      const isEqualPassword = password === passwordCheck;
      if (!isEqualPassword) {
        setPasswordCheckError(true);
        setPasswordCheckErrorMessage("비밀번호가 일치하지 않습니다.");
      }
      if (!isEmailPattern || !isCheckedPassword || !isEqualPassword) {
        setPage(1);
        return;
      }
      const hasNickname = nickname.trim().length !== 0;
      if (!hasNickname) {
        setNicknameError(true);
        setNicknameErrorMessage("닉네임을 입력해주세요.");
      }
      const telNumberPattern = /^(010)-[0-9]{4}-[0-9]{4}$/;
      const isTelNumberPattern = telNumberPattern.test(telNumber);
      if (!isTelNumberPattern) {
        setTelNumberError(true);
        setTelNumberErrorMessage("휴대전화 번호를 입력해주세요.");
      }
      const hasAddress = address.trim().length !== 0;
      if (!hasAddress) {
        setAddressError(true);
        setAddressErrorMessage("주소를 입력해주세요.");
      }

      if (!hasNickname || !isTelNumberPattern) return;
      //  const requestBody: SignUpRequestDto = {
      //    email,
      //    password,
      //    nickname,
      //    telNumber,
      //    address,
      //  };
      //  signUpRequest(requestBody).then(signInResponse);
      alert("회원가입 버튼 클릭 이벤트 처리");
    };

    // event handler: 로그인 링크 클릭 이벤트 처리 //
    const SignInOnClickHandler = () => {
      setView("SIGN-IN");
    };

    // event handler: 이메일 키 다운 이벤트 처리 //
    const onEmailKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key !== "Enter") return;
      if (!passwordRef.current) return;
      passwordRef.current.focus();
    };

    // event handler: 비밀번호 키 다운 이벤트 처리 //
    const onPasswordKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key !== "Enter") return;
      if (!passwordCheckRef.current) return;
      passwordCheckRef.current.focus();
    };

    // event handler: 비밀번호 확인 키 다운 이벤트 처리 //
    const onPasswordCheckKeyDownHandler = (
      e: KeyboardEvent<HTMLInputElement>
    ) => {
      if (e.key !== "Enter") return;
      onNextButtonClickHandler();
    };

    // event handler: 닉네임 키 다운 이벤트 처리 //
    const onNicknameKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key !== "Enter") return;
      if (!telNumberRef.current) return;
      telNumberRef.current.focus();
    };

    // event handler: 휴대 전화번호 키 다운 이벤트 처리 //
    const onTelNumberKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key !== "Enter") return;
      onAddressButtonClickHandler();
    };
    // event handler: 주소 키 다운 이벤트 처리 //

    const onAddressKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key !== "Enter") return;
      onSignUpButtonClickHandler();
    };

    // event handler: 다음 주소 검색 완료 이벤트 처리 //
    const onComplete = (data: Address) => {
      const { address } = data;
      setAddress(address);
      setAddressError(false);
      setAddressErrorMessage("");
    };

    // effect: 페이지가 변경될 때 마다 실행될 함수 //
    useEffect(() => {
      if (page === 2) {
        if (!nicknameRef.current) return;
        nicknameRef.current.focus();
      }
    }, [page]);

    return (
      <div className="auth-card-box sign-up">
        {page === 1 && (
          <>
            <Input
              ref={emailRef}
              type={"text"}
              placeholder={"이메일주소"}
              value={email}
              onChange={onEmailChangeHandler}
              error={isEmailError}
              message={emailErrorMessage}
              onKeyDown={onEmailKeyDownHandler}
            />
            <Input
              ref={passwordRef}
              type={passwordType}
              placeholder={"비밀번호"}
              icon={passwordButtonIcon}
              onButtonClick={onPasswordButtonClickHandler}
              value={password}
              onChange={onPasswordChangeHandler}
              error={isPasswordError}
              message={passwordErrorMessage}
              onKeyDown={onPasswordKeyDownHandler}
            />
            <Input
              ref={passwordCheckRef}
              type={passwordCheckType}
              placeholder={"비밀번호 재입력"}
              icon={passwordCheckButtonIcon}
              onButtonClick={onPasswordCheckButtonClickHandler}
              value={passwordCheck}
              onChange={onPasswordCheckChangeHandler}
              error={isPasswordCheckError}
              message={passwordCheckErrorMessage}
              onKeyDown={onPasswordCheckKeyDownHandler}
            />
          </>
        )}
        {page === 2 && (
          <>
            <Input
              ref={nicknameRef}
              type={"text"}
              placeholder={"닉네임"}
              value={nickname}
              onChange={onNicknameChangeHandler}
              error={isNicknameError}
              message={nicknameErrorMessage}
              onKeyDown={onNicknameKeyDownHandler}
            />
            <Input
              ref={telNumberRef}
              type={"text"}
              placeholder={"휴대전화 번호"}
              value={telNumber}
              onChange={onTelNumberChangeHandler}
              error={isTelNumberError}
              message={telNumberErrorMessage}
              onKeyDown={onTelNumberKeyDownHandler}
            />
            <Input
              ref={addressRef}
              type={"text"}
              placeholder={"주소"}
              icon={"expand-right-light-icon"}
              onButtonClick={onAddressButtonClickHandler}
              value={address}
              onChange={onAddressChangeHandler}
              error={isAddressError}
              message={addressErrorMessage}
              onKeyDown={onAddressKeyDownHandler}
            />
          </>
        )}
        {page === 1 && (
          <div className="login-button" onClick={onNextButtonClickHandler}>
            {"다음"}
          </div>
        )}
        {page === 2 && (
          <div className="login-button" onClick={onSignUpButtonClickHandler}>
            {"회원가입"}
          </div>
        )}
        <div className="sign-text" onClick={SignInOnClickHandler}>
          로그인
        </div>
      </div>
    );
  };

  return (
    <div id="auth">
      <div className="auth-card">
        {view === "SIGN-IN" && <SignInCard />}
        {view === "SIGN-UP" && <SignUpCard />}
      </div>
    </div>
  );
};

export default Auth;
