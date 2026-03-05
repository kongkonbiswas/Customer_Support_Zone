import Container from "../Container/Container";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="bg-white px-3 md:px-0">
      <Container>
        <div class="flex items-center justify-between py-4">
          <div className="flex items-center">
            <div class="dropdown">
              <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabindex="0"
                class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li className="group">
                  <a href="#" className="navStyleAnchor">
                    <span className="navStyleSpan">Home</span>
                  </a>
                </li>
                <li className="group">
                  <a href="#" className="navStyleAnchor">
                    <span className="navStyleSpan">FAQ</span>
                  </a>
                </li>
                <li className="group">
                  <a href="#" className="navStyleAnchor">
                    <span className="navStyleSpan">Change log</span>
                  </a>
                </li>
                <li className="group">
                  <a href="#" className="navStyleAnchor">
                    <span className="navStyleSpan">Blog</span>
                  </a>
                </li>
                <li className="group">
                  <a href="#" className="navStyleAnchor">
                    <span className="navStyleSpan">Download</span>
                  </a>
                </li>
                <li className="group">
                  <a href="#" className="navStyleAnchor">
                    <span className="navStyleSpan">Contact</span>
                  </a>
                </li>
              </ul>
            </div>
            <img className="w-6 h-6 md:w-10 md:h-10 mr-2.5" src={logo} alt="" />
            <h1 className="md:text-2xl font-bold">
              <span className=" md:text-lg text-gray-500 hidden md:inline-block">
                CS - Ticket System
              </span>
            </h1>
          </div>
          <div className="flex gap-8 items-center">
            <ul class=" hidden md:flex gap-2">
              <li className="group">
                <a href="#" className="navStyleAnchor">
                  <span className="navStyleSpan">Home</span>
                </a>
              </li>
              <li className="group">
                <a href="#" className="navStyleAnchor">
                  <span className="navStyleSpan">FAQ</span>
                </a>
              </li>
              <li className="group">
                <a href="#" className="navStyleAnchor">
                  <span className="navStyleSpan">Changelog</span>
                </a>
              </li>
              <li className="group">
                <a href="#" className="navStyleAnchor">
                  <span className="navStyleSpan">Blog</span>
                </a>
              </li>
              <li className="group">
                <a href="#" className="navStyleAnchor">
                  <span className="navStyleSpan">Download</span>
                </a>
              </li>
              <li className="group">
                <a href="#" className="navStyleAnchor">
                  <span className="navStyleSpan">Contact</span>
                </a>
              </li>
            </ul>
            <div>
              <button className="navBtn">+ New Ticket</button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
