import { useState } from "react";

export default function Reactstate() {
  const [input, setInput] = useState("");

  /*function dataChanged (event) {
    console.log(event.target)
    setInput(event.target.value);
  }*/ /* This is the same as the onChange in the input tag below */

  return (
    <section>
      <form>
        <input
          placeholder="Your name"
          value={input}
          onChange={(e) =>
            setInput(e.target.value)
          } /*alternative to the above line using the function above*/
          /*onChange={dataChanged}*/
        />
      </form>
      <p> Hello, {input}</p>
    </section>
  );
}
