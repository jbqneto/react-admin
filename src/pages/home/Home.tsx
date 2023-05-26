import React, { BaseSyntheticEvent, useState } from "react";
import { state } from "../../states/states";

export default function Home() {
  const [count, setCount] = useState(0);

  state.subscribe((next) => console.log(next));

  const clickListener = (evt: BaseSyntheticEvent) => {
    console.log(evt);
    setCount(count + 1);
  };

  return (
    <>
      <div>
        <h1>Hello {count}</h1>
        <div className="add">
          <button onClick={clickListener}>Add</button>
        </div>
        <ul className="list-group">
          {Array(count)
            .fill("Item")
            .map((item, index) => (
              <li key={index} className="list-group-item">
                {`${item} ${index}`}
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}
