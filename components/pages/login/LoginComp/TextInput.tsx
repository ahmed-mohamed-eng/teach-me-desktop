import { HTMLInputTypeAttribute } from "react";

import { RegisterOptions, UseFormRegister } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

import { AdminLoginInfo } from ".";

export interface TextInputProps {
  title: string;
  htmlName: keyof AdminLoginInfo;
  type?: HTMLInputTypeAttribute;
  registerFunc: UseFormRegister<AdminLoginInfo>;
  registerOptions?: RegisterOptions;
  errors?: any;
}

const TextInput = (props: TextInputProps) => {
  return (
    <div className="w-full p-3 flex flex-col items-start justify-start space-y-3">
      <label htmlFor={props.htmlName} className="text-2xl font-cairo ">
        {props.title}
        {props.registerOptions?.required ? (
          <span className="text-red-600">*</span>
        ) : null}
      </label>
      <input
        className="w-full border border-black p-3 text-lg rounded-md"
        type={props.type}
        {...props.registerFunc(props.htmlName)}
      />
      <ErrorMessage
        errors={props.errors}
        name={props.htmlName}
        render={({ message }) => <p>{message}</p>}
      />
    </div>
  );
};

export default TextInput;
