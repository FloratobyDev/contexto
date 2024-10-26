import { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../components/Button";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const links = useMemo(
    () => [
      { to: "/record", label: "Transcribe Stream" },
      { to: "/qa", label: "Question and Answer" },
    ],
    []
  );

  const handleActiveLink = (path: string) => {
    setActiveLink(path);
  };

  console.log("activeLink", activeLink);

  return (
    <nav className="flex justify-between items-center py-8 text-white">
      <h1 className="text-paragraph font-bold px-2 py-1 rounded-lg text-primary">CTX</h1>
      {
        <ul className="flex">
          {links.map(({ to, label }) => {
            return (
              <li key={to}>
                <Button
                  active={activeLink === to}
                  variant="link"
                  onClick={() => {
                    handleActiveLink(to);
                    navigate(to);
                  }}
                >
                  {label}
                </Button>
                {/* <Link
                  className={linkClasses}
                  onClick={handleActiveLink(to)}
                  to={to}
                >
                  {label}
                </Link> */}
              </li>
            );
          })}
        </ul>
      }
    </nav>
  );
};

export default Navbar;
