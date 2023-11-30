export interface OptionsSearchProps {
  options: any[];
  htmlName?: string;
  placeholder?: string;
}

const OptionsSearch = (props: OptionsSearchProps) => {
  return (
    <div className="h-10 border border-black">
      <select
        className="w-64 h-full p-1 bg-white"
        name={props.htmlName}
        id={`select-${props.htmlName}`}
      >
        <option value="all">
          {props.placeholder || "Select Center Locations"}
        </option>
      </select>
    </div>
  );
};

export default OptionsSearch;
