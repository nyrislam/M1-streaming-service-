import { Link } from "react-router-dom";
import SearchForm from "../molecules/SearchForm";

export default function Header() {
  return (
    <header>
      <div className="header-left">
        <Link to="/"><h1>M1</h1></Link>
        <Link to="/movies">movies</Link>
        <Link to="/series">series</Link>
      </div>
      <div className="header-right">
        <SearchForm />
      </div>
    </header>
  );
}
