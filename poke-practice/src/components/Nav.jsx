import { Link } from "react-router";

//We are going to use the link in a similar manner
// to the way we used <a> and href in multipage application

function Nav() {
  return (
    <div className="nav">
      <Link to="/">
        <div>Welcome</div>
      </Link>
      <Link to="/pokelist">
        <div>Find a Pokemon</div>
      </Link>
    </div>
  );
}

export default Nav;
