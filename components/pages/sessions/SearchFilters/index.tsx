import TextSearch from "./TextSearch";
import OptionsSearch from "./OptionsSearch";

const SearchFilters = () => {
  return (
    <section className="w-full bg-white p-3 flex items-center justify-between rounded-lg shadow-xl space-x-5">
      <TextSearch name="Search For Session Name" />
      <OptionsSearch
        htmlName="teacher"
        placeholder="Select Teacher"
        options={[]}
      />
      <OptionsSearch
        htmlName="state"
        placeholder="Session State"
        options={[]}
      />
      <OptionsSearch
        htmlName="month"
        placeholder="Session Month"
        options={[]}
      />
      <OptionsSearch htmlName="year" placeholder="Session Year" options={[]} />
      <OptionsSearch
        htmlName="center"
        placeholder="Session Center"
        options={[]}
      />
    </section>
  );
};

export default SearchFilters;
