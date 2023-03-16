import React, { useState } from "react";

export default function SelectComp(props) {
    const defaultSelectValue = props.defaultValue;
    const [selected, setSelected] = useState(defaultSelectValue);
  
    return (
      <>
        <label htmlFor={props.name}>{props.name}</label>
        <select
          id={props.name}
          name={props.name}
          className={props.className}
          defaultValue={selected}
          style={{ color: selected === defaultSelectValue ? "gray" : "black" }}
          onChange={e => setSelected(e.target.value)}
        >
          {props.items.map(item => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </>
    );
}