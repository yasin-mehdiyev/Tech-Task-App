import { FC } from "react";
// React Router Dom
import { NavLink } from "react-router-dom";
// Custom Hooks
import useResources from "../../../hooks/useResources";
// Models
import { IRoute } from "../../../models/interfaces/constants";

type NavbarProps = {
  routes: IRoute[]
};

const Navbar: FC<NavbarProps> = ({ routes }) => {
  const { resources } = useResources();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mt-2 mb-2">
      <div className="container-fluid">

        <NavLink className="navbar-brand" to={"/"}>{resources["logoTitle"]}</NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {
              routes.length > 0 ? (
                routes.map((route: IRoute) => (
                  <li className="nav-item" key={route.id}>
                    <NavLink className="nav-link" to={route.url}>
                      {({ isActive }) => (
                          <span className={isActive ? "active" : ""}>{resources[route.name]}</span>
                      )}
                    </NavLink>
                  </li>
                ))
              ) : null
            }
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
