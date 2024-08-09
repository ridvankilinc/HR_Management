import { InputProps } from "./types";

const Input = (props: InputProps) => {
  return (
    <input
      required
      value={props.value}
      onChange={props.onChange}
      type={props.type}
      placeholder={props.placeholder}
      className="bg-transparent outline-none border border-gray-600 focus:border-gray-100 text-white rounded text-sm p-3"
    />
  );
};

export default Input;
