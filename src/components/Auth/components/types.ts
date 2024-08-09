export interface InputProps {
  placeholder: string;
  type: 'text' | 'email' | 'password';
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ButtonProps
  extends React.ComponentPropsWithoutRef<'button'> {}
