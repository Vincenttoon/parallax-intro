import React, { useRef } from "react";
import moon from "./assets/project-img/moon.png";
import land from "./assets/project-img/land.png";
import cat from "./assets/project-img/cat.gif";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function App() {
  const ref = useRef();

  return (
    <div>
      <Parallax pages={4}>
        <ParallaxLayer
          offset={0}
          speed={1}
          style={{
            backgroundImage: `url(${moon})`,
            backgroundSize: "cover",
          }}
        />

        <ParallaxLayer
          offset={2}
          speed={1}
          factor={4}
          style={{
            backgroundImage: `url(${land})`,
            backgroundSize: "cover",
          }}
        />

        <ParallaxLayer
          sticky={{ start: 0.9, end: 2.5 }}
          style={{ textAlign: "center" }}
        >
          <img src={cat} alt="Cat using a parachute" />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.2}
          speed={0.05}
          onClick={() => ref.current && ref.current.scrollTo(3)}
        >
          <h2>Welcome to my website</h2>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={2}
          onClick={() => ref.current && ref.current.scrollTo(0)}
        >
          <h2>Hello friend</h2>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
