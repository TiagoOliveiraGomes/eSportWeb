import { InputHTMLAttributes } from "react";
import './styles.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function InputForm(props: InputProps) {
  return (
    <input
    {...props}
    className='dialog-input'
    />
  );
}
