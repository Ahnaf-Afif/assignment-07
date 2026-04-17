// import Link from "daisyui/components/link";

import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <div
        className="navbar bg-base-100 shadow-sm px-3 md:px-10
      "
      >
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">KeenKeeper</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <div className="hidden md:flex ">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/Timeline">Timeline</Link>
              </li>
              <li>
                <button>Stats</button>
              </li>
            </div>
            <li>
              <details className="block md:hidden">
                <summary>Pages</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <a>Timeline</a>
                  </li>
                  <li>
                    <a>Stats</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
