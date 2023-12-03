import { HTMLInputTypeAttribute } from "react";

import { RegisterOptions, UseFormRegister } from "react-hook-form";

import { ErrorMessage } from "@hookform/error-message";

import { CenterInfo } from "./CreateForm";

export interface TextInputProps {
  title: string;
  htmlName: keyof CenterInfo;
  type?: HTMLInputTypeAttribute;
  registerFunc: UseFormRegister<CenterInfo>;
  registerOptions?: RegisterOptions;
  errors?: any;
  accept?: string;
  defaultValue?: string | number;
  autocomplete?: string;
  multiple?: boolean;
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
        multiple={props.multiple}
        accept={props.accept}
        autoComplete={props.autocomplete}
        autoCorrect="off"
        spellCheck="false"
        defaultValue={props.defaultValue}
        {...props.registerFunc(props.htmlName, props.registerOptions)}
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
