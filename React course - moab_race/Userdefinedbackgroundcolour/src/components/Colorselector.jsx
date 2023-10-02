import { useState } from "react";

export default function Colorselector() {
  const [input, setInput] = useState("#ffffff");
  return (
    <>
      <div className="colourBox" style={{ backgroundColor: input }}>
        <form className="form">
          <input
            type="color"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <label className="text">User defined background colour</label>
        </form>
      </div>
    </>
  );
}
