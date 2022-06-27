import "./input.css";

type PropsType = {
  placeholder: string;
  value?: string;
  onChangeHandler?: (e: any) => void;
  autoFocus?: boolean;
  onBlurHandler?: (e: any) => void;
};

export const Input: React.FC<PropsType> = ({
  placeholder,
  value,
  onChangeHandler,
  autoFocus,
  onBlurHandler,
}) => {
  return (
    <label className="pure-material-textfield-outlined">
      <input
        placeholder=" "
        value={value}
        onChange={(e) => onChangeHandler && onChangeHandler(e.target.value)}
        autoFocus
        onBlur={onBlurHandler}
      />
      <span>{placeholder}</span>
    </label>
  );
};
