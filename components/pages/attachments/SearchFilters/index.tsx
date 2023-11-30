import TextSearch from "./TextSearch";
import OptionsSearch from "./OptionsSearch";

const SearchFilters = () => {
  return (
    <section className="w-full bg-white p-3 flex items-center justify-between rounded-lg shadow-xl space-x-5">
      <TextSearch name="Search For Name" />
      <OptionsSearch
        htmlName="select-year"
        placeholder="Select Year"
        options={[]}
      />
      <OptionsSearch
        htmlName="select-month"
        placeholder="Select Month"
        options={[]}
      />
      <OptionsSearch
        htmlName="select-center"
        placeholder="Select Center"
        options={[]}
      />
      <OptionsSearch
        htmlName="select-hall"
        placeholder="Select Hall"
        options={[]}
      />
      <OptionsSearch
        htmlName="select-teacher"
        placeholder="Select Teacher"
        options={[]}
      />
      <OptionsSearch
        htmlName="select-admin"
        placeholder="Select Admin"
        options={[]}
      />
    </section>
  );
};

export default SearchFilters;
