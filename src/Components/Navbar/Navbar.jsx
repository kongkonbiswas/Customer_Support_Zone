import Container from "../Container/Container";
import logo from "../../assets/logo.png";

const navLinks = ["Home", "FAQ", "Changelog", "Blog", "Download", "Contact"];

const Navbar = () => {
  return (
    <nav className="bg-white px-3 md:px-0">
      <Container>
        <div className="flex items-center justify-between py-4">
          {/* Left section: mobile menu + brand */}
          <div className="flex items-center">
            <div className="dropdown">
              <button
                tabIndex={0}
                type="button"
                aria-label="Open navigation menu"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </button>

              {/* Mobile nav links */}
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content z-10 mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
              >
                {navLinks.map((item) => (
                  <li key={item} className="group">
                    <a href="#" className="navStyleAnchor">
                      <span className="navStyleSpan">{item}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <img
              className="mr-2.5 h-6 w-6 md:h-10 md:w-10"
              src={logo}
              alt="CS Ticket System logo"
            />
            <h1 className="font-bold md:text-2xl">
              <span className="hidden text-gray-500 md:inline-block md:text-lg">
                CS - Ticket System
              </span>
            </h1>
          </div>

          {/* Right section: desktop links + CTA */}
          <div className="flex items-center gap-8">
            <ul className="hidden gap-2 md:flex">
              {navLinks.map((item) => (
                <li key={item} className="group">
                  <a href="#" className="navStyleAnchor">
                    <span className="navStyleSpan">{item}</span>
                  </a>
                </li>
              ))}
            </ul>

            <button className="navBtn">+ New Ticket</button>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
