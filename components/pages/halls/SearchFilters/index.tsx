import TextSearch from "./TextSearch";
import OptionsSearch from "./OptionsSearch";

const SearchFilters = () => {
  return (
    <section className="w-full bg-white p-3 flex items-center justify-start rounded-lg shadow-xl space-x-5">
      <TextSearch />
      <OptionsSearch
        htmlName="center-name"
        placeholder="Select Center"
        options={[]}
      />
      <OptionsSearch
        htmlName="admin-name"
        placeholder="Select Admin"
        options={[]}
      />
      <OptionsSearch
        htmlName="creation-year"
        placeholder="Select Creation Year"
        options={[]}
      />
      <OptionsSearch
        htmlName="creation-month"
        placeholder="Select Creation Month"
        options={[]}
      />
      <OptionsSearch
        htmlName="hall-status"
        placeholder="Select Status"
        options={[]}
      />
    </section>
  );
};

export default SearchFilters;
