import SearchIcon from "./Icon/SearchIcon";

const SearchBar = (props) => {
  // eslint-disable-next-line react/prop-types
  const { onChange, value } = props;
  return (
    <div className="flex items-center relative">
      <button className="absolute left-2">
        <SearchIcon />
      </button>
      <input
        type="text"
        name="search"
        placeholder="Search"
        value={value}
        onChange={onChange}
        className="bg-white h-10 px-8 rounded-xl focus:border-[#8B8B8B] focus:ring-[#8B8B8B] border border-[#8B8B8B] w-64 text-[16px] placeholder-black"
      />
    </div>
  );
};

export default SearchBar;
