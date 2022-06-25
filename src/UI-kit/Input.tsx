import "./input.css";

type PropsType = {
  placeholder: string;
  value?: string;
  onChangeHandler?: (e: string) => void;
};

export const Input: React.FC<PropsType> = ({
  placeholder,
  value,
  onChangeHandler,
}) => {
  return (
    <label className="pure-material-textfield-outlined">
      <input
        placeholder=" "
        value={value}
        onChange={(e) => onChangeHandler && onChangeHandler(e.target.value)}
      />
      <span>{placeholder}</span>
    </label>
  );
};
