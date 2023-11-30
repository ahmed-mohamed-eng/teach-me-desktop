import TextSearch from "./TextSearch";
import OptionsSearch from "./OptionsSearch";

const SearchFilters = () => {
  return (
    <section className="w-full bg-white p-3 flex items-center justify-start rounded-lg shadow-xl space-x-5">
      <TextSearch name="Search Teacher Name" />
      <OptionsSearch
        htmlName="creator-admin"
        placeholder="Select Creator Admin"
        options={[]}
      />
      <OptionsSearch
        htmlName="parent-year"
        placeholder="Select Teacher Year"
        options={[]}
      />
      <OptionsSearch
        htmlName="parent-month"
        placeholder="Select Teacher Month"
        options={[]}
      />
      <OptionsSearch
        htmlName="parent-state"
        placeholder="Select Teacher State"
        options={[]}
      />
      <OptionsSearch
        htmlName="parent-location"
        placeholder="Select Teacher Location"
        options={[]}
      />
    </section>
  );
};

export default SearchFilters;
