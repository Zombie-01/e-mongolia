import React from "react";
import pre from "../../public/pre.png";
import pre1 from "../../public/pre1.png";
import { useEffect } from "react";
import { useState } from "react";

export default function Home() {
  const [state, setstate] = useState(false);
  useEffect(() => {
    const handeSubmit = () => {
      setstate(!state);
    };
    window.addEventListener("click", handeSubmit);
  });
  return (
    <>
      <div>
        { state ? (
          <img
            style={ { width: "100vw", height: "100%", marginTop: "-14px" } }
            src={ `${pre.src}` }
            alt=""
          />
        ) : (
          <img
            style={ { width: "100vw", height: "100%" } }
            src={ pre1.src }
            alt=""
          />
        ) }
      </div>
    </>
  );
}
