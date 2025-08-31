import { About } from "../components/About";
import { Starburst } from "../components/Starburst";

export default function HomePage() {
  return (
    <div className="page-container">
      <div className="sidebar">
        <div style={{ position: "relative", width: "fit-content" }}>
          <div
            style={{
              position: "absolute",
              zIndex: 0,
              top: "50%",
              left: "28%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <Starburst size={80} color="white" />
          </div>

          <h1 style={{ position: "relative", zIndex: 1, margin: 0 }}>
            Nuanzhi Zheng
            <br />
            郑暖之
          </h1>
        </div>
      </div>
      <About />
      <div className="right-space" />
    </div>
  );
}
