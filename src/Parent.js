import AppV2 from "./AppV2";
import { useState } from "react";

function Parent() {
  const [mount, setMount] =
    useState(false);
  const toggleMount = () => {
    setMount((prev) => !prev);
  };

  return (
    <>
      <button onClick={toggleMount}>
        Toggle Mount
      </button>
      <hr />
      {mount && <AppV2 />}
    </>
  );
}

export default Parent;

// Mounting
// Update
// Unmounting
