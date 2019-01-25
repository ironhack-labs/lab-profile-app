import React from "react";

export const Select = ({ data, infoname, func }) => {
  return (
    <div className="select">
      <select
        onChange={e => {
          func(e,infoname);
        }}
      >
        {data.map((e,i)=> (
          <option key={i}>{e}</option>
        ))}
      </select>
    </div>
  );
};
