export interface InputProps {
  placeholder: string;
  type: "text" | "email" | "password";
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ButtonProps {
  name: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
