import { ButtonProps } from './types';

const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <button
      {...rest}
      className="bg-button w-full rounded p-2.5 text-lg font-semibold text-white"
    >
      {children}
    </button>
  );
};

export default Button;
