import { ChangeEvent, KeyboardEvent, forwardRef } from "react";
import "./style.css";

interface Props {
  type: "text" | "password";
  error: boolean;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;

  icon?: "eye-light-off-icon" | "eye-light-on-icon" | "expand-right-light-icon";
  onButtonClick?: () => void;

  message?: string;

  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
}

const Input = forwardRef<HTMLInputElement, Props>((props: Props, ref) => {
  const { placeholder, error, type, value, icon, message } = props;
  const { onChange, onButtonClick, onKeyDown } = props;

  const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (!onKeyDown) return;
    onKeyDown(e);
  };

  return (
    <div className="input-box">
      <div className={error ? "input-container-error" : "input-container"}>
        <input
          className="input"
          type={type}
          placeholder={placeholder}
          value={value}
          ref={ref}
          onChange={onChange}
          onKeyDown={onKeyDownHandler}
        />
        {onButtonClick !== undefined && (
          <div className="icon-button" onClick={onButtonClick}>
            {icon !== undefined && <div className={`icon ${icon}`}></div>}
          </div>
        )}
      </div>
      {message !== undefined && (
        <div className="inputbox-message">{message}</div>
      )}
    </div>
  );
});

export default Input;
