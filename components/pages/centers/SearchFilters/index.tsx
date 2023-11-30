import TextSearch from "./TextSearch";
import OptionsSearch from "./OptionsSearch";

const SearchFilters = () => {
  return (
    <section className="w-full bg-white p-3 flex items-center justify-start rounded-lg shadow-xl space-x-5">
      <TextSearch />
      <OptionsSearch options={[]} />
    </section>
  );
};

export default SearchFilters;
