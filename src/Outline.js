import React, { useState } from "react";
import "./App.css";

function Outline({ root, onChange }) {
  let [editable, setEditable] = useState(false);

  let subOutlines = root.children.map((child, index) => {
    let childChange = (newChildValue) => {
      let newRoot = Object.assign({}, root);
      newRoot.children[index] = newChildValue;
      onChange(newRoot);
    };
    return (
      <li key={child.id}>
        <Outline root={child} onChange={childChange} />
      </li>
    );
  });

  return (
    <ul>
      {editable ? (
        <>
          <li
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                setEditable(false);
              }
            }}
          >
            <textarea
              defaultValue={root.text}
              onKeyDown={(e) => {
                let newValue = Object.assign({}, root);
                newValue.text = e.target.value;
                onChange(newValue);
              }}
            ></textarea>
          </li>
        </>
      ) : (
        <>
          <li
            onClick={() => {
              setEditable(true);
            }}
          >
            {root.text}
          </li>
        </>
      )}
      {subOutlines}
    </ul>
  );
}
export default Outline;
