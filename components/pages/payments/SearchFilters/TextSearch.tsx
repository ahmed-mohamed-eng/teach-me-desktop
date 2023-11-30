import { HTMLInputTypeAttribute } from "react";

export interface TextSearchProps {
  name?: string;
  type?: HTMLInputTypeAttribute;
}

const TextSearch = (props: TextSearchProps) => {
  return (
    <div>
      <input
        className="w-full h-10 border border-black rounded-md p-2 text-lg"
        type={props.type}
        placeholder={props.name || "Search For Center Name"}
      />
    </div>
  );
};

export default TextSearch;
