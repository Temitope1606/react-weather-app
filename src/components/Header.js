import SearchBox from "./SearchBox";

const Header = ({ city, setCity, onSearch }) => {
  return (
    <header className="header">
      <h1>WEATHER TODAY</h1>
      <SearchBox onSearch={onSearch} setCity={setCity} />
    </header>
  );
};

export default Header;
