import "./layouts/Layout.css";
import "./layouts/Typography.css";
import { About } from "./components/About";

function Layout() {
  return (
    <div className="page-container">
      <div className="sidebar">
        <h1>
          Nuanzhi Zheng
          <br />
          郑暖之
        </h1>
        <nav>
          <ul>
            <li>About</li>
            <li>Work</li>
          </ul>
        </nav>
      </div>
      <About />
      <div className="right-space" />
    </div>
  );
}

export default Layout;
