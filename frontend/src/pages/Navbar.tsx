import classNames from "classnames";
import { useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const links = useMemo(
    () => [
      { to: "/record", label: "Transcribe Stream" },
      { to: "/qa", label: "Question and Answer" },
    ],
    []
  );

  const handleActiveLink = (path: string) => {
    return () => {
      setActiveLink(path);
    };
  };

  return (
    <nav className="flex justify-between items-center py-8 text-white">
      <h1>CTV</h1>
      {
        <ul className="flex gap-x-4">
          {links.map(({ to, label }) => {
            const linkClasses = classNames("cursor-pointer", {
              underline: activeLink === to,
            });

            return (
              <li key={to}>
                <Link
                  className={linkClasses}
                  onClick={handleActiveLink(to)}
                  to={to}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      }
    </nav>
  );
};

export default Navbar;
