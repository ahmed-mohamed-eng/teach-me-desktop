import TextSearch from "./TextSearch";
import OptionsSearch from "./OptionsSearch";

const SearchFilters = () => {
  return (
    <section className="w-full bg-white p-3 flex items-center justify-start rounded-lg shadow-xl space-x-5">
      <TextSearch name="Search Admin Name" />
      <OptionsSearch
        htmlName="creator-admin"
        placeholder="Select Creator Admin"
        options={[]}
      />
      <OptionsSearch
        htmlName="admin-year"
        placeholder="Select Admin Year"
        options={[]}
      />
      <OptionsSearch
        htmlName="admin-month"
        placeholder="Select Admin Month"
        options={[]}
      />
      <OptionsSearch
        htmlName="admin-state"
        placeholder="Select Admin State"
        options={[]}
      />
      <OptionsSearch
        htmlName="admin-location"
        placeholder="Select Admin Location"
        options={[]}
      />
    </section>
  );
};

export default SearchFilters;
