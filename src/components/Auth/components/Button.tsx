import { ButtonProps } from "./types";

const Button = (props: ButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      className="w-full p-2.5 input-background text-white font-semibold text-lg rounded"
    >
      {props.name}
    </button>
  );
};

export default Button;
