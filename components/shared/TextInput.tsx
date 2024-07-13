import { InputHTMLAttributes } from "react";
import { FieldErrors, RegisterOptions, UseFormRegister } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

export interface TextInputProps {
  title: string;
  htmlName: string;
  type?: InputHTMLAttributes<HTMLInputElement>;
  registerFunc: UseFormRegister<any>;
  registerOptions?: RegisterOptions;
  errors?: FieldErrors<any>;
}

const TextInput = (props: TextInputProps) => {
  return (
    <div>
      <label htmlFor={props.htmlName}>{props.title}</label>
      <input
        required={!!props?.registerOptions?.required}
        type="text"
        id={props.htmlName}
        {...props.registerFunc(props.htmlName, props.registerOptions)}
      />
      <ErrorMessage name={props.htmlName} errors={props.errors} />
    </div>
  );
};

export default TextInput;
