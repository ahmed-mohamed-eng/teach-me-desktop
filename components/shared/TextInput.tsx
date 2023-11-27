import { InputHTMLAttributes } from "react";
import { RegisterOptions, UseFormRegister } from "react-hook-form";

export interface TextInputProps {
  title: string;
  htmlName: string;
  type?: InputHTMLAttributes<HTMLInputElement>;
  registerFunc: UseFormRegister<any>;
  registerOptions?: RegisterOptions;
}

const TextInput = (props: TextInputProps) => {
  return (
    <div>
      <label htmlFor={props.htmlName}>{props.title}</label>
      <input
        type="text"
        {...props.registerFunc(props.htmlName, props.registerOptions)}
      />
    </div>
  );
};

export default TextInput;
