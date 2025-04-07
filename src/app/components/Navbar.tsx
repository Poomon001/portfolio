export default function Navbar() {
  return (
    <div className="navbar bg-base-300 text-base-content">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl" href="/">
          Poom’s Portfolio
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
